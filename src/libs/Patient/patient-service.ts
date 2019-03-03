export class PatientService {
  public getPatients(uid: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const PATIENTS: any[] = [
        {
          id: 1,
          fn: 'Cathy',
          mi: '',
          ln: '',
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
          mi: '',
          ln: '',
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
          mi: '',
          ln: '',
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
          mi: '',
          ln: '',
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
          mi: '',
          ln: '',
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

  public getPatient(params: {id: number}) {
    if (params.id === 1) {
      return { id: 1, name: 'Cathy', img: 'url(/assets/images/people/cathy.jpg)'};
    } else if (params.id === 2) {
      return { id: 2, name: 'Bobby', img: 'url(/assets/images/people/bobby.jpg)' };  
    } else if (params.id === 3) {
      return { id: 3, name: 'Tammy', img: 'url(/assets/images/people/brenda.jpg)'};
    } else if (params.id === 4) {
      return { id: 4, name: 'Frank', img: 'url(/assets/images/people/frank.jpg)' };
    } else if (params.id === 6) {
      return { id: 6, name: 'George', img: 'url(/assets/images/people/george.jpg)'}
    } else if (params.id === 7) {
      return { id: 7, name: 'Patrick', img: 'url(/assets/images/people/patrick.jpg)'}
    } else if (params.id === 8) {
      return { id: 8, name: 'Duke', img: 'url(/assets/images/people/duke.jpg)'};
    }
  }

  public async addPatient(data: any) {
    
  }

  public async editPatient(data: any) {
    
  }

  public async deletePatient(data: any) {
    
  }

}
