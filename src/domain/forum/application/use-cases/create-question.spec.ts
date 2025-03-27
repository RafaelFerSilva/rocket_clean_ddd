import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionRepository } from 'test/repositories/in-memory-question-repository'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository)
  })

  test('should be able create a question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Conteúdo da pergunta',
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
