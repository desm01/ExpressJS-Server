import express, { json } from "express";
import {insert_customer, get_customer, delete_customer} from "./customer-dao.js";
var app = express();
app.use(json());


app.delete("/customer", (req, res) => {
    try {
        const id = req.body.id
        handle_success(res, 200, delete_customer(id))
    }
    catch(err) {
        handle_error(res, err)
    }
});

app.get("/customer", (req, res) => {
    try {
        const customer_id = req.body.id
        handle_success(res, 200, get_customer(customer_id))
    }
    catch (err) {
        handle_error(res, err)
    }
});

app.post("/customer", (req, res) => {
    try {
        const customer = req.body
        handle_success(res, 201, insert_customer(customer))
    }
    catch(err) {
        handle_error(res, err)
    }
});

const handle_error = (res, err) => {
    console.log(err)
    res.status(500)
    res.json(err)
}

const handle_success = (res, code, result) => {
    res.status(code)
    res.json(result)
}

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
