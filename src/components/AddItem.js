import React, { Component } from 'react';
import ItemService from './ItemService';


class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryValue: '',
            productValue: '',
        }
        this.addItemService = new ItemService();
    }

    handleCountryChange = (event) => {
        this.setState({
            countryValue: event.target.value
        })
    }

    handleProductChange = (event) => {
        this.setState({
            productValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addItemService.sendData({countryName: this.state.countryValue, product: this.state.productValue});
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="container">
                <center>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2>Add Country Details</h2>
                        <br/>
                        <label>Product Name: </label>
                        <input
                            type="text"
                            value={this.state.productValue}
                            onChange={this.handleProductChange}
                            className="form-control"
                        />
                        <label>Select Country: </label>
                        <select className="form-control" onChange={this.handleCountryChange}>
                            <option disabled selected>Select</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                            <option value="USA">USA</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Canada">Canada</option>
                            <option value="Itly">Itly</option>
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
            </div>
        );
    }
}

export default AddItem;
