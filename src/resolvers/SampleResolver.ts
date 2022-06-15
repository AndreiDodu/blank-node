import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Sample } from "../models/Sample";
import { SampleInputCreate } from "../inputs/SampleInputCreate";
import { SampleInputUpdate } from "../inputs/SampleInputUpdate";

@Resolver()
export class SampleResolver {
  @Query(() => [Sample])
  samples() {
    return Sample.find();
  }

  @Query(() => Sample)
  sample(@Arg("id") id: string) {
    return Sample.findOne({ where: { id } });
  }

  @Mutation(() => Sample)
  async insertSample(@Arg("sample") sampleIn: SampleInputCreate) {
    const sample = Sample.create(sampleIn);
    await sample.save();
    return sample;
  }

  @Mutation(() => Sample)
  async updateSample(@Arg("id") id: string, @Arg("sample") sampleIn: SampleInputUpdate) {
    const sample = await Sample.findOne({ where: { id } });
    if (!sample) throw new Error("Sample not found!");
    Object.assign(sample, sampleIn);
    await sample.save();
    return sample;
  }

  @Mutation(() => Boolean)
  async deleteSample(@Arg("id") id: string) {
    const sample = await Sample.findOne({ where: { id } });
    if (!sample) throw new Error("Sample not found!");
    await sample.remove();
    return true;
  }
}
