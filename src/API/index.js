import axios from 'axios';

export const fetchData = async (country) => {
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country',
        params: {
            format: 'json',
            name: country === 'Afghanistan' ? 'Afghanistan' : country
        },
        headers: {
            'x-rapidapi-key': 'b4827fb913msh54dffc9dd046549p1f5d94jsne16f68914c46',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const data = response.data[0];
        return {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
    } catch (error) {
        console.error(error);
    }
}
