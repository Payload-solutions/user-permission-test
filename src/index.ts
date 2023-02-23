
import App from './app';
import dotenv from 'dotenv';




function main(){
    const app = new App().app;
    app.listen(3000, ()=>{
        console.log("running in http://127.0.0.1:3000/");
    });
}

main();
