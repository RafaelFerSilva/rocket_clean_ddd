import { Entity } from "../../core/entities/entity";

interface StudentsProps {
  name: string;
  createdAt?: Date,
  updatedAt?: Date
}

export class Students extends Entity<StudentsProps> {
  get name() {
    return this.props.name;
  }

  get createdAt() {
    return this.props.createdAt;
  }     

  get updatedAt() {
    return this.props.updatedAt;
  }
}