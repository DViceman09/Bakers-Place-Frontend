import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia sx={{height:345}} 
            image='https://media.istockphoto.com/id/1137312508/photo/assortment-of-products-with-high-sugar-level.webp?s=2048x2048&w=is&k=20&c=ks9fXVCnN89foTnwSAGKpgzBDkWuAACyziOWzXsM-pI=' 
            >   
                <CardContent>
                    <Typography gutterBottom variant='h5' component={"div"}>
                        Anne's Bakery
                    </Typography>
                </CardContent>
            </CardMedia>
        </Card>
    </div>
  );
};

export default EventCard;