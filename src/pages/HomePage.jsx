import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Playbar from '../components/Playbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';

export default function HomePage(props) {
  let nav = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // masuk sini pada saat load page
    setTimeout(() => setLoading(false), 1000);
    if (props.user !== 'orang') {
      nav('/login');
    }
  }, []);

  return (
    <>
      {loading ? (
        <Center w="100vw" h="100vh">
          <Spinner size={'xl'} />
        </Center>
      ) : (
        <div style={{ display: 'flex' }}>
          <Playbar />
          <Navbar />
          <Sidebar />
        </div>
      )}
    </>
  );
}
