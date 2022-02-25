var { connect } = require('mongoose')
var connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`

connect(connectionString, {
    //useCreatendex: true, 
    //useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
 }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
 }) 