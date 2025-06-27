import React from 'react'
import "./ManageItems.css";
import ManageItem from '../../components/ManageItem/ManageItem';
import ItemsList from '../../components/ItemsList/ItemsList';

const ManageItems = () => {
  return (
    <div className="items-container text-light">


      <div className="left-column">

      <ManageItem/>

      </div>

      <div className="right-column">

        <ItemsList/>

      </div>

    </div>
  )
}

export default ManageItems