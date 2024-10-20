import { useState } from 'react'
import PhoneOtpForm from './components/Phone-otpLogin'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Login with your Phone number</h1>
      <PhoneOtpForm/>
    </div>
  )
}

export default App
