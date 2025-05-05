import { InMemoryQuestionRepository } from 'test/repositories/in-memory-question-repository'
import { EditQuestionUseCase } from './edit-question'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { makeQuestion } from 'test/factories/make-question'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: EditQuestionUseCase

describe('Edit Question', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new EditQuestionUseCase(inMemoryQuestionRepository)
  })

  test('should be able edit a question by id', async () => {
    const newQuestion = makeQuestion(
      { authorId: new UniqueEntityId('author-1') },
      new UniqueEntityId('question-1'),
    )

    await inMemoryQuestionRepository.create(newQuestion)

    await sut.execute({
      authorId: 'author-1',
      questionId: newQuestion.id.toValue(),
      title: 'Updated Title',
      content: 'Updated Content',
    })

    expect(inMemoryQuestionRepository.items[0]).toMatchObject({
      title: 'Updated Title',
      content: 'Updated Content',
    })
  })

  test('should not be able edit a question from another user', async () => {
    const newQuestion = makeQuestion(
      { authorId: new UniqueEntityId('author-1') },
      new UniqueEntityId('question-1'),
    )

    await inMemoryQuestionRepository.create(newQuestion)

    await expect(() => {
      return sut.execute({
        questionId: 'question-1',
        authorId: 'author-2',
        title: 'Updated Title',
        content: 'Updated Content',
      })
    }).rejects.toBeInstanceOf(Error)
    expect(inMemoryQuestionRepository.items).toHaveLength(1)
  })
})
