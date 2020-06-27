import axios from 'axios';
import 'regenerator-runtime';

const baseUrl = 'https://en.wikipedia.org/api/rest_v1';
export default {
    async summary(name) {
        const result = await axios.get(baseUrl + '/page/summary/' + name);
        return result.data.extract;
    }
};