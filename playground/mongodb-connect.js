// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err)
    {
        return console.log('Unable to connect to MongoDB Server');
        
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (err, result) => {

    //     if(err)
    //     {
    //         return console.log('Unable to insert Todo');
    //     }

    //     console.log(JSON.stringify(result.ops));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Gaurav',
    //     age: 29,
    //     location: 'Pune'

    // }, (err, result) => {

    //         if(err)
    //         {
    //                 return console.log('Unable to insert User');
    //         }

    //         console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();

});