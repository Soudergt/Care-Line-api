import { getRepository } from "typeorm";
import { Needs } from "../../Entities/needs";

export class NeedsService {
  public async getNeeds(uid: string) {
    try {
      const needsRepo = getRepository(Needs);

      const needs = await needsRepo.find({
        where: {
          userUserID: uid,
        }
      });

      return needs;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async addNeed(user: any, need: any) {
    try {
      const needsRepo = getRepository(Needs);

      need.user = user;

      const newNeed = await needsRepo.save(need);

      return newNeed;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editNeed(need: any) {
    try {
      const needsRepo = getRepository(Needs);

      const updatedNeed = await needsRepo.save(need);

      return updatedNeed;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async deleteNeed(need: any) {
    try {
      const needsRepo = getRepository(Needs);

      const removedNeed = await needsRepo.remove(need);

      return removedNeed;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
