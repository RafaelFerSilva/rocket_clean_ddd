import { Answer } from '../../enterprise/entities/answer'

export interface AnsweRepository {
  create(answer: Answer): Promise<void>
}
