import express from "express";
import { Client } from "pg";
const app = express();
app.use(express.json());
const pgClient = new Client('postgresql://neondb_owner:npg_wPoBpac2ilh3@ep-polished-wind-adonabmq-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
// [ OR ]
/*const pgClient = new Client({
    user: "neondb_owner",
    password:"npg_wPoBpac2ilh3",
    port: 5432,
    host: "ep-polished-wind-adonabmq-pooler.c-2.us-east-1.aws.neon.tech",
    database: "neondb",
    ssl: true
});*/
pgClient.connect();
app.post("/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const city = req.body.city;
        const country = req.body.country;
        const street = req.body.street;
        const pincode = req.body.pincode;
        const insertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id;`;
        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        await pgClient.query("BEGIN;");
        const response = await pgClient.query(insertQuery, [username, password, email]);
        const userId = response.rows[0].id;
        const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);
        await pgClient.query("COMMIT;");
        res.json({
            message: "You have signed up"
        });
    }
    catch (error) {
        res.json({
            message: "Error while signing up"
        });
    }
});
// bad approach to sending query
app.get("/metadata", async (req, res) => {
    const id = req.query.id;
    const query1 = `SELECT username, email, id FROM users WHERE id = $1`;
    const response1 = await pgClient.query(query1, [id]);
    const query2 = `SELECT * FROM addresses WHERE user_id = $1`;
    const response2 = await pgClient.query(query2, [id]);
    res.json({
        user: response1.rows[0],
        address: response2.rows
    });
});
// good approach to sending query
app.get("/better-metadata", async (req, res) => {
    const id = req.query.id;
    const query = `SELECT u.id, u.username, u.email, a.city, a.street, a.country, a.pincode
                    FROM users u JOIN addresses a
                    ON u.id = a.user_id
                    WHERE u.id = $1`;
    const response = await pgClient.query(query, [id]);
    res.json({
        response: response.rows
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map