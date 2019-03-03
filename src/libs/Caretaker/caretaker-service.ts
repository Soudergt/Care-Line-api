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
        ln: '',
        clinic: 'Careline Clinic',
        img: 'url(/assets/images/people/default.png)'
      },
      {
        id: 5,
        fn: 'Madison',
        ln: '',
        clinic: 'Careline Clinic',
        img: 'url(/assets/images/people/default.png)'
      }
    ];
  
      resolve(CARETAKERS);
    });
  }
}
