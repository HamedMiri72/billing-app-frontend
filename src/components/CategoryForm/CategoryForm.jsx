import React from 'react'

const CategoryForm = () => {
  return (
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
                            <input type="text" name='name' id='name' className='form-control' placeholder='Category name'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="description" className='form-label'>Name</label>
                            <textarea rows={5} type="text" name='description' id='description' className='form-control' placeholder='Write content hare...'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='bColor' className='form-label'>Background Color</label>
                            <br/>
                            <input type="color" name='bgColor' id='bgColor' placeholder='#ffffff' className='from-control'/>
                        </div>
                        <button type='submit' className='btn btn-warming w-100'>Save</button>

                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryForm