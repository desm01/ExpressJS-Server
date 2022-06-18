var customer_list = []

export function insert_customer(customer) {
    const cust = {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        address: customer.address
    }

    validate_customer(cust)
    customer_list.push(cust)
    return cust
}

export function get_customer(id) {
    console.log("Getting Customer by ID: " + id)
    if (id == undefined) {
        return customer_list;
    }
    return customer_list.find(customer => customer.id == id)
}

export function delete_customer(id) {
    console.log("Deleting customer by ID: " + id)
    customer_list = customer_list.filter(customer => customer.id != id)
    return "Customer ID: " + id + " succesfully"
}


function validate_customer(cust) {
    if (Object.values(cust).some(x => x === null || x === '' || x === undefined)) {
        throw "Error, unable to build Customer"
    }

    if (get_customer(cust.id) != null) {
        throw "Error, customer already exists for ID " + cust.id
    }
}