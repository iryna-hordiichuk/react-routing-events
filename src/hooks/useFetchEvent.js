import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'servises/eventsAPI';

// this custom hook fetches 1 event and returns it into outer code.
// as we are making HTTP requests -
// we are going to use useState and useEffect
// we can use 'readymade' hooks in our custom hooks

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);

  const { id } = useParams();
  // dynamically gets an id from the path in a adress bar
  // (parses URL parameters and gets an id from there)

  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);

  return event;
};
