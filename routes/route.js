import express from 'express';
import { getUsers, createUser, deleteUser, updateUser } from './../service/service.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.delete('/users/:user_id', deleteUser);
router.put('/users/:user_id', updateUser);


export default router;
