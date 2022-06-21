import React, { Component } from 'react';

class Table extends Component {
    constructor(props){
        super(props);

        this.state = {
            employees: [],
        }
    }

    // Get Employee List 
    getEmployeeList = () => {

    }
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col" width="100px">#</th>
                                    <th scope="col" width="100px">Name</th>
                                    <th scope="col" width="100px">Department</th>
                                    <th scope="col" width="100px">Task</th>
                                    <th scope="col" width="100px">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
