import { mostrarUsuarios, insertarUsuarios, actualizarUsuarios, eliminarUsuarios } from "../controllers/user"; 
import { Router } from "express";
const router = Router ();

router.get('/usuarios', mostrarUsuarios);
router.post('/usuarios', insertarUsuarios);
router.put('/usuarios', actualizarUsuarios);
router.delete('/usuarios', eliminarUsuarios);