import { AnswerRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswerRepository {
  public items: Answer[] = []

  async delete(answer: Answer) {
    const answerIndex = this.items.findIndex(
      (item) => item.id.toString() === answer.id.toString(),
    )

    if (answerIndex >= 0) {
      this.items.splice(answerIndex, 1)
    }
  }

  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id)

    if (!answer) {
      return null
    }

    return answer
  }

  async create(answer: Answer) {
    this.items.push(answer)
  }

  async save(answer: Answer) {
    const answerIndex = this.items.findIndex(
      (item) => item.id.toString() === answer.id.toString(),
    )

    if (answerIndex >= 0) {
      this.items[answerIndex] = answer
    } else {
      this.items.push(answer)
    }
  }
}
