import pg from 'pg';
import dotenv from 'dotenv';    
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    host: "localhost", 
    password: "12345678",
    user: "postgres",
    port: "5432",
    database: "myapp"
});

export default pool;