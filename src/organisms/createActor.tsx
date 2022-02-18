import { UnsignedTransaction } from '@moxchain/sdk'
import React, {useState} from 'react'
import { Stack } from 'react-bootstrap'
import {
  Card,
  Text
} from '../atoms'
import {
  CreateActorTransaction
} from '../molecules/createActorTransaction'
import {
  SignTransaction
} from '../molecules/signTransaction'
import {
  SendTransaction
} from '../molecules/sendTransaction'

export const CreateActor = () => {
  const [unsignedTransaction, setUnsignedTransaction] = useState<UnsignedTransaction>()
  const [actorId, setActorId] = useState('')
  const [signature, setSignature] = useState("")
  const [txhash, setTxhash] = useState("")
  return <Card>
    <Stack gap={2}>
      <CreateActorTransaction setUnsignedTransaction={setUnsignedTransaction} setActorId={setActorId}/>
      {
        unsignedTransaction 
        && 
        <SignTransaction unsignedTransaction={unsignedTransaction} setSignature={setSignature}/>
      }

      {
        actorId.length > 0 && <Text>ActorID: {actorId}</Text>
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