import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProtectedPage from './ProtectedPage';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Playbar from '../components/Playbar';

const routes = [
  <Route
    path="/"
    element={
      <ProtectedPage needLogin={true}>
        <HomePage user="orang" />
      </ProtectedPage>
    }
  />,

  <Route
    path="/login"
    element={
      <ProtectedPage guestOnly={true}>
        <LoginPage />
      </ProtectedPage>
    }
  />,
  <Route
    path="/sidebar"
    element={
      <ProtectedPage guestOnly={true}>
        <Sidebar />
      </ProtectedPage>
    }
  />,
  <Route
    path="/navbar"
    element={
      <ProtectedPage guestOnly={true}>
        <Navbar />
      </ProtectedPage>
    }
  />,
  <Route
    path="/playbar"
    element={
      <ProtectedPage guestOnly={true}>
        <Playbar />
      </ProtectedPage>
    }
  />,
];

export default routes;
