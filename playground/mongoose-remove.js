const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((results) => {
//     console.log(results);
// });

Todo.findByIdAndRemove('5b1d5b2451b5a02a3c39e4c9').then((todo) => {
    console.log(todo);
});

// Todo.findOneAndRemove({
//     _id: '5b1d5b2451b5a02a3c39e4c9'
// }).then((todo) => {
//     console.log(todo);
// });