import { buildSchema } from "graphql";

export const graphqlSchema = buildSchema(`
    
    type student{
                    Name: String,
                    Roll: Int,
                    Dob: String,
                    Std: Int
                }

    type Query {
        students:[student],
        studentData(roll: Int): student
    }
    
    type Mutation{
        addStudent(Name: String, Roll: Int, Dob: String, Std: Int):student,
        updateStudentData(Name:String,Roll:Int,Dob:String,Std:Int):student,
        deleteStudent(Roll:Int):student
    }
`);
