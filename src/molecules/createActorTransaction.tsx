import React, { useContext, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import {
  Title,
  Text,
  Input,
  Button
} from '../atoms'
import { UnsignedTransaction } from '@moxchain/sdk'
import MoxContext from '../contexts/mox'

export const CreateActorTransaction = ({
  setActorId,
  setUnsignedTransaction
}: {
  setActorId: React.Dispatch<React.SetStateAction<string>>
  setUnsignedTransaction: React.Dispatch<React.SetStateAction<UnsignedTransaction | undefined>>
}) => {
  const {modules} = useContext(MoxContext)
  if (!modules) throw new Error('Mox not initialized')
  
  const [identifier, setIdentifier] = useState('')
  const [commonType, setCommonType] = useState(0)
  const [contextId, setContextId] = useState("")
  const [availableToSale, setAvailableToSale] = useState(false)
  const [price, setPrice] = useState<number | undefined>()

  const createActor = async () => {
    try {
      const transaction = await modules.actor.createActor({
        identifier: identifier,
        commonType,
        contextId,
        availableToSale,
        to: modules.account.publicKey(),
        price: price || null
      }, 64)
      setActorId(transaction.actorId)
      setUnsignedTransaction(transaction.utx)
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <Container fluid>
      <Stack gap={2}>
        <Title>Create Actor</Title>
        <Text>Context ID:</Text>
        <Input value={contextId} onChange={(e)=>setContextId(e.target.value)} />
        <Text>Identifier:</Text>
        <Input value={identifier} onChange={(e)=>setIdentifier(e.target.value)} />
        <Text>Common Type:</Text>
        <Input type='number' value={commonType} onChange={(e)=>setCommonType(e.target.value as any)} />
        <Text>Available to sale: </Text>
        <select onSelect={(val)=>{
          val.currentTarget.value as any == 0 ? setAvailableToSale(false) : setAvailableToSale(true)
        }}>
          <option value={1} >Yes</option>
          <option value={0} >No</option>
        </select>
        <Text>Price: </Text>
        <Input type='number' value={price} onChange={(e)=>setPrice(e.target.value as any)} />
        <Button style={{
          width: '50vh'
        }} onClick={createActor} >Create</Button>
      </Stack>
    </Container>
  )
}