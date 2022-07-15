/*==================================================
StudentView.js
Nafew and Alap
The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student, deleteStudent, editStudent } = props;
  let cStuff;
  if (student.campus == null) {
    cStuff = (<p>(Go enroll in something!)</p>);
  } else {
    cStuff = (
      <Link to={`/campus/${student.campus.id}`}>
      <h3>{student.campus.name}</h3>
      </Link>
    );
  }
  
  // Render a single Student view 
  return (
    <div>
      <h1> Student Profile </h1>
      <h2>Student Name: {student.firstname + " " + student.lastname}</h2>
      <h3>GPA: {student.gpa}</h3>
      <h3>Email: {student.email}</h3>
      {cStuff}

      <Link to={`/editstudent/${student.id}`}>
        <button onClick={() => editStudent(student)}>
          Edit
        </button>
      </Link> 
      <br/><br/>

      <Link to={'/students'}>
      <button onClick={() => deleteStudent(student.id)}>
        Delete
      </button>
      </Link>
    </div>
  );

};

export default StudentView;