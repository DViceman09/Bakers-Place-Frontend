import React, { useState } from 'react';
import { TextField, Button, makeStyles, Card } from '@mui/material';
import { Create } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryAction } from '../../State/Restaurant/Restaurant_Action';



const CreateCategory = ({handleClose}) => {
    const dispatch=useDispatch();
    const {auth,restaurant}=useSelector(store=>store)
    const jwt = localStorage.getItem("jwt")
 
  const [formData, setFormData] = useState({
    categoryName: '',
    restaurantId: restaurant.usersRestaurant?.restaurantId,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data={
        name:formData.categoryName
    }
    dispatch(createCategoryAction({reqData:data, jwt: localStorage.getItem("jwt")}))
    setFormData({
      categoryName: '',
      restaurantId: '',
    })
    handleClose()
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=' '>
        <div className='p-5'>
          <h1 className='text-gray-400 text-center text-xl pb-10'>Create Category</h1>
        <form className="space-y-5" onSubmit={handleFormSubmit}>
      <TextField
        label="Category Name"
        name="categoryName"
        value={formData.categoryName}
        onChange={handleInputChange}
        fullWidth
      />
     
      <Button type="submit" variant="contained" color="primary">
        Create
      </Button>
    </form>
    </div>
    </div>
  );
};

export default CreateCategory;
