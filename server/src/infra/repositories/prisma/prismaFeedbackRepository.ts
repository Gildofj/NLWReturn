import { prisma } from "../../../prisma";
import { FeedbackCreateData, FeedbackRepository } from "../feedbackRepository";

export class PrismaFeedbackRepository implements FeedbackRepository {
    async create(data: FeedbackCreateData) {
        await prisma.feedback.create({
            data
        })
    }
}