import { InMemoryQuestionRepository } from 'test/repositories/in-memory-question-repository'
import { makeQuestion } from 'test/factories/make-question'
import { FetchRecentQuestionsUseCase } from './fetch-recent-questions'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: FetchRecentQuestionsUseCase

describe('Fetch recent questions', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new FetchRecentQuestionsUseCase(inMemoryQuestionRepository)
  })

  test('should be able to fetch recent questions', async () => {
    const newQuestion1 = makeQuestion({
      createdAt: new Date('2023-10-01T00:00:00Z'),
    })
    const newQuestion2 = makeQuestion({
      createdAt: new Date('2023-09-30T00:00:00Z'),
    })

    const newQuestion3 = makeQuestion({
      createdAt: new Date('2023-09-29T00:00:00Z'),
    })

    await inMemoryQuestionRepository.create(newQuestion1)
    await inMemoryQuestionRepository.create(newQuestion2)
    await inMemoryQuestionRepository.create(newQuestion3)

    const { questions } = await sut.execute({ page: 1 })

    expect(questions).toHaveLength(3)
    expect(questions[0].createdAt.getTime()).toBeGreaterThan(
      questions[1].createdAt.getTime(),
    )
    expect(questions[1].createdAt.getTime()).toBeGreaterThan(
      questions[2].createdAt.getTime(),
    )
  })

  test('should be able to fetch paginated recent questions', async () => {
    for (let i = 0; i < 22; i++) {
      await inMemoryQuestionRepository.create(makeQuestion())
    }

    const { questions } = await sut.execute({ page: 2 })

    expect(questions).toHaveLength(2)
  })
})
