import axios from "axios";
import React, { Component } from "react";

class ViewModal extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div
                className="modal fade"
                id={"viewModal"+this.props.modalId}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                               Modal Title

                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Name: <strong>{this.props.employeeData.currentEmployeeName}</strong> <small>{this.props.employeeData.currentEmployeeDepartment}</small>
                                    <hr />
                            Task: <strong>{this.props.employeeData.currentEmployeeTask}</strong>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewModal;
