import mongoose from 'mongoose'

mongoose.createConnection("mongodb://localhost/products-api", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true
        })
        .then(db => console.log("Db products is connected!"))
        .catch(err => console.log(err))