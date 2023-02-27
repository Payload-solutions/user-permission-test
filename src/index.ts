
import App from './app';
import dotenv from 'dotenv';
dotenv.config();

import { AppDataSource } from './config/app-data-source';
AppDataSource
    .initialize()
    .then(async()=>{
        console.log("Datasource has been initialized...");
        
    })
    .catch((err)=>{
        console.log(err);
    })



function main(){
    const app = new App().app;
    app.listen(3000, ()=>{
        console.log("running in http://127.0.0.1:3000/");
    });
}

main();
