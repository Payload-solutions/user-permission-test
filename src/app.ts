import express, {Application} from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes';
dotenv.config();

class App {
    public app: Application;

    constructor(){
        this.app = express();
        //this.app.set("port", port || 4000);
        this.config();
    }

    config():void{
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(userRouter);
    }
}

export default App;
