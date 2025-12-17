import pool from './../db_config/db.js';

export let getUsers = async function (req, res){
    let conn = pool.getConnection();
    const users = await conn
        .then(conn => conn.query('SELECT * FROM users'))
        .catch(err =>  err);
    (await conn).release();
    res.json(users);
}

export let createUser = async function (req, res){
    let conn = pool.getConnection();
    const query = await conn
        .then(conn => conn.query(`INSERT INTO users(user_name, email, password) VALUES("${req.body.user_name}", "${req.body.email}", "${req.body.password}")`))
        .catch(err => console.log(err));
    (await conn).release();
    res.status(201).send({msg: "User angelegt"});
}

export let updateUser = async function (req, res) {
    let conn = pool.getConnection();
    const user = await conn
        .then(conn => conn.query(`UPDATE users SET user_name = "${req.body.user_name}", email = "${req.body.email}" WHERE user_id = ${req.params.user_id}`))
        .catch(err => err);
    (await conn).release();
    res.status(200).send({msg: "User updated"});
}

export let deleteUser = async function (req, res){
    let conn = pool.getConnection();
    const user = await conn
        .then(conn => conn.query(`DELETE FROM users WHERE user_id = ${req.params.user_id}`))
        .catch(err => err);
    (await conn).release();
    res.status(200).send({msg: "User gelöscht"});
}

export let getUser = async function (req, res){
    let conn = pool.getConnection();
    const user = await conn
        .then(conn => conn.query(`SELECT user_id, user_name, email FROM users WHERE user_id = ${req.params.user_id}`))
        .catch(err => err);
    (await conn).release();
    res.status(200).json(user);
}