import { Router } from "express";
import {
  createAgent,
  signinAgent,
  verifyAgent,
  viewAllAgent,
  viewSingleAgent,
} from "../controller/agentController";

const router = Router();
router.route("/all-agent").get(viewAllAgent);
router.route("/agent/:agentID").get(viewSingleAgent);
router.route("/verify-agent/:agentID").get(verifyAgent);

router.route("/create-agent").post(createAgent);
router.route("/signin-agent").post(signinAgent);
export default router;
