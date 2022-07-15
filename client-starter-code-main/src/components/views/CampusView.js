/*==================================================
CampusView.js
Nafew and Alap
The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
// import logo from "./logo192.png";
// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <img src={campus.imageUrl}></img>
      <h1>All Students</h1>
      {campus.students.map( student => {
        return (
          <div key={campus.id}>
            <Link to={`/campus/${student.id}`}>
              <h2>{campus.name}</h2>
            </Link>             
          </div>
        ); 
       })} 
    </div>
  );
};

export default CampusView;