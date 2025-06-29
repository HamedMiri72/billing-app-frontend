import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { addCategory } from '../../service/CategoryService';
import toast from 'react-hot-toast';
import { AppContext } from '../../context/AppContext';

const CategoryForm = () => {

    const {categories, setCategories} = useContext(AppContext);
    const[image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        bgColor: "#2c2c2c"
    })


    useEffect(() => {
        console.log("CategoryForm mounted",data);
    }, [data]);

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({
            ...data,
            [name]: value,
        }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault();
        setLoading(true);
        if(!image){
            toast.error("please select an image");
            setLoading(false);
            return;
        }
        const formData = new FormData();
        formData.append("category", JSON.stringify(data));
        formData.append("file", image);

        try{
            const response = await addCategory(formData);
            if(response.status === 201){
                setCategories([...categories, response.data]);
                toast.success("Category added successfully");
            }else{
                toast.error("Failed to add category");
            }

        }catch(error){
            console.error("Error adding category:", error);
            toast.error("An error occurred while adding the category");
        }finally{
            setLoading(false);
            setImage(false);
            setData({
                name: "",
                description: "",
                bgColor: "#2c2c2c"
            });
        }      
    }



  return (
    <div className='mx-2 mt-2'>

        <div className="row">
            <div className="card col-md-12 form-container">
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="image" className='form-label'>

                                <img src={image ? URL.createObjectURL(image): "https://placehold.co/600x400"} alt="upload or image" width={48} />

                            </label>
                            <input type="file" id='image' name='image' className='form-control' hidden onChange={(e) => setImage(e.target.files[0])}/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input type="text" name='name' id='name' className='form-control' placeholder='Category name' value={data.name} onChange={onChangeHandler}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="description" className='form-label'>Description</label>
                            <textarea rows={5} type="text" name='description' id='description' className='form-control' placeholder='Write content hare...' value={data.description} onChange={onChangeHandler}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='bColor' className='form-label'>Background Color</label>
                            <br/>
                            <input type="color" name='bgColor' id='bgColor' placeholder='#ffffff' className='from-control' onChange={onChangeHandler} value={data.bgColor}/>
                        </div>
                        <button type='submit' className='btn btn-warning w-100' >{loading ? "Loading" : "Save"}</button>

                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryForm