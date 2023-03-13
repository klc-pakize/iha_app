import { Container } from '@mui/material'
import React, { useState } from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [showLogin,setShowLogin] = useState(true)
  const [visible, setVisible] = React.useState(false);
  const { login , register} = useAuthContext();

  const navigate = useNavigate()
  const handleVisible = () => {
    setVisible(!visible);
  };
  const handleToggle = ()=>{
    setShowLogin(!showLogin)
  }
  return (
    <Container sx={{height:"90vh"}}>
      {showLogin ? (
        <Login
          handleToggle={handleToggle}
          handleVisible={handleVisible}
          visible={visible}
          login={login}
          navigate={navigate}
        />
      ) : (
        <Register
          handleToggle={handleToggle}
          handleVisible={handleVisible}
          visible={visible}
          register={register}
          navigate={navigate}
        />
      )}
    </Container>
  );
}

export default Auth