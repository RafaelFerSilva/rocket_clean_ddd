import { InMemoryQuestionRepository } from 'test/repositories/in-memory-question-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { makeQuestion } from 'test/factories/make-question'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question by Slug', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepository)
  })

  test('should be able to get a question by slug', async () => {
    const newQuestion = makeQuestion()

    await inMemoryQuestionRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: newQuestion.slug.value,
    })

    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionRepository.items[0].id).toEqual(question.id)
    expect(inMemoryQuestionRepository.items[0].title).toEqual(question.title)
    expect(inMemoryQuestionRepository.items[0].content).toEqual(
      question.content,
    )
    expect(inMemoryQuestionRepository.items[0].authorId).toEqual(
      question.authorId,
    )
    expect(inMemoryQuestionRepository.items[0].slug).toEqual(question.slug)
    expect(inMemoryQuestionRepository.items[0].createdAt).toEqual(
      question.createdAt,
    )
    expect(inMemoryQuestionRepository.items[0].updatedAt).toEqual(
      question.updatedAt,
    )
  })
})
