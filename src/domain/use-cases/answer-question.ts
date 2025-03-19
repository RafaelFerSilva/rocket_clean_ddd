import { Answer } from "../entities/answer";
import { AnsweRepository } from "../repositories/answer-repository";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string
}


export class AnswerQuestionUseCase {
  constructor(
    private answerRepository: AnsweRepository,
  ) {}
  
  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructorId, 
      questionId
    });

    await this.answerRepository.create(answer);
    

    return answer;
  }
}