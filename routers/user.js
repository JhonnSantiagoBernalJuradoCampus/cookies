import { Router } from "express";
import { nanoid } from "nanoid";
let appUser = Router();

appUser.get('/', async (req, res) => {
    res.cookie("nombre", nanoid(50), { httpOnly: true });
    res.send();
})
appUser.post('/', async (req, res) => {
    /* res.clearCookie("Nombre"); */
    res.send(req.cookies.nombre);
})

export default appUser;