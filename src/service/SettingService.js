import axios from "axios";

const API_URL = 'http://localhost:8080/api/settings/';

class SettingService {

    getSettings() {
        return axios.get(API_URL);
    }

}

export default new SettingService();