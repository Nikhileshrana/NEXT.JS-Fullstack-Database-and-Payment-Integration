import mongoose from 'mongoose';

const UserInformationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  credits: {
    type: Number
  }
});

export default mongoose.models.UserInformation || mongoose.model('UserInformation', UserInformationSchema);