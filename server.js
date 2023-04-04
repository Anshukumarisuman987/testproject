const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const routes = require("routes");
const router = routes();


//// call default route
app.get('/',(req,res)=>{
    res.send("This is default page");
})

//// create server
app.listen(port, ()=>{
    console.log("server started at port " + port);

})

/// create connection with mysql database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("connected with database");
    /// insert data in database
    const insertdata = "INSERT INTO product (`name`, `type`) VALUES ('paints', 'women')";
    con.query(insertdata,(err, result)=>{
        if (err) throw err;
        console.log("successfuly inserted data");
    })

    /// select data from table
    const getresult = "SELECT * FROM product where status = 0 order by name desc";
    con.query(getresult, (err, result)=>{
        if(err) throw err;
        console.log(result);
    })

    ///update data into table

    const updatedata = "UPDATE product SET name = 'top' where id = 5";
    con.query(updatedata, (err, result)=>{
        if(err) throw err;
        console.log("I row updated");
    })
  });

