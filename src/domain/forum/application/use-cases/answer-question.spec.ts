import { AnswerQuestionUseCase } from './answer-question'
import { AnsweRepository } from '../repositories/answer-repository'
import { Answer } from '../../enterprise/entities/answer'

describe('AnswerQuestionUseCase', () => {
  const fakeAnswersRepository: AnsweRepository = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    create: async (answer: Answer) => {
      return Promise.resolve()
    },
  }

  test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
      instructorId: '1',
      questionId: '1',
      content: 'Nova resposta',
    })

    expect(answer.content).toEqual('Nova resposta')
  })
})
