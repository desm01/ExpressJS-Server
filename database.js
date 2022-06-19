import {database_creds} from "./secrets.js"
import mysql from "mysql2"

export function create_connection() {
    const connection = mysql.createConnection({
        ...database_creds
    })
    connection.connect()
    return connection
}

