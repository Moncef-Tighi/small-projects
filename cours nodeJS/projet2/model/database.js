import path from "path";
import mysql from 'mysql';


const db = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "",
    database : "employes"
})
db.connect((error) => {
    if (error) return console.log(error.stack);
    console.log("Connexion à la base de donné réussie");
});

export default db;