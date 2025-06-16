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
   const result = await sut.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Conteúdo da pergunta',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryQuestionRepository.items[0].id).toEqual(result.value?.question.id)
    expect(inMemoryQuestionRepository.items[0].id).toEqual(result.value?.question.id)
    expect(inMemoryQuestionRepository.items[0].title).toEqual(result.value?.question.title)
    expect(inMemoryQuestionRepository.items[0].content).toEqual(
      result.value?.question.content,
    )
    expect(inMemoryQuestionRepository.items[0].authorId).toEqual(
      result.value?.question.authorId,
    )
    expect(inMemoryQuestionRepository.items[0].slug).toEqual(result.value?.question.slug)
    expect(inMemoryQuestionRepository.items[0].createdAt).toEqual(
      result.value?.question.createdAt,
    )
    expect(inMemoryQuestionRepository.items[0].updatedAt).toEqual(
      result.value?.question.updatedAt,
    )
  })
})
