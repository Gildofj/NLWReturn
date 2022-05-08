import { Router } from "express";

import { PrismaFeedbackRepository } from "./repositories/prisma/prismaFeedbackRepository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailerMailAdapter"
import { SubmitFeedbackService } from "../application/services/submitFeedbackService";

export const routes = Router();

routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackService = new SubmitFeedbackService(prismaFeedbackRepository, nodemailerMailAdapter);

    await submitFeedbackService.execute({
            type,
            comment,
            screenshot,
    });

    return res.status(201).send();
})