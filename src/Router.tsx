import React, { useEffect, useContext } from 'react';
import mox from '@moxchain/sdk'
import { HomePage, LoginPage } from './pages'
import MoxContext from './contexts/mox'
import AddressContext from './contexts/address'

function Router() {

  const {modules, setModules} = useContext(MoxContext)
  const { address } = useContext(AddressContext)

  useEffect(()=>{
    mox({
      network: 'apertio',
      serviceUrl: 'http://localhost:3000'
    }).then(modules => {
      setModules(modules)
    })
  }, [])

  if (modules == null) {
    return (
      <div>
        <h1> Loading Mox SDK </h1>
        </div>
    )
  }

  if (address.length === 0) {
    return (
        <LoginPage/>
    )
  }
  return (
      <HomePage/>
  );
}

export default Router;
