import { QuestionRepository } from '../repositories/questions-repository'
import { Question } from '../../enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

describe('AnswerQuestionUseCase', () => {
  const fakeQuestionRepository: QuestionRepository = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    create: async (question: Question) => {
      return Promise.resolve()
    },
  }

  test('create an question', async () => {
    const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository)

    const { question } = await createQuestion.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Conteúdo da pergunta',
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual('Nova pergunta')
  })
})
