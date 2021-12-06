import React, { useContext, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import {
  Title,
  Text,
  Input,
  Button
} from '../atoms'
import { UnsignedTransaction } from '@mox/sdk'
import MoxContext from '../contexts/mox'

export const CreateContextTransaction = ({
  setUnsignedTransaction
}: {
  setUnsignedTransaction: React.Dispatch<React.SetStateAction<UnsignedTransaction | undefined>>
}) => {
  const {modules} = useContext(MoxContext)
  if (!modules) throw new Error('Mox not initialized')
  
  const [identifier, setIdentifier] = useState(0)

  const createContext = async () => {
    try {
      const transaction = await modules.context.createContext(identifier.toString(), 64)
      setUnsignedTransaction(transaction)
    } catch (error) {
      
    }
  }

  return (
    <Container fluid>
      <Stack gap={2}>
        <Title>Create Context</Title>
        <Text>Identifier:</Text>
        <Input type='number' value={identifier} onChange={(e)=>setIdentifier(e.target.value as any)} />
        <Button style={{
          width: '50vh'
        }} onClick={createContext} >Create</Button>
      </Stack>
    </Container>
  )
}