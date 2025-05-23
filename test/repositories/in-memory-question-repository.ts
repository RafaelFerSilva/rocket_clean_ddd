import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionRepository implements QuestionRepository {
  public items: Question[] = []

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.items.find((item) => item.slug.value === slug)

    if (!question) {
      return null
    }

    return question
  }

  async create(question: Question) {
    this.items.push(question)
  }

  async findById(id: string) {
    const question = this.items.find((item) => item.id.toString() === id)

    if (!question) {
      return null
    }

    return question
  }

  async delete(question: Question) {
    const questionIndex = this.items.findIndex(
      (item) => item.id.toString() === question.id.toString(),
    )

    if (questionIndex >= 0) {
      this.items.splice(questionIndex, 1)
    }
  }

  async save(question: Question) {
    const questionIndex = this.items.findIndex(
      (item) => item.id.toString() === question.id.toString(),
    )

    if (questionIndex >= 0) {
      this.items[questionIndex] = question
    } else {
      this.items.push(question)
    }
  }

  async findManyRecent({ page }: PaginationParams) {
    const questions = this.items
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20)
    return questions
  }
}
