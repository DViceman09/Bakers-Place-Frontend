import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { green, red } from "@mui/material/colors";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const PaymentFail = () => {
  const navigate = useNavigate();
  const navigateToCart = () => navigate("/cart");
  const dispatch = useDispatch();


  return (
    <div className="min-h-screen  px-5">
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <div className="box w-full lg:w-1/4 flex flex-col items-center rounded-md">
          <ErrorOutlineIcon sx={{ fontSize: "5rem", color: red[600] }} />
          <h1 className="py-5 text-2xl font-semibold">Order Payment Failed!</h1>
          <p className="py-3 text-center text-gray-400">
            Ohh No!! Seems likes your payment was Unsuccessful!
          </p>
          <p className="py-2 text-center text-gray-200 text-lg">
            Please Try Again!
          </p>
          <Button
            variant="contained"
            className="my-5"
            sx={{ margin: "1rem 0rem"}}
            onClick={navigateToCart}
          >
            Go To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
