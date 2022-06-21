import React, { Component } from 'react';
import UpdateModal from './modals/UpdateModal';
import ViewModal from './modals/ViewModal';

class ActionButton extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentEmployeeName: null,
            currentEmployeeTask: null
        }
    }

    getEmployeeDetails(id){
        axios.post("/get/individual/employee/details", {
            employeeId: id
        }).then((response) => {
            this.setState({
                currentEmployeeName: response.data.employee_name,
                currentEmployeeTask: response.data.task,
                currentEmployeeDepartment: response.data.department
            })

            console.log(response.data)
        })
    }

    render(){
        return(
            <div className="btn-group gap-1" role="group">
                <button onClick={() => {this.getEmployeeDetails(this.props.eachRowId)}} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#viewModal"+this.props.eachRowId}>View</button>
                <ViewModal modalId={this.props.eachRowId} employeeData={ this.state }/>
                <button className="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target={"#updateModal"+this.props.eachRowId} onClick={() => {this.getEmployeeDetails(this.props.eachRowId)}}>Update</button>
                <UpdateModal modalId={this.props.eachRowId} employeeData={ this.state }/>
                <button className="btn btn-danger" type="button">Delete</button>
            </div>
        )
    }
}

export default ActionButton