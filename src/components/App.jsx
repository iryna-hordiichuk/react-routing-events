import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { EventsPage } from 'pages/Events/Events';
import { EventsSubpage } from './EventsSubpage/EventsSubpage';
import { Search } from 'pages/Search/Search';
import {Details} from 'pages/Details/Details';
import {TestPage} from 'pages/TestPage.js';

// Якщо в атрибут path додати косу лінію, то вона перезатре шлях ЮРЛ
// і значення атрибуту приліпиться до базового ЮРЛ;
// а якщо не додати косу лінію - то значення атрибуту path
// "пришиється" до всього ЮРЛ.
// щоб id додавалось до поточного шляху потрібно не ставити слеш

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventsSubpage />} />
        </Route>
        <Route path="search" element={<Search />}>
          <Route path=":id" element={<EventsSubpage />} />
        </Route>
        <Route path='search/:id/details' element={<Details/>}>
        <Route path='test' element={<TestPage/>}/>
        </Route>
        <Route path='events/:id/details' element={<Details/>}/>
      </Route>
    </Routes>
  );
};
