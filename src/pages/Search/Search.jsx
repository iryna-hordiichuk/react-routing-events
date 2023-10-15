import { fetchEventsByName } from 'servises/eventsAPI';
import { useSearchParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

//

export const Search = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  // here we get search query from the path in address bar

  const location = useLocation();
  console.log('this is location from Search', location);
// !query replases if (query === "" || query === null ), of course 💗
// we have to check "" - this is when User preses "Search Events" button
// with empty input; 🤔 null - this means useEffect will still fetch events 
// even when we did not set search params, null is a valid value and 
// useEffect does not care ??? 
  useEffect(() => {
    if (!query) {
      return
    };
    fetchEventsByName(query).then(setEvents);
  }, [query]);

  const onSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    setSearchParams({ query: form.elements.query.value });
    // on form submit event we pass an object with property query
    // and value is query from the input (what user typed into the input field),
    // to query parameters - a URL path in the address bar
    // 🍕 input has an attribute name, we use it to get value from the event object

    form.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search Events</button>
      </form>
      {events.length !== 0 && (
        <>
          {' '}
          <ul>
            {events.map(event => (
              <li key={event.id}>
                <Link to={`${event.id}`} state={{ from: location }}>
                  {event.name}
                </Link>
              </li>
            ))}
          </ul>
          <Outlet />{' '}
        </>
      )}
    </div>
  );
};
