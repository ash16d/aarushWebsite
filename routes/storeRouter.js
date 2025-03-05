const express=require('express');
const storeRouter=express.Router();

const homesController=require('../controllers/storeController');

storeRouter.get('/',homesController.getIndex);
storeRouter.get('/homeList',homesController.getHomes);
storeRouter.get('/bookings',homesController.getBookings);
storeRouter.get('/favouriteList',homesController.getfavouriteList);
module.exports=storeRouter;

