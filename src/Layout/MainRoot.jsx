import { Outlet } from 'react-router-dom';
import Footer from '../Routes/Shared/Footer/Footer';
import NavBar from '../Routes/Shared/NavBar/NavBar';

const MainRoot = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainRoot;
