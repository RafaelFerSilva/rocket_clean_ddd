
import { QuestionAttachmentsRepository } from "@/domain/forum/application/repositories/question-attachments-repository";
import { QuestionAttachment } from "@/domain/forum/enterprise/entities/question-attachment";

export class InMemoryQuestionAttachmentsRepository
  implements QuestionAttachmentsRepository
{
  async delete(questionAttachments: QuestionAttachment) {
    const questionIndex = this.items.findIndex(
      (item) => item.id.toString() === questionAttachments.id.toString()
    );

    if (questionIndex >= 0) {
      this.items.splice(questionIndex, 1);
    }
  }

  async findById(id: string) {
    const questionAttachments = this.items.find(
      (item) => item.id.toString() === id
    );

    if (!questionAttachments) {
      return null;
    }

    return questionAttachments;
  }

  public items: QuestionAttachment[] = [];

  async create(questionAttachments: QuestionAttachment) {
    this.items.push(questionAttachments);
  }

  async findManyByQuestionId(
    questionId: string
  ): Promise<QuestionAttachment[]> {
    const questionAttachments = this.items.filter(
      (item) => item.questionId.toString() === questionId
    );

    return questionAttachments;
  }
}
