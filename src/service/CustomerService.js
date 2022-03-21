import axios from "axios";

const API_URL = 'http://localhost:8080/api/customers/';

class CustomerService {

    getCustomers() {
        return axios.get(API_URL);
    }

    createCustomer(customer) {
        return axios.post(API_URL, customer);
    }

}

export default new CustomerService();