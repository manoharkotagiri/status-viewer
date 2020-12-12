import axios from 'axios'

export default axios.create({
    baseURL: 'https://eis-hierarchy-status-service-feature-EISART-26496.cfcdcinternaltest.kroger.com'
});