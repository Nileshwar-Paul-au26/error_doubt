import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";

import { init } from "./db.js";
import { graphqlSchema } from "./model/graphqlSchema.js";
import {
  getAllStudents,
  getStudentById,
  addStudentData,
  updateStudentData,
  deleteStudentdata,
} from "./controllers/studentsHandlers.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

//connect to DB
init();

const resolvers = {
  students: getAllStudents,
  studentData: getStudentById,
  addStudent: addStudentData,
  updateStudent: updateStudentData,
  deleteStudent: deleteStudentdata,
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: resolvers,
    graphiql: true,
  })
);
//server started
app.listen(PORT, () => console.log(`Listening at PORT ${PORT}`));
