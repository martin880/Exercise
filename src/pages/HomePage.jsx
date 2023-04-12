import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Playbar from '../components/Playbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';
import axios from 'axios';

export default function HomePage() {
  let nav = useNavigate();

  const [loading, setLoading] = useState(true);

  const [playlist, setPlaylist] = useState([]);

  async function fetchData() {
    await axios
      .get('http://localhost:2000/musics')
      .then(res => setPlaylist(res.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem('user'));
    // if (!user?.email) {
    //   return nav('/login');
    // } // masuk sini pada saat load page
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Center w="100vw" h="100vh">
          <Spinner size={'xl'} />
        </Center>
      ) : (
        <div style={{ display: 'flex' }}>
          <Playbar key="playbar" playlist={playlist} />
          <Navbar />
          <Sidebar />
        </div>
      )}
    </>
  );
}
