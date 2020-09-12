import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';


class EditItem extends Component {

    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
        this.state = {
            ComapnyValue: '',
            productValue: '',
        }
    }

    componentDidMount = () => {
        axios.get('/items/edit/'+this.props.match.params.id)
        .then((response) => {
            this.setState({
                ComapnyValue: response.data.countryName,
                productValue: response.data.product
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleCountryChange = (event) => {
        this.setState({
            ComapnyValue: event.target.value
        })
    }

    handleProductChange = (event) => {
        this.setState({
            productValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addItemService.updateDate({countryName: this.state.ComapnyValue, product: this.state.productValue}, this.props.match.params.id);
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="container">
                <center>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Edit Item:
                        <br/>
                        <label>Product Name: </label>
                        <input
                            type="text"
                            value={this.state.productValue}
                            onChange={this.handleProductChange}
                            className="form-control"
                        />
                        <label>Country Name: </label>
                        <input
                            type="text"
                            value={this.state.ComapnyValue}
                            onChange={this.handleCountryChange}
                            className="form-control"
                        />
                        <br />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="Update"
                        className="btn btn-primary"
                    />
                </form>
                </center>
            </div>
        );
    }
}

export default EditItem;
