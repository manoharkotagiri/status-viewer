import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
    },
    data: {
        "pageRequest": {
            "pageNumber": 0,
            "pageSize": 10,
            "sortAscending": true
        },
        "queries": [

            {
                "queryField": "roleUpdateDatetime",
                "queryValue": "2020-10",
                "searchCriteria": "starts with"
            }
        ]
    }
});