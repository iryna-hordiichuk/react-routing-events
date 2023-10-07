import { useFetchEvent } from 'hooks/useFetchEvent';
import{Link, useLocation} from 'react-router-dom';


// 🏳️‍🌈 function useFetchEvent is asyncronous, so we have to
// check if data arrived before rendering
// if we try to render immediately without
// waiting for HTTP request to fulfill
// there will be no data as state is null (initial state) 💕

// ! this page is transitional component for object location
// in component Link we simply access it
// by syntax using dot notation - location.state
// which was passed earlier into Link in Events page 🍉
// we want to return to Events page from page Details

export const EventsSubpage = () => {

  const location = useLocation();

  console.log('location from subpage', location);

  const event = useFetchEvent();
  console.log(event);

  return (
    <>
      {event && (
        <div>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width='250'/>
          <Link to='details' state={location.state}> See more details </Link>

        </div>
      )}
    </>
  );
};
