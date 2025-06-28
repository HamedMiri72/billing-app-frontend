import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import './CategoryList.css';

const CategoryList = () => {

  const { categories } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');


  const filterByCategory = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-list-container" style={{ height: "100vh", overflowY: "auto", overflowX: "hidden" }}>

      <div className="row pe-2">

        <div className='input-group mb-3'>
          <input type="text" name='keyword' id='keyword' placeholder='search by keyword' className='form-control' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <span className='input-group-text bg-warning'>
            <i className='bi bi-search'></i>
          </span>
        </div>

      </div>
      <div className='row g-3 pe-2'>


        {filterByCategory.map((category, index) => (
          <div className="col-12" key={index}>

            <div className="card p-3" style={{ backgroundColor: category.bgColor }}>
              <div className="d-flex align-items-center">
                <div className='' style={{ marginRight: "15px" }}>
                  <img src={category.imageUrl} alt={category.name} className='category-image' />
                </div>
                <div className="flex-grow-1">
                  <h5 className='mb-1 text-white'>{category.name}</h5>
                  <p className='mb-0 text-white'>{category.items}</p>
                </div>
                <div>
                  <button className='btn btn-danger btn-sma'>
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryList