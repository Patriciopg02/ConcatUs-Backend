import { Router } from "express";
import { addEvent, deleteEvent, findEvent, findEventById, findEventByAuthor } from "../controllers/events.controllers";
const router = Router()

router.route('')
    .post(addEvent)
    .get(findEvent)
    // .put(updateEvent)
    .put(deleteEvent)
    

router.route('/:id')
    .get(findEventById)
    // .put(addEventParticipant)


router.route('/author/:author')
    .get(findEventByAuthor)
    

export default router;