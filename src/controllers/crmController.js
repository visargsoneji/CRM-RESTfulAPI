import mongoose from 'mongoose';
import _ from 'lodash';
import {ContactSchema} from '../models/crmModel';

//creating the model from mongoose Schema
const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) =>{
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContact =  (req, res) => {
    if(req.query.name === undefined) {
        Contact.find({}, (err, contact) => {
            if(err) {
                res.send(err);
            }
            res.send(contact);
        });
    }
    else {
        Contact.find({fisrtName: req.query.name}, (err, contact) => {
            if(err) {
                res.send(err);
            }
            console.log(_.get(contact[0],"fisrtName"))
            //To send specific thing(specially number datatype)
            //res.status(200).send((_.get(contact[0],"phoneNumber")).toString());
            res.json(contact);
        });
    }
    
}

export const getContactById =  (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContactById =  (req, res, next) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, {new: true, useFindAndModify: false},(err, contact) => {
        if(err) {
            res.send(err);
        }
        console.log("Updated contact with FirstName " + _.get(contact,"fisrtName"))
        res.json(contact);
        next();
    });
}

export const deleteContactById =  (req, res, next) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if(err) {
            res.send(err);
        }
        console.log("Deleting contact with FirstName " + _.get(contact,"fisrtName"))
    });
    Contact.deleteOne({ _id: req.params.contactId},(err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json( {message : "Successfully Deleted"});
        next();
    });
}
