import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  alert("Press 'OK' to logout succeessfully")
  navigate('/')
                
        

    
}

export default Logout