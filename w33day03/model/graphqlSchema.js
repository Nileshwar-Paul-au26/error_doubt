import { buildSchema } from "graphql";

export const graphqlSchema = buildSchema(`
    
    type student{
                    name: String,
                    roll: Int,
                    dob: String,
                    std: Int
                }

    type Query {
        students:[student],
        studentData(roll: Int): student
    }
    
    type Mutation{
        addStudent(Name: String, Roll: Int, Dob: String, Std: Int):student,
        updateStudent(Name:String,Roll:Int,Dob:String,Std:Int):student,
        deleteStudent(Roll:Int):student
    }
`);
