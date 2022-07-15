/*N AND A==================================================
EditStudentContainer.js
================================================== */
import Header from './Header';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { editStudentThunk, fetchStudentThunk } from '../../store/thunks';
import EditStudentView from '../views/EditStudentView';

class EditStudentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: this.props.student.firstname, 
      lastname: this.props.student.lastname, 
      email: this.props.student.email,
      imageUrl: this.props.student.imageUrl,
      gpa: this.props.student.gpa,
      campusId: this.props.student.campusId, 
      redirect: false, 
      redirectId: null
    };
  }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.
    let campusIdInput;
    if (!this.state.campusId) {
      campusIdInput = null;
    } else {
      campusIdInput = this.state.campusId;
    }

    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      imageUrl: this.state.imageUrl,
      gpa: this.state.gpa,
      campusId: campusIdInput,
      id: this.props.student.id
    };
    
    await this.props.editStudent(student);

    this.setState({
      firstname: "", 
      lastname: "", 
      email: "",
      imageUrl: "",
      gpa: null,
      campusId: null,
      redirect: true, 
      redirectId: this.props.student.id
    });
  }

  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }
    
    return (
      <div>
        <Header />
        <EditStudentView 
          student={this.props.student.name}
          studentFName={this.state.firstname}
          studentLName={this.state.lastname}
          studentEmail={this.state.email}
          studentImageUrl={this.state.imageUrl}
          studentGpa={this.state.gpa}
          studentCampusId={this.state.campusId}
          handleChange = {this.handleChange} 
          handleSubmit = {this.handleSubmit}      
        />
      </div>          
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,  // Get the State object from Reducer "student"
  };
};

const mapDispatch = (dispatch) => {
    return({
      fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
      editStudent: (student) => dispatch(editStudentThunk(student)),
    })
}

export default connect(mapState, mapDispatch)(EditStudentContainer);