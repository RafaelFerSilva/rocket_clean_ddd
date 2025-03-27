import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswerRepository } from 'test/repositories/in-memory_answe-repository'

let inMemoryAnswerepository: InMemoryAnswerRepository
let sut: AnswerQuestionUseCase

describe('AnswerQuestionUseCase', () => {
  beforeEach(() => {
    inMemoryAnswerepository = new InMemoryAnswerRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswerepository)
  })

  test('should be able create an answer', async () => {
    const { answer } = await sut.execute({
      instructorId: '1',
      questionId: '1',
      content: 'Conteúdo da resposta',
    })

    expect(answer.id).toBeTruthy()
    expect(inMemoryAnswerepository.items[0].id).toEqual(answer.id)
    expect(inMemoryAnswerepository.items[0].content).toEqual(answer.content)
    expect(inMemoryAnswerepository.items[0].questionId).toEqual(
      answer.questionId,
    )
  })
})
