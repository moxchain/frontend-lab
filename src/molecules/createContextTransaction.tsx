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

export const CreateContextTransaction = ({
  setUnsignedTransaction,
  setContextId,
}: {
  setContextId: React.Dispatch<React.SetStateAction<string>>
  setUnsignedTransaction: React.Dispatch<React.SetStateAction<UnsignedTransaction | undefined>>
}) => {
  const {modules} = useContext(MoxContext)
  if (!modules) throw new Error('Mox not initialized')
  
  const [identifier, setIdentifier] = useState("")

  const createContext = async () => {
    try {
      const transaction = await modules.context.createContext(identifier, 64)
      setContextId(transaction.contextId)
      setUnsignedTransaction(transaction.utx)
    } catch (error) {
      
    }
  }

  return (
    <Container fluid>
      <Stack gap={2}>
        <Title>Create Context</Title>
        <Text>Identifier:</Text>
        <Input value={identifier} onChange={(e)=>setIdentifier(e.target.value)} />
        <Button style={{
          width: '50vh'
        }} onClick={createContext} >Create</Button>
      </Stack>
    </Container>
  )
}