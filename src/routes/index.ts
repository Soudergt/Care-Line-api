import { UserRouter } from './User/user-router';
import { ScheduleRouter } from './Schedule/schedule-router';
import { NoteRouter } from './Note/note-router';
import { AuthRouter } from './Auth/auth-router';
import { ClinicRouter } from './Clinic/clinic-router';
import { FeedbackRouter } from './Feedback/feedback-router';

export default [
  UserRouter,
  ScheduleRouter,
  NoteRouter,
  AuthRouter,
  ClinicRouter,
  FeedbackRouter
];
