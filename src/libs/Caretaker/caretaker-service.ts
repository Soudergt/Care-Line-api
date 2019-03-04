export class CaretakerService {
  public getCaretakers(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const CARETAKERS: any[] = [{
        id: 1,
        fn: 'Howard',
        ln: '',
        clinic: 'Careline Clinic',
        img: 'url(/assets/images/people/default.png)'
      },
      {
        id: 2,
        fn: 'Franny',
        ln: '',
        clinic: 'Careline Clinic',
        img: 'url(/assets/images/people/default.png)'
      },
      {
        id: 3,
        fn: 'Monica',
        ln: '',
        clinic: 'Careline Clinic',
        img: 'url(/assets/images/people/default.png)'
      },
      {
        id: 4,
        fn: 'Taylor',
        ln: 'Williams',
        clinic: 'Careline Clinic',
        img: 'url(/assets/images/people/caretakers/taylorwilliams.jpg)'  
      },
      {
        id: 5,
        fn: 'Madison',
        ln: '',
        clinic: 'Careline Clinic',
        img: 'url(/assets/images/people/default.png)'
      },
      {
        id: 6,
        fn: 'Steve',
        ln: '',
        clinic: 'Careline Clinic',
        img: 'url(/assets/images/people/default.png)'
      }
    ];
  
      resolve(CARETAKERS);
    });
  }

  public getCaretaker(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (id === '1') {
        const CARETAKER = {
          id: 1,
          fn: 'Howard',
          ln: '',
          clinic: 'Careline Clinic',
          img: 'url(/assets/images/people/default.png)'
        };

        resolve(CARETAKER);
      } else if (id === '2') {
        const CARETAKER = {
          id: 2,
          fn: 'Franny',
          ln: '',
          clinic: 'Careline Clinic',
          img: 'url(/assets/images/people/default.png)'
        };

        resolve(CARETAKER);
      } else if (id === '3') {
        const CARETAKER = {
          id: 3,
          fn: 'Monica',
          ln: '',
          clinic: 'Careline Clinic',
          img: 'url(/assets/images/people/default.png)'
        };

        resolve(CARETAKER);
      } else if (id === '4') {
        const CARETAKER = {
          id: 4,
          fn: 'Taylor',
          ln: 'Williams',
          clinic: 'Careline Clinic',
          img: 'url(/assets/images/people/caretakers/taylorwilliams.jpg)'
        };

        resolve(CARETAKER);
      } else if (id === '5') {
        const CARETAKER = {
          id: 5,
          fn: 'Madison',
          ln: '',
          clinic: 'Careline Clinic',
          img: 'url(/assets/images/people/default.png)'
        }

        resolve(CARETAKER);
      } else if (id === '6') {
        const CARETAKER = {
          id: 6,
          fn: 'Steve',
          ln: '',
          clinic: 'Careline Clinic',
          img: 'url(/assets/images/people/default.png)'
        };

        resolve(CARETAKER);
      }
    });
  }
}
