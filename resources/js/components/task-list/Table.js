import React, { Component } from 'react';
import axios from 'axios'

class Table extends Component {
    constructor(props){
        super(props);

        this.state = {
            employees: [],
        }
    }

    // Calling the function using a lifecycle method
    componentDidMount(){
        this.getEmployeeList()
    }

    // Get Employee List
    getEmployeeList = () => {
        axios.get('/get/employee/list').then(function(response){
            this.setState({
                employees: response.data
            })
        });
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
