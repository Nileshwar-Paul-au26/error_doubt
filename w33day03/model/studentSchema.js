import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  Name: {
    type: String,
    max: 20,
    min: 2,
    required: true,
  },
  Roll: {
    type: Number,
    required: true,
  },
  Dob: {
    type: Date,
    max: new Date(2017 - 1 - 1),
    min: new Date(2003 - 1 - 1),
    required: true,
  },
  Std: {
    type: Number,
    max: 12,
    min: 1,
    required: true,
  },
});

export const StudentModel = new mongoose.model("students", StudentSchema);
