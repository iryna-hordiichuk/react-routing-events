import { useFetchEvent } from 'hooks/useFetchEvent';
import { useLocation, useNavigate, Link, Outlet } from 'react-router-dom';


// ⚓ We use ✨optional chaining operator in onClick callback.
// this is because user can go to Details page 
// without previously visiting Events page or EventsSubpage
// for example if a user was sent a link by a friend🌻
// so in this case, if a user is on Details page and clicks "Go Back" button
// we redirect them to the Home page 💗✨

export const Details = () => {
  const location = useLocation();
  console.log('location in Details page', location.state);

  const event = useFetchEvent();
  console.log(event);

  const navigate = useNavigate();


  return (
    <>
      <button
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        {' '}
        Go back
      </button>
      {event && (
        <div>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="250" />
          <p>Genres: {event.classifications[0].genre.name}</p>
          <p>Subgenres: {event.classifications[0].subGenre.name}</p>
          {location.pathname.includes('search') && (
            <>
              <Link to="test" state={location.state}>
                {' '}
                to Test Page{' '}
              </Link>

              <Outlet />
            </>
          )}
        </div>
        // щоб інформація про цей лінк не втрачалася, таким ж чином передаємо стейт сабпейджі Каст та Ревью
      )}
    </>
  );
};
