import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';
import { uniqBy } from 'lodash';
class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: '',
            results: '',
        }
        this.addItemService = new ItemService();
    }

    componentDidMount = () => {
        axios.get('/items')
        .then((response) => {
            const data = uniqBy(response.data, 'countryName');
            this.setState({
                items: data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`/items/getDetails/${this.state.value}`)
        .then((response) => {
            console.log(response.data);
            this.setState({
                results: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return(
            <div className="container">
                <center>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2>Select Country</h2>
                        <select className="form-control" onChange={this.handleChange}>
                        <option disabled selected>Select</option>
                        {this.state.items && this.state.items.map((object, i) =>
                            <option value={object.countryName}>{object.countryName}</option>
                        )}
                        </select>
                        <br />
                        <input
                            type="submit"
                            value="submit"
                            className="btn btn-primary"
                        />
                    </label>
                </form>
                </center>
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Country Name</td>
                            <td>Product</td>
                            <td>Date</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.results && this.state.results.map((object, i) => 
                        <TableRow obj={object} key={i} />
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Country;
