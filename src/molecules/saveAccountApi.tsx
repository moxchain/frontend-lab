import React, { useContext, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import {
  Title,
  Text,
  Button
} from '../atoms'
import MoxContext from '../contexts/mox'

export const SaveAccountApi = () => {
  const {modules} = useContext(MoxContext)
  if (!modules) throw new Error('Mox not initialized')
  
  const [id, setId] = useState("")

  const saveAccount = async () => {
    try {
      const accountId = await modules.admin.save()
      modules.admin.enableId(accountId)
      setId(accountId)
    } catch (error) {
      
    }
  }

  return (
    <Container fluid>
      <Stack gap={2}>
        <Title>Save Account</Title>
        <Text>Id: {id}</Text>
        <Button style={{
          width: '50vh'
        }} onClick={saveAccount} >Save</Button>
      </Stack>
    </Container>
  )
}