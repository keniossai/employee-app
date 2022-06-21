import React, { Component } from 'react';
import ActionButton from './ActionButton';

class TableRow extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr>
                <th>{this.props.data.id}</th>
                <td>{this.props.data.employee_name}</td>
                <td>{this.props.data.department}</td>
                <td scope="col-2" width="300px" >{this.props.data.task}</td>
                <td><ActionButton eachRowId={this.props.data.id}/></td>
            </tr>
        )
    }
}

export default TableRow