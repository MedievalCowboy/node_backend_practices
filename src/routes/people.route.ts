import express, {Request, Response} from 'express'
import test_controller from '../controllers/people.controller'
const router = express.Router()

router.get("/",(req:Request,res:Response)=>{
    res.send("prueba exitosa");
});
router.get("/all",test_controller.get_all_people);


export default router;