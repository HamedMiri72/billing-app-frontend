import React from 'react'
import MenuBar from './components/MenuBar/MenuBar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageItems from './pages/ManageItems/ManageItems';
import ManageUsers from './pages/ManageUsers/ManageUsers';
import ManageCategories from './pages/ManageCategories/ManageCategories';
import Explor from './pages/Explor/Explor';

const App = () => {
  return (
    <div>
      <MenuBar/>

      <Routes>

        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/explor" element={<Explor/>}/>
        <Route path="/category" element={<ManageCategories/>}/>
        <Route path="/items" element={<ManageItems/>}/>
        <Route path="users" element={<ManageUsers/>}/>

      </Routes>

      
    </div>
  )
}

export default App;