import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Weather from '../pages/Weather'
import ProtectedRoute from './ProtectedRoute'


const Index = () => {
  return (
    <div>
       <Routes>
      
         <Route path='/weather' element={
         <ProtectedRoute >
         <Weather/>
         </ProtectedRoute>}/>
         <Route path='/' element={<Weather/>}/>
         <Route path='/home' element={<Home/>}/>
       </Routes>
    </div>
  )
}

export default Index