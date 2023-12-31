import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import Loader from '../Loader/Loader';
const SharedLayout = () => {
  return (
    <>
          <Header />
           <main>
       <Suspense fallback={<Loader />}>
        <Outlet />
              </Suspense>
              </main>
    </>
  );
};

export default SharedLayout;