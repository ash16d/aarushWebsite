const Home=require('../models/home');

  exports.getAddhome=(req,res,next)=>{
  res.render('host/addHome',{pageTitle:'Add home to airBnb',currentPage:'addHome'});
}
exports.gethostHomes=(req,res,next)=>{
  Home.fetchAll((registerdHomes)=>
    res.render('host/hostHomeList',
      {registerdHomes: registerdHomes, 
        pageTitle:'Home List',
        currentPage:'hostHomes'}));    //{}automatically considers variable as key value pair ); 
};

exports.postAddHome=(req,res,next)=>{
   const {houseName,price,location,rating,photoUrl}=req.body; //seperated(destrucure) all data variables from 'req.body'
  const home=new Home(houseName,price,location,rating,photoUrl);
  home.save();  
  res.render('host/homeAdded.ejs',{pageTitle:'Home Added',currentPage:'homeAdded'});
};





