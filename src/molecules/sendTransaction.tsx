import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import {
  Button
} from '../atoms'
import { UnsignedTransaction } from '@mox/sdk'
import MoxContext from '../contexts/mox'

export const SendTransaction = ({
  unsignedTransaction,
  signature,
  setTxhash
}: {
  unsignedTransaction: UnsignedTransaction
  signature: `0x${string}`
  setTxhash: React.Dispatch<React.SetStateAction<string>>
}) => {
  const {modules} = useContext(MoxContext)
  if (!modules) throw new Error('Mox not initialized')

  const send = async () => {
    const tx = modules.transaction.constructSignedTx(unsignedTransaction, signature)
    const transactionHash = await modules.node.submitTx(tx)
    setTxhash(transactionHash)
  }

  return (
    <Container fluid>
      <Button style={{
      width: '50vh'
    }} onClick={send} >Send</Button>
    </Container>
  )
}