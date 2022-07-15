/* N AND A==================================================
EditCampusContainer.js
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EditCampusView from '../views/EditCampusView';
import { editCampusThunk, fetchCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.campus.name, 
      imageUrl: this.props.campus.imageUrl,
      address: this.props.campus.address,
      description: this.props.campus.description,
      redirect: false, 
      redirectId: null
    };
  }

  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    let campus = {
        name: this.state.name,
        imageUrl: this.state.imageUrl,
        address: this.state.address,
        description: this.state.description,
        id: this.props.campus.id
    };
    
    await this.props.editCampus(campus);

    this.setState({
      name: "", 
      imageUrl: "", 
      address: "", 
      description: "",
      redirect: true, 
      redirectId: this.props.campus.id
    });
  }

  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }
    
    return (
      <div>
        <Header />
        <EditCampusView 
          campus={this.props.campus.name}
          campusName={this.state.name}
          campusImageUrl={this.state.imageUrl}
          campusAddress={this.state.address}
          campusDescription={this.state.description}
          handleChange = {this.handleChange} 
          handleSubmit = {this.handleSubmit}      
        />
      </div>          
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus, 
  };
};

const mapDispatch = (dispatch) => {
    return({
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
      editCampus: (campus) => dispatch(editCampusThunk(campus)),
    })
}

export default connect(mapState, mapDispatch)(EditCampusContainer);