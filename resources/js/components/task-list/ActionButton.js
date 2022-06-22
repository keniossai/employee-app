import React, { Component } from "react";
import UpdateModal from "./modals/UpdateModal";
import ViewModal from "./modals/ViewModal";
import DeleteModal from "./modals/DeleteModal";

class ActionButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentEmployeeName: null,
            currentEmployeeTask: null,
            currentEmployeeDepartment: null,
        };
    }

    getTaskDetails(id) {
        axios
            .post("/get/individual/employee/details", {
                employeeId: id,
            })
            .then((response) => {
                this.setState({
                    currentEmployeeName: response.data.employee_name,
                    currentEmployeeTask: response.data.task,
                    currentEmployeeDepartment: response.data.department,
                });

                console.log(response.data);
            });
    }

    render() {
        return (
            <div className="btn-group gap-1" role="group">
                <button
                    onClick={() => {
                        this.getTaskDetails(this.props.eachRowId);
                    }}
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={"#viewModal" + this.props.eachRowId}
                >
                    View
                </button>
                <ViewModal
                    modalId={this.props.eachRowId}
                    employeeData={this.state}
                />
                <button
                    className="btn btn-info"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={"#updateModal" + this.props.eachRowId}
                    onClick={() => {
                        this.getTaskDetails(this.props.eachRowId);
                    }}
                >
                    Update
                </button>
                <UpdateModal
                    modalId={this.props.eachRowId}
                    employeeData={this.state}
                />
                <button
                    className="btn btn-info"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={"#deleteModal" + this.props.eachRowId}
                    onClick={() => {
                        this.getTaskDetails(this.props.eachRowId);
                    }}
                >
                    Delete
                </button>
                <DeleteModal
                    modalId={this.props.eachRowId}
                    employeeData={this.state}
                />
               
            </div>
        );
    }
}

export default ActionButton;
