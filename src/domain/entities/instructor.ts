import { Entity } from "../../core/entities/entity";

interface IntructorProps {
  name: string;
}

export class Instructor extends Entity<IntructorProps> {
  get name() {
    return this.props.name;
  }

}