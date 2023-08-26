import React from 'react'

import { Typography } from '@mui/material'
import { Register } from '../components/Register'
import { Login } from '../components/Login'


export const UserPage = () => {
  return (
    <>
    <Typography>Register</Typography>
    <Register />
    <Login />
    </>
  )
}
