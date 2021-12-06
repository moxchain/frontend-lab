import React, { useContext, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import {
  Title,
  Text,
  Input,
  Button
} from '../atoms'
import MoxContext from '../contexts/mox'

export const SetApiId = () => {
  const {modules} = useContext(MoxContext)
  if (!modules) throw new Error('Mox not initialized')
  
  const [apiId, setApiId] = useState("")

  const enable = () => {
    try {
      modules.admin.enableId(apiId)
    } catch (error) {
      
    }
  }

  return (
    <Container fluid>
      <Stack gap={2}>
        <Title>Set api id</Title>
        <Text>ID:</Text>
        <Input value={apiId} onChange={(e)=>setApiId(e.target.value)} />
        <Button style={{
          width: '50vh'
        }} onClick={enable} >Enable</Button>
      </Stack>
    </Container>
  )
}