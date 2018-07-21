import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: mongoose.Schema.Types.String,
    unique: true,
    required: [true, "Lütfen bir email adresi giriniz!"]
  },
  password: String,
  phoneNumber: [
    {
      phoneType: String,
      phoneNumber: String
    }
  ],
  plateNumber: String,
  taxiStop: String,
  taxiStopNumber: [
    {
      phoneType: String,
      phoneNumber: String
    }
  ],
  dateCreated: {
    type: Date,
    default: new Date()
  },
  dateModified: {
    type: Date,
    default: new Date()
  },
  lastLogin: {
    type: Date,
    default: new Date()
  },
  isActived: {
    type: Boolean,
    default: true
  },
  tags: Array
});

export default mongoose.model("Driver", driverSchema, "Drivers");
