export class PatientService {
  public getPatients(uid: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const PATIENTS: any[] = [
        {
          id: 1,
          fn: 'Cathy',
          mi: 'B',
          ln: 'Smith',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/cathy.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        },
        {
          id: 2,
          fn: 'Bobby',
          mi: 'L',
          ln: 'Clark',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/bobby.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        },
        {
          id: 3,
          fn: 'Tammy',
          mi: 'U',
          ln: 'McDonald',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/brenda.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        },
        {
          id: 4,
          fn: 'Frank',
          mi: 'A',
          ln: 'Willis',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/frank.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        },
        {
          id: 5,
          fn: 'George',
          mi: 'R',
          ln: 'Castanza',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/george.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        },
        {
          id: 6,
          fn: 'Duke',
          mi: 'M',
          ln: 'James',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/duke.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        }
      ];
  
      resolve(PATIENTS);
    });
  }

  public getPatient(id: string) {
    return new Promise((resolve, reject) => {
      if (id === '1') {
        const PATIENT = {
          id: 1,
          fn: 'Cathy',
          mi: 'B',
          ln: 'Smith',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/cathy.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        };

        resolve(PATIENT);        
      } else if (id === '2') {
        const PATIENT = {
          id: 2,
          fn: 'Bobby',
          mi: 'L',
          ln: 'Clark',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/bobby.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        };

        resolve(PATIENT);          
      } else if (id === '3') {
        const PATIENT = {
          id: 3,
          fn: 'Tammy',
          mi: 'U',
          ln: 'McDonald',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/brenda.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        };

        resolve(PATIENT);        
      } else if (id === '4') {
        const PATIENT = {
          id: 4,
          fn: 'Frank',
          mi: 'A',
          ln: 'Willis',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/frank.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        };

        resolve(PATIENT);        
      } else if (id === '5') {
        const PATIENT = {
          id: 5,
          fn: 'George',
          mi: 'R',
          ln: 'Castanza',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/george.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        };

        resolve(PATIENT);
      } else if (id === '6') {
        const PATIENT = {
          id: 6,
          fn: 'Duke',
          mi: 'M',
          ln: 'James',
          clinic: 'Careline Clinic',
          bday: 'May, 5, 1942',
          gender: 'male',
          bloodtype: 'O+',
          height: "6'0''",
          weight: '160 lbs',
          img: 'url(/assets/images/people/patients/duke.jpg)',
          emergency: {
            fn: 'Lauren',
            ln: 'James',
            address: '127 Oak Lane, Cincinnati, Ohio, 44221',
            phone: '111-111-1111',
            email: 'lauren.james@email.com'
          }
        };

        resolve(PATIENT);
      }
    });
    
  }

  public async addPatient(data: any) {
    
  }

  public async editPatient(data: any) {
    
  }

  public async deletePatient(data: any) {
    
  }

}
