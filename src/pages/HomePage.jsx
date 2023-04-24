import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Playbar from '../components/Playbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, Spinner, Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function HomePage() {
  let nav = useNavigate();

  const userSelector = useSelector(state => state.auth);

  const [loading, setLoading] = useState(true);

  const [playlist, setPlaylist] = useState([]);

  const [homeplaylist, setHomePlaylist] = useState([]);

  const [sidebarPlaylist, setSideBarPlaylist] = useState([]);

  async function fetchData() {
    await axios
      .get('http://localhost:2000/musics')
      .then(res => setPlaylist(res.data));
    await axios
      .get('http://localhost:2000/playlist')
      .then(res => setHomePlaylist(res.data));
    await axios
      .get('http://localhost:2000/playlist', {
        params: { createdBy: userSelector.email },
      })
      .then(res => setSideBarPlaylist(res.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem('user'));
    // if (!user?.email) {
    //   return nav('/login');
    // } // masuk sini pada saat load page
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Center w="100vw" h="100vh">
          <Spinner size={'xl'} />
        </Center>
      ) : (
        <Box>
          <Flex>
            <Playbar key="playbar" playlist={playlist} />
            <Navbar setPlaylist={setPlaylist} data={homeplaylist} />
            <Sidebar
              sidebarPlaylist={sidebarPlaylist}
              setSideBarPlaylist={setSideBarPlaylist}
              playlist={playlist}
            />
          </Flex>
        </Box>
      )}
    </>
  );
}
