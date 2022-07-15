/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus,editCampus,deleteCampus,unenroll} = props;

  let studentInfo;
  if (campus.students.length === 0) {
    studentInfo = (<p>(No students enrolled)</p>);
  } else {
    studentInfo = (<h3>Total Students: {campus.students.length}</h3>);
  }
  
  // Render a single Campus view
  return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl || "https://i.pinimg.com/474x/9a/ed/3a/9aed3a1a5ab33519380a2d2f3dd191ff--pastel-punk-pixel-art.jpg"} height="250" width="300" alt="Univeristy Picture"/>
      <p><strong>Address:</strong> {campus.address}</p>
      <p><strong>Description:</strong> {campus.description}</p>
      <Link to={`/editcampus/${campus.id}`}>
        <button onClick={() => editCampus(campus)}>
          Edit Campus Information
        </button>
      </Link> 
      <Link to={'/campuses'}>
        <button onClick={() => deleteCampus(campus.id)}>
          Delete Campus
        </button>
      </Link> 
      {studentInfo}
      <div>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>        
              <button onClick={() => unenroll(student.id)}>
                Unenroll
              </button>
            </div>
          );
        })}
      </div>
      <br/>
      <Link to={'/students'}>
        <button>
          Enroll New Student
        </button>
      </Link> 
      <br/><br/>
    </div>
  );
};

export default CampusView;