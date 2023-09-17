import {sequelize} from '../connection.js'
import { DataTypes } from 'sequelize';

 const role = sequelize.define('role',{
    id : {
        type :DataTypes.STRING,
        allowNull:false,
        primaryKey: true
    },
    name:{
        type :DataTypes.STRING,
        allowNull:false,
    }
})

export default role