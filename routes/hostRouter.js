const express=require('express');
const hostRouter=express.Router();

const hostController=require('../controllers/hostController');

hostRouter.get('/host/addHome',hostController.getAddhome);
hostRouter.post('/host/addHome',hostController.postAddHome);
hostRouter.get('/host/hostHomeList',hostController.gethostHomes);

exports.hostRouter=hostRouter;
