const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'b354ccd105mshd1d28eafbec4dccp189dedjsn9bb5e24af953',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}}`, options);

    return data;
}