import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";


interface QuestionAttachmentProps {
  questionid: UniqueEntityId;
  attachmentId: UniqueEntityId;
}

export class QuestionAttachment extends Entity<QuestionAttachmentProps> {
  get questionId(): UniqueEntityId {
    return this.props.questionid;
  }

  get attachmentId(): UniqueEntityId {
    return this.props.attachmentId;
  }

   static create(props: QuestionAttachmentProps, id?: UniqueEntityId) {
      const attachment = new QuestionAttachment(props, id);
      return attachment;
    }
}