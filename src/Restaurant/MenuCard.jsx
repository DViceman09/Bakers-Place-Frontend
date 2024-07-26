import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';


const MenuCard = () => {
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover' src='https://cdn.pixabay.com/photo/2020/11/28/12/25/bread-5784572_1280.jpg'/>
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>Sourdough Bread</p>
                <p>499Rs</p>
                <p className='text-gray-400'> Sourdough is made by combining flour and water and then setting it aside for a period of a few days. During this time, yeasts that are naturally present in the air combine with the mixture and begin to ferment, which creates the sour flavour noted in its name. </p>

                </div>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='pt-5'>
            <Button type='submit' variant='contained' disabled = {false}>
                {true?"Add To Cart":"Out Of Stock"}
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    );
};

export default MenuCard;