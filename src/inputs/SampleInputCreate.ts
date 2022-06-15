import { InputType, Field } from "type-graphql";

@InputType()
export class SampleInputCreate {
  @Field()
  val: string;
}
