const express=require('express');
const productsRouter=require('./productsRouter');
const categoriesRouter=require('./categoriesRouter');
const usersRouter=require('./usersRouter');
const peopleRouter=require('./peopleRouter');

function routerApi(app){
    const router=express.Router();
    app.use('/api/v1',router);
    router.use('/products',productsRouter);
    router.use('/categories',categoriesRouter);
    router.use('/users',usersRouter);
    router.use('/people',peopleRouter);
}

module.exports=routerApi;