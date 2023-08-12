import axios from 'axios';

export async function fetchDataFromRover(params) {
  const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
  const apiKey = 'uD6bnoJ05HvitgdMczn6bBi1cpuRaMejUaDgwtIP';

  params.api_key = apiKey;

  try {
    const response = await axios.get(apiUrl, { params });
    if (response.data.photos.length != 0) {
      return response.data;
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}