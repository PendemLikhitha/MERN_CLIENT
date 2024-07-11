//here we will be defining how e2e / cypress works
 
const {defineConfig}= require('cypress');
module.exports= defineConfig({
    e2e:{
        baseUrl:'http://localhost:3000',
        setupNodeEvents(on,config){

        },
    },
});