const fs=require('fs');
const path=require('path');
const rootDir=require('../utils/pathUtil');
const { json } = require('body-parser');
//fake database
let registerdHomes=[];
module.exports=class Home{
  constructor(houseName,price,location,rating,photoUrl)
  {
    this.houseName=houseName;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.photoUrl=photoUrl;
    
  }
  save(){
    Home.fetchAll(registerdHomes=>{
      registerdHomes.push(this);
    const homeDataPath=path.join(rootDir,'data','homes.json');
    fs.writeFile(homeDataPath,JSON.stringify(registerdHomes),error=>{
    console.log('File writing concluded, Error:',error)});
    });
    
  }
  static fetchAll(callback)
  {    

    const homeDataPath=path.join(rootDir,'data','homes.json'); //path for reading file
    fs.readFile(homeDataPath,(err,data)=>{
      //console.log('File read:',data,err);
      callback(!err ? JSON.parse(data) : [] );     //ternary operator
      
     });
   }
}
