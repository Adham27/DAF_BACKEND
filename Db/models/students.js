import {sequelize} from '../connection.js'
import { DataTypes } from 'sequelize';
import payment from './payment.model.js'
import role from './role.js';

 const Student= sequelize.define('Student',{
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
    },
    level : {
        type: DataTypes.STRING,
        allowNull:false
    },
    phone_number : {
        type: DataTypes.STRING,
        allowNull:false
    },birth_date:{
        type:DataTypes.DATE,
        allowNull:false
    }
})
Student.hasMany(role);
export default Student