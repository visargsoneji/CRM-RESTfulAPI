import {addNewContact, getContact, getContactById, updateContactById, deleteContactById} from '../controllers/crmController'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from ${req.originalUrl}`);
            console.log(`Request type : ${req.method}`);
            next();
        }, getContact)
        .post(addNewContact)

    app.route('/contact/:contactId')
        .get(getContactById)
        .put(updateContactById,
            (req, res) => {
                console.log(`PUT request successful for Id = ${req.params.contactId}`)
            })
        .delete(deleteContactById,
            (req, res) => {
            let id = req.params.contactId;
            console.log(`DELETE request successful for contactId ${id}`);
        })
}

export default routes;