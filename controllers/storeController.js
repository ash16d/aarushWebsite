//const { registerdHomes } = require('../../Chapter13_MVC2/routes/hostRouter');
const Home=require('../models/home');


exports.getIndex=(req,res,next)=>{
  Home.fetchAll((registerdHomes)=>
  res.render('store/index',
    {registerdHomes: registerdHomes, 
      pageTitle:'airBnb Home',
      currentPage:'index'}));
};

 exports.getHomes=(req,res,next)=>{
  Home.fetchAll((registerdHomes)=>
    res.render('store/homeList',
      {registerdHomes: registerdHomes, 
        pageTitle:'Home List',
        currentPage:'homeList'}));    //{}automatically considers variable as key value pair ); 
};
exports.getBookings=(req,res,next)=>{
  Home.fetchAll((registerdHomes)=>
  res.render('store/bookings',
    {registerdHomes: registerdHomes, 
      pageTitle:'My Bookings',
      currentPage:'bookings'}));
};

exports.getfavouriteList=(req,res,next)=>{
  Home.fetchAll((registerdHomes)=>
  res.render('store/favouriteList',
    {registerdHomes: registerdHomes, 
      pageTitle:'My Favourites',
      currentPage:'favouriteList'}));
};







