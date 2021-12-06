import React from 'react'
import {
  Card
} from '../atoms'
import {
  SaveAccountApi
} from '../molecules/saveAccountApi'

export const SaveAccount = () => {
  return <Card>
      <SaveAccountApi />
  </Card>
}