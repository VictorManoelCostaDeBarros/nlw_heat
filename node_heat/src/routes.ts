import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router()

router.post("/authenticate", new AuthenticateUserController().hanlde)

router.post("/messages", ensureAuthenticated, new CreateMessageController().hanlde)

router.get("/messages/last3", new GetLast3MessagesController().hanlde)

router.get("/profile", ensureAuthenticated, new ProfileUserController().hanlde)


export { router }