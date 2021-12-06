import React, { useContext, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import {
  Title,
  Text,
  Input,
  Button
} from '../atoms'
import MoxContext from '../contexts/mox'

export const SetWebhookApi = () => {
  const {modules} = useContext(MoxContext)
  if (!modules) throw new Error('Mox not initialized')
  
  const [url, setUrl] = useState("")
  const [saved, setSaved] = useState("")

  const setWebhook = async () => {
    try {
      const set = await modules.admin.setWebhook(url)
      setSaved(set ? 'Saved' : 'Error')
    } catch (error) {
      
    }
  }

  return (
    <Container fluid>
      <Stack gap={2}>
        <Title>Set webhook</Title>
        <Text>Url:</Text>
        <Input value={url} onChange={(e)=>setUrl(e.target.value)} />
        <Button style={{
          width: '50vh'
        }} onClick={setWebhook} >Set</Button>
        {saved.length > 0 && <Text>{saved}</Text>}
      </Stack>
    </Container>
  )
}