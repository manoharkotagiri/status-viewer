import axios from 'axios'

export default axios.create({
    baseURL: 'https://eis-hierarchy-status-service-dev.cfcdcinternaltest.kroger.com'
});