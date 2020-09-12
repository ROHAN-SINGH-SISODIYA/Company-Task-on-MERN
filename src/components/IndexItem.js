import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

class IndexItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: ''
        }
    }

    componentDidMount = () => {
        axios.get('/items')
        .then((response) => {
            this.setState({
                items: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    tabRow = () => {
        if(this.state.items instanceof Array) {
            return this.state.items.map((object, i) => {
                return <TableRow obj={object} key={i} />
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center'>MERN CRUD APPLICATION</h1>
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Order</td>
                            <td>Country Name</td>
                            <td>Product</td>
                            <td>Date</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IndexItem;
