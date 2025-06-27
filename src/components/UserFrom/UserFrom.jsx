import React from 'react'

const UserFrom = () => {
  return (
    <div className='mx-2 mt-2'>

        <div className="row">
            <dic className="card col-md-8 form-container">
                <div className="card-body">
                    <form>
                        <div className='mb-3'>
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input type="text" name='name' id='name' className='form-control' placeholder='Hamed miri'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" name='email' id='email' placeholder='youname@example.com' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input type="password" name='password' id='password' className='form-control' placeholder='************' />
                        </div>
                        <button type='submit' className='btn btn-warning w-100'>Save</button>

                        
                    </form>
                </div>
            </dic>
        </div>
    </div>
  )
}

export default UserFrom