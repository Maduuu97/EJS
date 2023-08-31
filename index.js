import express from 'express';
import bodyParser from 'body-parser';


const app =express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

var listOfItems = [];

var listOfWork = [];

app.use(express.static(`public`));
app.use(bodyParser.urlencoded({extended:true}));

app.get(`/`, function(req, res){
    var today = new Date().getFullYear();
    res.render(`index.ejs`, {whichDay: today, newListItems: listOfItems});  
});

app.get(`/work`, function(req, res){
    res.render(`work.ejs`, {newListWork: listOfWork});  
});

app.post('/', function(req, res){
    var item = req.body.newItem;
    listOfItems.push(item);
    res.redirect("/");
});

app.post('/work', function(req, res){
    var item = req.body.newItem;
    listOfWork.push(item);
    res.redirect("/work");
});


app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});

