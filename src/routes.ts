import express from 'express'
import test_routes from './routes/people.route'
const router = express.Router()

router.use("/people",test_routes);

export default router;