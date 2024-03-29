import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Layout = lazy(() => import('./Layout/Layout'));
const Tweets = lazy(() => import('../pages/Tweets'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
