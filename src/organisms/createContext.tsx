import { UnsignedTransaction } from '@mox/sdk'
import React, {useState} from 'react'
import { Stack } from 'react-bootstrap'
import {
  Card,
  Text
} from '../atoms'
import {
  CreateContextTransaction
} from '../molecules/createContextTransaction'
import {
  SignTransaction
} from '../molecules/signTransaction'
import {
  SendTransaction
} from '../molecules/sendTransaction'

export const CreateContext = () => {
  const [unsignedTransaction, setUnsignedTransaction] = useState<UnsignedTransaction>()
  const [signature, setSignature] = useState("")
  const [txhash, setTxhash] = useState("")
  return <Card>
    <Stack gap={2}>
      <CreateContextTransaction setUnsignedTransaction={setUnsignedTransaction}/>
      {
        unsignedTransaction 
        && 
        <SignTransaction unsignedTransaction={unsignedTransaction} setSignature={setSignature}/>
      }

      {
        signature.length > 0 && <Text>Signature: {signature}</Text>
      }
      
      { 
        signature.length > 0
        && 
        unsignedTransaction 
        && 
        <SendTransaction unsignedTransaction={unsignedTransaction} signature={signature as `0x${string}`} setTxhash={setTxhash}/>
      }
      {
        txhash.length > 0
        &&
        <Text>Tx Hash: {txhash}</Text>
      }
    </Stack>
  </Card>
}