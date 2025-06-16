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

    const result = await sut.execute({
      slug: newQuestion.slug.value,
    })

    expect(result.isRight()).toBe(true)
    expect(result.value?.question.title).toEqual(newQuestion.title)
  })
})
