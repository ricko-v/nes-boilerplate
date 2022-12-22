import express from 'express'
import { tes } from '../controllers/user';
const router = express.Router();

router.get('/api/tes', tes)

export default router;