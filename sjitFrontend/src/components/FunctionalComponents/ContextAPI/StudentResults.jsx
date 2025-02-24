/* import Exam from "./Exam"; */
import { useContext } from "react";
import { ResultPublished } from "./CoE";

const StudentResults = (res) => {
  const result = useContext(ResultPublished);
  return (
    <div>
      <h1>Result</h1>
      <h2>GPA:{result.gpa}</h2>
      <h2>CGPA:{result.cgpa}</h2>
    </div>
  );
};
export default StudentResults;
