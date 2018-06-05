const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b16ef0ffc63d04c783614e9';

var id = '5b15a148b78436fc303ddea5';

// if(!ObjectID.isValid(id))
// {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:' , todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:' , todo);
// });

// Todo.findById(id).then((todobyid) => {
//     if(!todobyid)
//     {
//         return console.log('Id not found');
//     }
//     console.log('TodoByID:' , todobyid);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(id).then((user) => {

    if(!user)
    {
       return console.log('User not found.');
    }

    console.log('User:', user);
}).catch((e) => {
    console.log(e);
});
