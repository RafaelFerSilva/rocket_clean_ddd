import { QuestionRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionRepository implements QuestionRepository {
  public items: Question[] = []

  async create(question: Question) {
    this.items.push(question)
  }

  // async findById(id: string) {
  //   const question = this.items.find((item) => item.id.toString() === id)

  //   if (!question) {
  //     return null
  //   }

  //   return question
  // }

  // async save(question: Question) {
  //   const questionIndex = this.items.findIndex(
  //     (item) => item.id.toString() === question.id.toString(),
  //   )

  //   if (questionIndex >= 0) {
  //     this.items[questionIndex] = question
  //   } else {
  //     this.items.push(question)
  //   }
  // }
}
