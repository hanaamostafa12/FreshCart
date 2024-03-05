import React from 'react'
import Navbar from './../../Componets/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
       <Navbar/>
       <Outlet/>

    </>
  )
}
