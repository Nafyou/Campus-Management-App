/*==================================================
AllStudentsView.js
Nafew
The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p>No New Students</p>
      <Link to={`newstudent`}>
        <button>
          Add New Student
        </button>
      </Link>
    </div>
    );
  }
  
  
  return (
    <div>
      <h1>All Students</h1>

      {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
              <img src={student.imageUrl}/>
              <button 
                onClick={() => deleteStudent(student.id)}>
                Delete
              </button>
              <hr/>
            </div>
          );
        }
      )}
      <br/>
      <Link to={`/newstudent`}>
        <button>
          Add New Student
        </button>
      </Link>
      <br/><br/>
    </div>
  );
};

export default AllStudentsView;