import { StudentModel } from "../model/studentSchema.js";

const getAllStudents = async () => {
  console.log("hi")
  try {
    let data = await StudentModel.find({});
    console.log("data",data)
    return data;
  } catch (err) {
    return err.message;
  }
};

const getStudentById = async (args) => {
    let roll=args.roll
    console.log(roll)
  try {
    let data = await StudentModel.findById({ Roll: roll });
    return data;
  } catch (err) {
    return err.message;
  }
};

const addStudentData = async({Name:name, Roll:roll, Dob:dob, Std:std}) => {
    console.log(name,roll,dob,std);
  try {
    let newuser={
      Name: name,
      Roll: roll,
      Dob: dob,
      Std: std,
    }
    let addedStu = await StudentModel.create(newuser);
    console.log(addedStu)
    return addedStu;
  } catch (err) {
    return err.message;
  }
};

const updateStudentData = async ({name, roll, dob, std}) => {
  updatedata = { Namee: name, Dob: dob, Std: std };
  console.log(updatedata);
  try {
    let data = await StudentModel.findByIdAndUpdate(roll, updatedata);
    return data
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
  getAllStudents,getStudentById,addStudentData,updateStudentData,deleteStudentdata
};
