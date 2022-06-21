import axios from "axios";
import React, { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateModal extends Component {
    constructor(props) {
        super(props);

        this.state ={
            employeeName: null,
            employeeTask: null,
            employeeDepartment: null
        }
    }

    inputEmployeeName = (e) => {
        this.setState({
            employeeName: e.target.value
        })
    }
    inputEmployeeTask = (e) => {
        this.setState({
            employeeTask: e.target.value
        })
    }
    inputEmployeeDepartment = (e) => {
        this.setState({
            employeeDepartment: e.target.value
        })
    }

    static getDerivedStateFromProps(props, current_state){
        let employeeUpdate = {
            employeeName: null,
            employeeDepartment: null,
            employeeTask: null
        }

        // Update data from input
        if(current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)){
            return null;
        }
        if(current_state.employeeDepartment && (current_state.employeeDepartment !== props.employeeData.currentEmployeeDepartment)){
            return null;
        }
        if(current_state.employeeTask && (current_state.employeeTask !== props.employeeData.currentEmployeeTask)){
            return null;
        }

        // update Data from props below

        if(current_state.employeeName !== props.employeeData.currentEmployeeName || 
            current_state.employeeName === props.employeeData.currentEmployeeName){
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }
        if(current_state.employeeDepartment !== props.employeeData.currentEmployeeDepartment || 
            current_state.employeeDepartment === props.employeeData.currentEmployeeDepartment){
            employeeUpdate.employeeDepartment = props.employeeData.currentEmployeeDepartment;
        }
        if(current_state.employeeTask !== props.employeeData.currentEmployeeTask || 
            current_state.employeeTask === props.employeeData.currentEmployeeTask){
            employeeUpdate.employeeTask = props.employeeData.currentEmployeeTask;
        }

        return employeeUpdate;
    }
// Updating employee data.
    updateEmployeeData = () => {
        axios.post('/update/employee/data', {
            employeeId: this.props.modalId,
            employeeName: this.state.employeeName,
            employeeTask: this.state.employeeTask,
            employeeDepartment: this.state.employeeDepartment,
        }).then(() => {
            toast.success("Task  Updated Successully");
            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        return (
            <div className="modal fade" id={"updateModal"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                            <form className='form'>
                                <div className="form-group">
                                    <input type="text"
                                        id="employeeName"
                                        className='form-control mb-3'
                                        value={this.state.employeeName ?? ""}
                                        onChange={this.inputEmployeeName}
                                    />
                                </div>  

                                <div className="form-group">
                                    <input type="text"
                                        id="employeeSalary"
                                        className='form-control mb-3'
                                        value={this.state.employeeTask ?? ""}
                                        onChange={this.inputEmployeeTask}
                                    />
                                </div>  

                                <div className="form-group">
                                    <input type="text"
                                        id="employeeSalary"
                                        className='form-control mb-3'
                                        value={this.state.employeeDepartment ?? ""}
                                        onChange={this.inputEmployeeDepartment}
                                    />
                                </div>
                            </form> 
                    </div>
                        <div className="modal-footer">
                            <input type="submit"
                                className="btn btn-info"
                                value="Update"
                                onClick={this.updateEmployeeData}
                            />
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;
