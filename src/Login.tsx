import { message } from 'antd'
import React, { FC, useEffect, useRef, useState } from 'react'
import { CodeInput } from 'react-rainbow-components'

interface LoginProps {
  setIsLoggedIn: Function
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
}

const Login: FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [code, setCode] = useState<string>('')
  const codeRef = useRef<any>(null)
  const [codeInvalid, setCodeInvalid] = useState<boolean>(false)

  useEffect(() => {
    if (codeRef) {
      codeRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (code.length === 4) {
      if (code === '3729') {
        setCodeInvalid(false)
        message.success('Welcome Clay')
        return setIsLoggedIn(true)
      } else if (code === '01640') {
        setCodeInvalid(false)
        message.success('Welcome Leslie')
        return setIsLoggedIn(true)
      } else if (code === '1934') {
        setCodeInvalid(false)
        message.success('Welcome Jacob')
        return setIsLoggedIn(true)
      } else {
        setCodeInvalid(true)
      }
    } else {
      setCodeInvalid(false)
    }
  }, [code, setIsLoggedIn])

  return (
    <div className='login_root'>
      <CodeInput
        label='Enter your Code'
        error={codeInvalid && 'Looks like the code is invalid'}
        onChange={setCode}
        value={code}
        ref={codeRef}
      />
    </div>
  )
}

export default Login
