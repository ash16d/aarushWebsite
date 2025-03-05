exports.error404=(req,res,next)=>{
  res.status(404).render('404.ejs',{pageTitle:'404 Page',currentPage:'404'});
};