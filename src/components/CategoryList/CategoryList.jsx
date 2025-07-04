
import './CategoryList.css';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { deleteCategory } from '../../service/CategoryService';
import toast from 'react-hot-toast';

const CategoryList = () => {

  const {categories, setCategories} = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');


  const filteredCategories = categories.filter(category => {
    return category.name.toLowerCase().includes(searchTerm.toLowerCase());
  })

const deleteByCategoryId = async (categoryId) => {

  try{

    const response = await deleteCategory(categoryId);
    if(response.status === 200){
      const updatedCategories = categories.filter(category => category.categoryId !== categoryId);
      setCategories(updatedCategories);
      toast.success("Category deleted successfully");
    }else{
      toast.error("Failed to delete category");
    }
  }catch(error){
    console.error("Error deleting category:", error);
  }
}

  

  return (
    <div className="category-list-container" style={{ height: "100vh", overflowY: "auto", overflowX: "hidden" }}>

      <div className="row pe-2">

        <div className='input-group mb-3'>
          <input type="text" className='form-control' name='search' id='search' placeholder='Search a category' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          <span className='input-group-text bg-warning'>
            <i className='bi bi-search'></i>
          </span>
        </div>

      </div>
      <div className='row g-3 pe-2'>


        {filteredCategories.map((category, index) => (
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
                  <button className='btn btn-danger btn-sma' onClick={() => deleteByCategoryId(category.categoryId)}>
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