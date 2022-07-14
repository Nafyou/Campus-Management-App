// /*==================================================
// AllCampusesView.js

// The Views component is responsible for rendering web page with data provided by the corresponding Container component.
// It constructs a React component to display all campuses.
// ================================================== */
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { deleteCampus } from "../../store/actions/actionCreators";
// import { ADD_CAMPUS } from "../../store/actions/actionTypes";

// const AllCampusesView = (props) => {
//   // If there is no campus, display a message.
//   const {allCampuses, deleteCampus} = props;
//   if (!allCampuses.length) {
//     return( <div><p>There are no new campuses</p>
//     <Link to={`newcampus`}><button>Add new Campus</button></Link></div>
//     );
//   }

//   // If there is at least one campus, render All Campuses view 
//   return (
//     <div>
//       <h1>All Campuses</h1>

//       {allCampuses.map((campus) => {
//         return(
//         <div key={campus.id}>
//           <Link to={`/campus/${campus.id}`}>
//             <h2>{campus.name}</h2>
//           </Link>
//           <h4>campus id: {campus.id}</h4>
//           <p>{campus.address}</p>
//           <p>{campus.description}</p>
//           <button onClick={() => deleteCampus(campus.id)}>Delete</button>
//           <hr/>
//         </div>
//       );
//       }
//       )
//       }
//       <br/>
//       <Link to={`/newcampus`}>
//         <button>Add New Campus</button>
//       </Link>
//       <br/><br/>
//     </div>
//   );
// };

// AllCampusesView.propTypes = {
//   allCampuses: PropTypes.array.isRequired,
// };
const allCampuses => () =>{return(<p>hgjh</p>)
export default AllCampusesView};