import {create_connection} from "./database.js"

export function insert_customer(customer) {
    const conn = create_connection()
    conn.query('INSERT INTO customers VALUES ?', customer, (error, results) => {
        if (error) throw error;
    })
    conn.end()
    return customer
}

export function get_customer(id) {
    console.log("Getting Customer by ID: " + id)
    if (id == undefined) {
        return get_all_customers()
    }
    return get_customer_by_id(id)
}

export function delete_customer(id) {
    console.log("Deleting customer by ID: " + id)
    delete_customer_by_id(id)
    return "Customer ID: " + id + " succesfully"
}

function get_all_customers() {
    const conn = create_connection()
    let res;
    conn.query('SELECT * FROM customers', (error, results) => {
        if (error) throw error;
        res = results
    })
    conn.end()
    return res
}

function get_customer_by_id(id) {
    const conn = create_connection()
    let res;
    conn.query('SELECT * FROM customers WHERE id = ?', id, (error, results) => {
        if (error) throw error;
        res = results
    })
    conn.end()
    return res
}

function delete_customer_by_id(id) {
    const conn = create_connection()
    let res;
    conn.query('DELETE FROM customers WHERE id = ?', id, (error, results) => {
        if (error) throw error;
        res = results
    })
    conn.end()
    return res
}
