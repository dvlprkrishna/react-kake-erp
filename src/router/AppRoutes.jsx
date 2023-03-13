import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../containers/Dashboard/Dashboard'
import Inventory from '../containers/Inventory/Inventory'
import Sales from '../containers/Sales/Sales'
import Invoices from '../containers/Invoices/Invoices'
import Customers from '../containers/Customers/Customers'
import CustomerSupport from '../containers/CustomerSupport/CustomerSupport'

export default function appRoutes() {
  return (
    <Routes>
        <Route path='/' exact element={<Dashboard/>} ></Route>
        <Route path='/inventory' element={<Inventory/>} ></Route>
        <Route path='/sales' element={<Sales/>} ></Route>
        <Route path='/invoices' element={<Invoices/>} ></Route>
        <Route path='/customers' element={<Customers/>} ></Route>
        <Route path='/customerSupport' element={<CustomerSupport/>} ></Route>
    </Routes>
  )
}
