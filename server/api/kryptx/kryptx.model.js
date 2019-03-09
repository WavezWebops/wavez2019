'use strict';

import mongoose from 'mongoose';

var KryptxSchema = new mongoose.Schema({
  id: String,
  userid: String,
  answer: String
}, {
	timestamps: true
},{
  usePushEach: true
});

export default mongoose.model('Kryptx', KryptxSchema);
