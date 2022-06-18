import express, { json } from "express";
import {insert_customer, get_customer} from "./customer-dao.js";
var app = express();
app.use(json());


app.delete("/customer", (req, res) => {
    
});

app.get("/customer", (req, res) => {
    try {
        const customer_id = req.body.id
        get_customer(customer_id)
    }
    catch (err) {
        handle_error(res, err)
    }
    handle_success(res, 200, "Customer details")
});

app.post("/customer", (req, res) => {
    try {
        const customer = req.body
        insert_customer(customer)
    }
    catch(err) {
        handle_error(res, err)
    }
    handle_success(res, 201, "Customer Created Succesfully")
});

const handle_error = (res, err) => {
    console.log(err)
    res.status(500)
    res.json("Fatal Error")
}

const handle_success = (res, code, json) => {
    res.status(code)
    res.json(json)
}

app.listen(3000, () => {
 console.log("Server running on port 3000");
});