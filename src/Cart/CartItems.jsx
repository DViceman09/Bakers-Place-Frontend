import {IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, updateCartItem } from '../State/Cart/Cart_Action';

const CartItems = ({item}) => {
    const dispatch = useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {auth}=useSelector(store=>store)
    const handleUpdateCartItem = (value) => {
      if(value===-1 && item.quantity==1){
        handleRemoveCartItem()
      }
      const data={ cartItemId: item.id, quantity: item.quantity + value }
      dispatch(
        updateCartItem({data,jwt:auth.jwt || jwt})
      );
    };
    const handleRemoveCartItem=()=>{
      dispatch(removeCartItem({cartItemId:item.id,jwt:auth.jwt || jwt}))
      
    }

    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>
                <div>
                    <img src={item.food.images[0]}
                        alt='Product'
                        className='w-[5rem] h-[5rem] object-cover' />
                </div>
                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 w-full lg:space-y-3'>
                        <p>{item.food.food_name}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton onClick={()=> handleUpdateCartItem(-1)}>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                    {item.quantity}
                                </div>
                                <IconButton onClick={()=> handleUpdateCartItem(1)}>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>₹{item.totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItems;