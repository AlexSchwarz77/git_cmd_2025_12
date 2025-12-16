import express from 'express';
import { getUsers } from './../service/service.js';

const router = express.Router();

router.get('/users', getUsers);

export default router;
