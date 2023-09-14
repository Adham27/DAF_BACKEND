import { connectDB } from '../Db/connection.js'


const initApp = (app, express)=>{
    connectDB();
}

export default initApp