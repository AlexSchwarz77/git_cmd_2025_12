import pool from './../db_config/db.js';

export let getUsers = async function (req, res){
    const users = await pool.getConnection()
        .then(conn => conn.query('SELECT * FROM users'))
        .catch(err =>  err)

    //console.log(users);
    
    res.json(users);
}

export let createUser = async function (req, res, body){
    const query = await pool.getConnection()
        .then(conn => conn.query(`INSERT INTO users(user_name, email, password) 
        VALUES(${body.name}, ${body.email}, ${body.password}`))
        .catch(err => err)
}
