import { UserRouter } from './User/user-router';
import { PatientRouter } from './Patient/patient-router';
import { ScheduleRouter } from './Schedule/schedule-router';
import { NoteRouter } from './Note/note-router';
import { AuthRouter } from './Auth/auth-router';
import { CaretakerRouter } from './Caretaker/caretaker-router';
import { ClinicRouter } from './Clinic/clinic-router';

export default [
  PatientRouter,
  UserRouter,
  ScheduleRouter,
  NoteRouter,
  AuthRouter,
  CaretakerRouter,
  ClinicRouter
];
