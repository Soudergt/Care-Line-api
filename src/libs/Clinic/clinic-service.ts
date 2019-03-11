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
}
