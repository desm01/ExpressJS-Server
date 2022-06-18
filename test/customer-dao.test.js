import { deepEqual, equal, throws } from 'assert';
import {insert_customer, get_customer, delete_customer} from "../customer-dao.js"

function build_customer(id) {
    return {
        id: id,
        name: "test",
        email: "email",
        address: "address"
    }
}

function assert_customer(expected_customer, inserted_customer) {
    deepEqual(expected_customer, inserted_customer)
}

describe('Customer DAO Tests', () => {
    const customer = build_customer(1)
    let customer2 = build_customer(2)
    it('should insert a customer', () => {
        const inserted_customer = insert_customer(customer)
        assert_customer(customer, inserted_customer)
    })

    it('should not insert duplicated customer', () => {
        throws(() => { insert_customer(customer) }, Error)
    })

    it('should throw error if Customer not populated', () => {
        const customer = { name : "Broken customer"}
        throws(() => { insert_customer(customer) }, Error)
    })

    it('should find customer', () => {
        const retrived_customer = get_customer(customer.id)
        assert_customer(retrived_customer, customer)
    })

    it('should find all customers', () => {
        insert_customer(customer2)
        const customers = get_customer()
        equal(customers.length, 2)
        assert_customer(customer, customers[0])
        assert_customer(customer2, customers[1])
    })

    it('should delete first customer', () => {
        delete_customer(customer.id)
        const customers = get_customer()
        equal(customers.length, 1)
        assert_customer(customer2, customers[0])
    })
   })
   