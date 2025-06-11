import { QuestionCommentRepository } from "@/domain/forum/application/repositories/question-comments-repository"
import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment"


export class InMemoryQuestionCommentRepository implements QuestionCommentRepository {
  async delete(questionComment: QuestionComment) {
    const questionIndex = this.items.findIndex(
      (item) => item.id.toString() === questionComment.id.toString(),
    )

    if (questionIndex >= 0) {
      this.items.splice(questionIndex, 1)
    }
  }

  async findById(id: string) {
    const questionComment = this.items.find((item) => item.id.toString() === id)

    if (!questionComment) {
      return null
    }

    return questionComment
  }

  public items: QuestionComment[] = []

  async create(questionComment: QuestionComment) {
    this.items.push(questionComment)
  }
}
