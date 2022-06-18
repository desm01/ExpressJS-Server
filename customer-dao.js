import mysql from 'mysql';

export function insert_customer(customer) {
    console.log("Inserting Customer: " + customer.name)
}

export function get_customer(id) {
    console.log("Getting Customer by ID: " + id)
}

export function delete_customer(id) {
    console.log("Deleting customer by ID: " + id)
}