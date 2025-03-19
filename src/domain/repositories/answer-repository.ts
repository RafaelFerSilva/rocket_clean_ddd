import { Answer } from "../entities/answer";

export interface AnsweRepository {
  create(answer: Answer): Promise<void>;
}
