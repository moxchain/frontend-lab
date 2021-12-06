import React, { useState } from 'react'
import {Toast as BToast} from 'react-bootstrap'
import {
  Text
} from '../atoms'

export const Toast = ({
  title,
  message,
  type
}: {
  title: string,
  message: string,
  type: 'Danger' | 'Success' | 'Warning'
}) => {

  const [show, setShow] = useState(true)

  return (
    <BToast bg={type} onClose={()=>setShow(false)} show={show} delay={3000} autohide>
      <BToast.Header>
        <strong><Text>{title}</Text></strong>
      </BToast.Header>
      <BToast.Body>
        <Text>
          {message}
        </Text>
      </BToast.Body>
    </BToast>
  )

}