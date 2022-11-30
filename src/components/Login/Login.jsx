import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserCredentials } from '../../redux/features/auth/authSlice';
import loginService from '../../services/auth'
import './Login.scss'

export default function Login() {
  const userRef = useRef()
  const errorRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrorMessage('')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userData = await loginService.login({
        username, password
      })

      dispatch(setUserCredentials(userData))

      navigate('/characters')
    } catch (error) {
      const message = error.response.data.message

      setErrorMessage(message)

      errorRef.current.focus()
    }
  }

  const handleUserInput = (e) => setUsername(e.target.value)
  const handlePasswordInput = (e) => setPassword(e.target.value)

  return (
    <div>
      <form onSubmit={handleSubmit} className='login-form'>
        <p
          className={errorMessage ? 'errorMessage' : 'offScreen'}
          ref={errorRef}
        >
          {errorMessage}
        </p>
        <div className='login-form--input'>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            ref={userRef}
            value={username}
            autoComplete='on'
            required
            onChange={handleUserInput}
          />
        </div>
        <div className='login-form--input'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            autoComplete='on'
            required
            onChange={handlePasswordInput}
          />
        </div>
        <div className='login-form--buttons'>
          <button className='button button--primary'>Login</button>
          <button className='button button--secondary'>Register</button>
        </div>
      </form>
    </div>
  )
}
