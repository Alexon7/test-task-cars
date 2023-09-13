import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
const SharedLayout = () => {
  return (
    <>
          <Header />
           <main>
       <Suspense fallback={<h2>Loading</h2>}>
        <Outlet />
              </Suspense>
              </main>
    </>
  );
};

export default SharedLayout;