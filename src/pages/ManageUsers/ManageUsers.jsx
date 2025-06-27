import React from 'react'
import UserFrom from '../../components/UserFrom/UserFrom'
import UserList from '../../components/UserList/UserList'


const ManageUsers = () => {
  return (
    <div className="category-container text-light">

      <div className="left-column">

        <UserFrom/>

        
      </div>

      <div className="right-column">

        <UserList/>

        
      </div>


    </div>
  )
}

export default ManageUsers