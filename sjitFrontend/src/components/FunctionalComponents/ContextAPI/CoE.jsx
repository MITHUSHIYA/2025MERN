import Faculty from "./Faculty";
import { createContext } from "react";
import StudentResults from "./StudentResults";
export const ResultPublished = createContext();
const CoE = (res) => {
  return (
    <ResultPublished.Provider value={{gpa:"10 GPA" , cgpa:"10 CGPA"}}>
      <Faculty></Faculty>
      <h1>Results Published:</h1>
      <StudentResults></StudentResults>
    </ResultPublished.Provider>
  );
};
export default CoE;
