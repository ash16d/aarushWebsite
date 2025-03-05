const express=require('express');
const path=require('path');
//local modules
const storeRouter=require('./routes/storeRouter');
const {hostRouter}=require('./routes/hostRouter');
const rootDir=require('./utils/pathUtil');
const app=express();
const errorController=require('./controllers/errorsController');

app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded());

app.use(storeRouter);  //to execute storeRouter module from storeRouter.js
//app.use(hostRouter);

app.use(express.static(path.join(rootDir,'public')));

//app.use(errorController.error404);  //for handling errors

const PORT=3000;
app.listen(PORT,()=>{
  console.log('Server running at http://localhost:${PORT}');
});