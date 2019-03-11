import { UserRouter } from './User/user-router';
import { ScheduleRouter } from './Schedule/schedule-router';
import { AuthRouter } from './Auth/auth-router';
import { ClinicRouter } from './Clinic/clinic-router';
import { FeedbackRouter } from './Feedback/feedback-router';
import { StatusRouter } from './Status/status-router';
import { RatingRouter } from './Rating/rating-router';

export default [
  UserRouter,
  ScheduleRouter,
  AuthRouter,
  ClinicRouter,
  FeedbackRouter,
  StatusRouter,
  RatingRouter
];
