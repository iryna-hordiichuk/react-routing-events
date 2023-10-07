import axios from 'axios';

const API_KEY = 'tIj1kC332ExvV8vs1uBAp1fasaO5ERpG';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export async function fetchEvents() {
  const response = await axios('events', { params: { apikey: API_KEY } });

  return response.data._embedded.events;
}

// ID динамічна змінна !!
export async function fetchEventById(id) {
  const response = await axios(`events/${id}`, { params: { apikey: API_KEY } });

  return response.data;
}


export async function fetchEventsByName(keyword) {
  const response = await axios('events', {
    params: {
      apikey: API_KEY,
      keyword,
    }
  })
  return response.data._embedded.events
}

