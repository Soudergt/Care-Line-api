import { getRepository } from "typeorm";
import { Clinic } from "../../Entities/clinic";

export class ClinicService {
  public async getClinics() {
    try {
      const clinicRepo = getRepository(Clinic);

      const clinics = await clinicRepo.find();    
  
      return clinics; 
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getClinic(id: number) {
    try {
      const clinicRepo = getRepository(Clinic);

      const clinic = await clinicRepo.findOne(id);    
  
      return clinic;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async addClinic(clinic: Clinic) {
    try {
      const clinicRepo = getRepository(Clinic);

      const newClinic = await clinicRepo.save(clinic);

      return newClinic;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editClinic(clinic: Clinic) {
    try {
      const clinicRepo = getRepository(Clinic);

      const updatedClinic = await clinicRepo.save(clinic);

      return updatedClinic;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async deleteClinic(clinic: Clinic) {
    try {
      const clinicRepo = getRepository(Clinic);

      const removedClinic = await clinicRepo.remove(clinic);

      return removedClinic;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
