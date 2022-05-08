import { SubmitFeedbackService } from "./submitFeedbackService";

const exampleType = "BUG";
const exampleComment = "example comment";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy}
);

describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () => {
        await expect(submitFeedback.execute({
            type: exampleType,
            comment: exampleComment,
            screenshot: "data:image/png;base64j9034j9834j94j8"
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it("should not be able submit a feedback without type", async () => {
        await expect(submitFeedback.execute({
            type: "",
            comment: exampleComment,
            screenshot: "data:image/png;base64j9034j9834j94j8"
        })).rejects.toThrow();
    });

    it("should not be able submit a feedback without comment", async () => {
        await expect(submitFeedback.execute({
            type: exampleType,
            comment: "",
            screenshot: "data:image/png;base64j9034j9834j94j8"
        })).rejects.toThrow();
    });

    it("should not be able submit a feedback with an invalid screenshot", async () => {
        await expect(submitFeedback.execute({
            type: exampleType,
            comment: exampleComment,
            screenshot: "test.jpg"
        })).rejects.toThrow();
    });
})