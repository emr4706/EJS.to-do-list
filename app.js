const express = require("express");
const bodyParser = require("body-parser");

let items = ["buy food", "cook food", "eat food"];
const app = express();
const port = 3000

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get('/', (req, res) => {

    var today = new Date();
    // var currentDay = today.getDay();
    // var day = "";
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);


    res.render("list", {
        kindOfDay: day, newListItems: items
    });


    // if (currentDay == 6 || currentDay == 0) {
    // //     // res.write("<h1>it is weekend</h1>")
    // //     // res.sendFile(__dirname + "/weekend.html")
    //     day = "weekend....:)";

    // }else{
    // //     // res.write("<h1>I have to working</h1>")  //coklu satir send etmek icin write kullaniyoruz
    // //     // res.write("<p>it is not weekend</p>")
    // //     // res.send(); //yazmayi unutmamak gerek
    // //     // res.sendFile(__dirname + "/weekday.html")
    //     day = "weekday....";
    // }
    
    // if(today.getDate() == 6 || today.getDate() == 0){
    //     res.send("it is weekend")
    // }else{
    //     res.send("I have to working")
    // }
    // switch (currentDay) {
    //     case 0:
    //         day = "sunday";
    //         break;
    //     case 1:
    //         day = "monday";
    //         break;
    //     case 2:
    //         day = "tuesday";
    //         break;
    //     case 3:
    //         day = "wednesday";
    //         break;
    //     case 4:
    //         day = "thursday";
    //         break;
    //     case 5:
    //         day = "friday";
    //         break;
    //     case 6:
    //         day = "saturday";
    //         break;
    //     default:
    //        console.log("error: current day is equal to: " + currentDay);
           
    // }
});

app.post('/', (req, res) => {

    let item = req.body.newItem;

    items.push(item);
    
    // res.render("list", {newListItem: item});

    res.redirect('/');


    })

app.listen(port, () => console.log(`Server running on port ${port}!`))