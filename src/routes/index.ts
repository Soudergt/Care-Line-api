import { UserRouter } from './User/user-router';
import { AuthRouter } from './Auth/auth-router';
import { ClinicRouter } from './Clinic/clinic-router';
import { FeedbackRouter } from './Feedback/feedback-router';
import { StatusRouter } from './Status/status-router';
import { RatingRouter } from './Rating/rating-router';
import { EventRouter } from './Event/event-router';
import { MessageRouter } from './Message/message-router';

export default [
  UserRouter,
  AuthRouter,
  ClinicRouter,
  FeedbackRouter,
  StatusRouter,
  RatingRouter,
  EventRouter,
  MessageRouter
];
