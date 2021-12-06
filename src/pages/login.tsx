import {SetSeed} from '../molecules/setSeed'
import { Container } from 'react-bootstrap'

export function LoginPage() {

  return <Container
   style={{
     flex: 1,
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     height: '100vh'
   }}
   fluid>
     <div style={{
       width: '70vh'
     }}>
     <SetSeed/>
       </div>
  </Container>
}