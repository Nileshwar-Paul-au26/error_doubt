import { StudentModel } from "../model/studentSchema.js";

const getAllStudents = async () => {
  try {
    let data = await StudentModel.find({});
    return data;
  } catch (err) {
    return err.message;
  }
};

const getStudentById = async (args) => {
    let roll=args.roll
  try {
    let data = await StudentModel.findById({ Roll: roll });
    return data;
  } catch (err) {
    return err.message;
  }
};

const addStudentData = async ({name, roll, dob, std}) => {
    console.log(name)
  try {
    let addedStu = await StudentModel.create({
      Name: name,
      Roll: roll,
      Dob: dob,
      Std: std,
    });
    return addedStu;
  } catch (err) {
    return err.message;
  }
};

const updateStudentData = async ({name, roll, dob, std}) => {
  updatedata = { Namee: name, Dob: dob, Std: std };
  try {
    let data = await StudentModel.findByIdAndUpdate(roll, updatedata);
  } catch (err) {
    return err.message;
  }
};

const deleteStudentdata = async ( args) => {
    let roll=args.roll
  try {
    let deletedData = await StudentModel.findOneAndDelete({ Roll: roll });
    return deletedData;
  } catch (err) {
    return err.message;
  }
};

export {
  getAllStudents,
  getStudentById,
  addStudentData,
  updateStudentData,
  deleteStudentdata,
};
