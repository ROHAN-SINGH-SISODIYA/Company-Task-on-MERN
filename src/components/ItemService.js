import axios from 'axios';

class ItemService {

    sendData(data) {
        axios.post('/items/add/post', {
            countryName: data.countryName,
            product: data.product
        })
        .then((response) => {
            this.setState({
                items: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    updateDate(data, id) {
        axios.post('/items/update/'+id, {
            countryName: data.countryName,
            product: data.product
        })
        .then((response) => {
            this.asetState({
                items: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    deleteData(id) {
        axios.get('/items/delete/'+id)
        .then(() => {
            console.log('Deleted')
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default ItemService;
