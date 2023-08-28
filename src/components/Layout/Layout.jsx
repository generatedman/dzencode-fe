import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Container } from '../Container';


export const Layout = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <Sidebar />
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};
