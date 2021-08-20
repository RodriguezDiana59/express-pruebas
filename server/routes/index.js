import { añadirClase, entrarClase, cambiarClase, tareasClase } from "../controllers/class"; 
import { Router } from "express";
const router = Router ();

router.get('/clase', añadirClase);
router.post('/clase', entrarClase);
router.put('/clase', cambiarClase);
router.delete('/clase', tareasClase);