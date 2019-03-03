export class ClinicService {
  public getClinic(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const CLINIC = {
        id: 1,
        name: 'Careline Clinic',
        address: '123 Clinic Way, Cincinnati OH 45219',
        img: "url('/assets/images/people/default.png')"
      }
  
      resolve(CLINIC);
    });
  }
}
