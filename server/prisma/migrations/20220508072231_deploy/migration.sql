-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
