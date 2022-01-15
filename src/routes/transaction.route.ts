import { Router } from "express";
import {handleTransaction} from "../controllers/transaction.controller";
import {validateRequestPayload} from "../validations/transaction/transaction.validator";
import validateToken from "../middlewares/auth.middleware";

const router = Router();

router.post(
  "/", 
  validateToken,
  validateRequestPayload,
  handleTransaction
);

export default router;
