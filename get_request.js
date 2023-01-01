const axios = require("axios");

async function sendFormData(url, formData) {
    const params = new URLSearchParams([formData]);
    try {
        const response = await axios.get(
            url,
            {params}
        );

        if (response.status !== 200) {
            throw new Error(`Request failed with ${response.status} error`);
        } 
    
        return response.data;
    } catch (err) {
        throw new Error(err.response);
    }
    
}

// OR

function sendFormDataOther(url, formData) {
    const params = new URLSearchParams([formData]);
    axios.get(url, {params}).then(response => {
        if (response.status != 200) {
            throw new Error(`Request failed with ${response.status} response`);
        }
        return response.data;
    }).catch(err => {
        throw new Error(err.response);
    });
}
