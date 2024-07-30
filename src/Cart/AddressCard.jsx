import { Button, Card } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

const AddressCard = ({ item, showButton, handleSelectAddress }) => {
    return (
        <Card className='flex gap-5 w-64 p-5'>
            <HomeIcon />
            <div className='space-y-3 text-gray-500'>
                <h1 className='text-lg font-semibold text-white'>Home</h1>
                <p>
                    Dhanori, Pune, Maharashtra, India.
                </p>
                {showButton && <Button variant='outlined' fullWidth onClick={() => handleSelectAddress}>
                    Select</Button>}
            </div>
        </Card>
    );
};

export default AddressCard;