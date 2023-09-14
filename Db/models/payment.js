import {sequelize} from '../connection.js'
import { DataTypes } from 'sequelize';

 const payment = sequelize.define('payment',{
    payment_id : {
        type :DataTypes.STRING,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
    },
    service_fees:{
        type :DataTypes.STRING,
        allowNull:false,
    },
    payment_way :  {
        type: DataTypes.STRING,
        allowNull:false
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false
    }
})

export default payment