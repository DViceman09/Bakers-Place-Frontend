import {
    Avatar,
    Backdrop,
    Box,
    Button,
    Card,
    CardHeader,
    CircularProgress,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  
  import React, { useEffect } from "react";
  import { useLocation, useNavigate, useParams } from "react-router-dom";
  
  import { useDispatch, useSelector } from "react-redux";
  
  import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
  import DeleteIcon from "@mui/icons-material/Delete";
  import { Create, Delete, Remove } from "@mui/icons-material";
import { deleteFoodAction, getMenuItemsByRestaurantId, updateMenuItemsAvailability } from "../../State/Menu/Menu_Action";
  
  const MenuItemTable = ({ isDashboard, name }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { menu, restaurant, auth } = useSelector(store => store);
    const { id } = useParams();
    const jwt=localStorage.getItem("jwt");
  
    useEffect(() => {
      if(restaurant.usersRestaurant){
       dispatch( getMenuItemsByRestaurantId({
        restaurantId: restaurant.usersRestaurant?.restaurantId,
        jwt,
        seasonal: false,
        vegetarian: false,
        nonveg: false,
        foodCategory: "",
      }));
      }
  }, []);
  
    const handleFoodAvailability = (foodId) => {
      dispatch(updateMenuItemsAvailability({foodId, jwt:auth.jwt || jwt}));
    };
  
    const handleDeleteFood = (foodId) => {
      dispatch(deleteFoodAction({jwt:auth.jwt || jwt, foodId}));
    };
  
    return (
      <Box width={"100%"}>
        <Card className="mt-1">
          <CardHeader
            title={name}
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
            action={
              <IconButton onClick={() => navigate("/admin/restaurant/add-menu")}>
                <Create />
              </IconButton>
            }
          />
          <TableContainer>
            <Table aria-label="table in dashboard">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Title</TableCell>
                  {/* <TableCell sx={{ textAlign: "center" }}>Category</TableCell> */}
                  <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                  {/* <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell> */}
  
                  <TableCell sx={{ textAlign: "center" }}>Availabilty</TableCell>
                  {!isDashboard && (
                    <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {menu.menuItems?.map((item) => (
                  <TableRow
                    hover
                    key={item.id}
                    sx={{
                      "&:last-of-type td, &:last-of-type th": { border: 0 },
                    }}
                  >
                    <TableCell>
                      {" "}
                      <Avatar alt={item.name} src={item.images[0]} />{" "}
                    </TableCell>
  
                    <TableCell
                      sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "0.875rem !important",
                          }}
                        >
                          {item.food_name}
                        </Typography>
                        <Typography variant="caption">{item.brand}</Typography>
                      </Box>
                    </TableCell>
  
                    <TableCell sx={{ textAlign: "center" }}>
                      ₹{item.price}
                    </TableCell>
  
                    <TableCell sx={{ textAlign: "center" }}>
                      <Button
                        color={item.available ? "success" : "error"}
                        variant="text"
                        onClick={() => handleFoodAvailability(item.food_id)}
                      >
                        {item.available ? "in stock" : "out of stock"}
                      </Button>
                    </TableCell>
  
                    {!isDashboard && (
                      <TableCell sx={{ textAlign: "center" }}>
                        <IconButton onClick={() => handleDeleteFood(item.food_id)}>
                          <Delete color="error" />
                        </IconButton>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
  
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={menu.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    );
  };
  
  export default MenuItemTable;
  