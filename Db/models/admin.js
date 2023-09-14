import {sequelize} from '../connection.js'
import { DataTypes } from 'sequelize';

 const admin = sequelize.define('admin',{
    id : {
        type :DataTypes.STRING,
        allowNull:false,
        primaryKey: true
    },
    name:{
        type :DataTypes.STRING,
        allowNull:false,
    },
    email :  {
        type: DataTypes.STRING,
        allowNull:false
    },
    password : {
        type:DataTypes.STRING,
        allowNull:false
    }
})

export default admin