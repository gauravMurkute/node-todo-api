// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err)
    {
        return console.log('Unable to connect to MongoDB Server');
        
    }

    console.log('Connected to MongoDB Server');

    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b145de7af2b6f25a571ae83')
    // },{
    //     $set: {
    //         completed: true
    //     }

    // },{
    //     returnOriginal: false
    // })
    // .then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b159505af2b6f25a571d5fc')
    },{
        $set: {
            name: 'Gaurav Murkute'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    })
    .then((result) => {
        console.log(result);
    });


    // db.close();

});