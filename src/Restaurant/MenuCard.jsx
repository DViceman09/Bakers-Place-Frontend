import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Cart_Action';


const MenuCard = ({item}) => {
  const dispatch = useDispatch();

  const handleAddItemToCart = (e) => {
    e.preventDefault();

    const data = {
      token: localStorage.getItem('jwt'),
      cartItem: {
        foodId: item.food_id,
        quantity: 1
      }
    }
    dispatch(addItemToCart(data));
    console.log("reqData",data);
  };

    return (
      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:space-x-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src={item.images[0]}
              alt=""
            />

            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">{item.name}</p>
              <p>₹{item.price}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form onClick={handleAddItemToCart}>
          <div className='pt-5'>
            <Button type='submit' variant='contained' disabled = {false}>
                {true?"Add To Cart" : "Out Of Stock"}
            </Button>
          </div>
          </form>
        </AccordionDetails>
      </Accordion>
    );
};

export default MenuCard;