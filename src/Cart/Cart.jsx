import { Divider, Card, Button, Modal, Box, Grid, TextField } from '@mui/material';
import React from 'react';
import CartItems from './CartItems';
import AddressCard from './AddressCard';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
// import * as Yup from 'yup';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: "none",
    p: 4,
};

const initialValues = { streetAddress: '', state: '', pincode: '', city: '' };
// const validationSchema = Yup.object().shape({
//     streetAddress: Yup.string().required('Street Address is required'),
//     state: Yup.string().required('State is required'), pincode: Yup.string().required('Pincode is required'),
//     city: Yup.string().required('City is required')

const Cart = ({item}) => {
    const createOrderUsingSelectedAddress = () => {
        console.log('Order created using selected address');
    }

    const handleOpenAddressModel = () => setOpen(true);
    const items = [1, 1, 1];
    const [open, setOpen] = React.useState(false);
    const {cart} = useSelector(state => state);
    const handleClose = () => setOpen(false);
    const handleSubmit = (values) => {
        console.log("formValue", values)
    }
    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-5'>
                    {cart.cartItems.map((item) => (<CartItems item={item}/>))}
                    <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5 text-xl'>
                            Bill Details
                        </p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>₹{cart.cart.total}</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Delivery Fees</p>
                                <p>₹15</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>GST & Restaurant</p>
                                <p>₹33</p>
                            </div>
                            <Divider />
                        </div>
                        <div className='flex justify-between text-gray-400 pt-2'>
                            <p>Total payable</p>
                            <p>₹{cart.cart.total+33+21}</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1, 1, 1, 1].map((item) => (<AddressCard showButton={true} handleSelectAddress={createOrderUsingSelectedAddress}/>))}
                            <Card className='flex gap-5 w-64 p-5'>
                                <AddLocationIcon />
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='text-lg font-semibold text-white'>Add Address</h1>
                                    <Button variant='contained' fullWidth onClick={handleOpenAddressModel}>
                                        Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        // validationSchema={validationSchema}
                        >
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                        name="Street Address"
                                        label="Street Address"
                                        fullWidth
                                        variant="outlined"
                                        // error={!ErrorMessage("streetAddress")} 
                                        />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                        name="State"
                                        label="State"
                                        fullWidth
                                        variant="outlined"
                                        // error={!ErrorMessage("state")} 
                                        />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                        name="City"
                                        label="City"
                                        fullWidth
                                        variant="outlined"
                                        // error={!ErrorMessage("city")} 
                                        />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                        name="Pincode"
                                        label="Pincode"
                                        fullWidth
                                        variant="outlined"
                                        // error={!ErrorMessage("pincode")} 
                                        />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" type='submit' fullWidth>Add</Button>
                                </Grid>
                            </Grid>
                        </Form> 
                    </Formik>
                </Box>
            </Modal>
        </>
    );
};

export default Cart;