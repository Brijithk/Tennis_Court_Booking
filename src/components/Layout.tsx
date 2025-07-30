import { Topbar } from './Topbar';
import { Outlet } from 'react-router-dom';
// import { Header } from './Header';
// import { Banner } from './Banner';

export const Layout = () => {
  return (
    <>
      <Topbar />
            {/* <Header /> */}
            {/* <Banner /> */}

       <Outlet /> {/*outlet is a hole in layout where page content goes such as it becomes home or login */}
    </>
  );
};