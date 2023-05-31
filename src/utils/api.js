import axios from "axios";


const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '84c29f9ca5msh6625fd860b6bc7cp1ae8c7jsn134ab07ab144',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};