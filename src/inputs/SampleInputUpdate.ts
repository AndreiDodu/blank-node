import { InputType, Field } from "type-graphql";

@InputType()
export class SampleInputUpdate {
  @Field({ nullable: true })
  val?: string;
}
