 const  express= require('express');
 const  mongoose= require('mongoose');
 const  bodyParser= require('body-parser'); 
const path = require('path');
 const app = express(); 
 const items = require( './routes/api/item'); 

 // BOdyParser MIddleware 
 app.use(bodyParser.json());  

const dbUrl = 'mongodb://localhost:27017/shopping-list';
// connect to mongo
mongoose.connect(dbUrl , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true, 
    useFindAndModify:false
}); 
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});  

// use routes 
app.use( '/api/items', items);

// serve static assets if in production 
 if( process.env .NODE_ENV==='production') { 
     // set static folder
     app.use( express.static('client/build')) 

     app.get( '*' , (req,res) =>{ 
     res.sendFile(path.resolve(__dirname , 'client' , 'build' , 'index.html'))
     })
 }


const port= process.env.PORT ||5000 ;

app.listen(port, function () { 
    console.log(`listening to port ${port}`);
})