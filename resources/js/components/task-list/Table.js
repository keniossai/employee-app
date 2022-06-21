import React, { Component } from 'react';
import axios from 'axios'
import TableRow from './TaskRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    getEmployeeList =  () => {
        let self = this;
          axios.get('/get/employee/list').then(function(response){
            self.setState({
                employees: response.data
            })
        });
    }
    render(){
        return (
            <div className="container">
                <ToastContainer />
                <div className="row justify-content-center">
                    <div className="col-md-12">
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
                                    {this.state.employees.map(function(x, i){
                                        return(
                                            <TableRow key={i} data={x}/>
                                        )
                                    })}
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
