'use strict';

import mongoose from 'mongoose';

var RegistrationSchema = new mongoose.Schema({
  event: String,
  userid: String},
  {
  usePushEach: true
}
);

export default mongoose.model('Registration', RegistrationSchema);
