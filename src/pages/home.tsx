import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from '../organisms/header'
import { CreateContext } from '../organisms/createContext'
import { SaveAccount } from '../organisms/saveAccount'
import { SetWebhook } from '../organisms/setWebhook'
import { EnableApi } from '../organisms/enableApiId'
export function HomePage() {
  return (
    <Container fluid>
      <Header/>    
      <CreateContext />
      <hr/>
      <SaveAccount />
      <hr/>
      <SetWebhook />
      <hr/>
      <EnableApi />
    </Container>
  )
}