import React from 'react'

const ManageItem = () => {
  return (

    <div className="item-form-control" style={{height: "100vh", overflowY: "auto", overflowX: "hidden"}}>
        <div className='mx-2 mt-2'>

        <div className="row">
            <div className="card col-md-8 form-container">
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="image" className='form-label'>

                                <img src="https://placehold.co/48x48" alt="" width={48}/>

                            </label>
                            <input type="file" id='image' name='image' className='form-control' hidden/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input type="text" name='name' id='name' className='form-control' placeholder='Item name'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="category" className='form-label'>Category</label>
                            <select name="category" id="category" className="form-control">
                                <option value="">--SELECT CATEGORY--</option>
                                <option value="category 1">category 1</option>
                                <option value="category 2">category 2</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className='form-label'>Price</label>
                            <input type="number" name='price' id='price' className='form-control' placeholder='0.00'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="description" className='form-label'>Name</label>
                            <textarea rows={5} type="text" name='description' id='description' className='form-control' placeholder='Write content hare...'/>
                        </div>
                        
                        <button type='submit' className='btn btn-warming w-100'>Save</button>

                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default ManageItem