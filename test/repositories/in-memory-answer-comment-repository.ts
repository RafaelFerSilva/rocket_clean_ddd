import { AnswerCommentRepository } from "@/domain/forum/application/repositories/answer-comment-repository"
import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment"


export class InMemoryAnswerCommentRepository implements AnswerCommentRepository {
  public items: AnswerComment[] = []

  async create(answerComment: AnswerComment) {
    this.items.push(answerComment)
  }

  async delete(answerComment: AnswerComment) {
      const answerIndex = this.items.findIndex(
        (item) => item.id.toString() === answerComment.id.toString(),
      )
  
      if (answerIndex >= 0) {
        this.items.splice(answerIndex, 1)
      }
    }
  
    async findById(id: string) {
      const answerComment = this.items.find((item) => item.id.toString() === id)
  
      if (!answerComment) {
        return null
      }
  
      return answerComment
    }
}
