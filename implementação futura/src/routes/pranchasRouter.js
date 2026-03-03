import { Router } from "express";

const router = Router()

import { getPranchas, postPranchas } from "../controller/controllerPranchas.js";

router.get('/pranchas',getPranchas)
router.post('/pranchas', postPranchas)

export default router