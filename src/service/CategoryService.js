import axios from "axios";


export const addCategory = async (category) => {

    return await axios.post("http://localhost:9000/api/v1.0/categories/add", category);
}

export const getAllCategories = async () => {
    return await axios.get("http://localhost:9000/api/v1.0/categories");
}

export const deleteCategory = async (categoryId) => {
    return await axios.delete(`http://localhost:9000/api/v1.0/categories/delete/${categoryId}`);
}