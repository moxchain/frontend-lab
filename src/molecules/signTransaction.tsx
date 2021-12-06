import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import {
  Button
} from '../atoms'
import { UnsignedTransaction } from '@mox/sdk'
import MoxContext from '../contexts/mox'

export const SignTransaction = ({
  unsignedTransaction,
  setSignature
}: {
  unsignedTransaction: UnsignedTransaction
  setSignature: React.Dispatch<React.SetStateAction<string>>
}) => {
  const {modules} = useContext(MoxContext)
  if (!modules) throw new Error('Mox not initialized')

  const sign = () => {
    const payload = modules.transaction.signPayload(unsignedTransaction)
    const signature = modules.account.sign(payload)
    setSignature(signature)
  }

  return (
    <Container fluid>
      <Button  style={{
      width: '50vh'
    }} onClick={sign} >Sign</Button>
    </Container>
  )
}