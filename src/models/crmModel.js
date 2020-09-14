import mongoose from 'mongoose';
let Schema = mongoose.Schema;

//console.log(typeof Schema);
export const ContactSchema = new Schema({
    fisrtName : {                            //There is a spelling mistake here, but I have already populated the database with this so I am keeping as it is.
        type : String,
        required : 'Enter a first name'
    },
    lastName : {
        type : String,
        required : 'Enter a last name'
    },
    email : {
        type : String
    },
    company : {
        type : String
    },
    phoneNumber : {
        type : Number
    },
    date: { type: Date, default: Date.now }
});