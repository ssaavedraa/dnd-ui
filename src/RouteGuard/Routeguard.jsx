import React from 'react'
import { Navigate, Outlet,  } from 'react-router-dom'

export default function Routeguard() {
  const accessToken = window.localStorage.getItem('authToken')

  return (
    accessToken
      ? <Outlet />
      : <Navigate to='/' replace />
  )
}
