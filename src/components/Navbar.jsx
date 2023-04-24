// import '../css/All.css';
import { Button, Icon, Box, Flex } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth_type } from '../redux/types';
import { useEffect } from 'react';
import ContentLoad from './Content';
import { useToast } from '@chakra-ui/react';

export default function Navbar(props) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);

  const userSelector = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const nav = useNavigate();
  const toast = useToast();
  const positions = ['top-right'];

  async function logout() {
    const status = await dispatch({ type: auth_type.logout });
    localStorage.removeItem('user');
    if (status) {
      toast({
        title: 'Logout Success.',
        status: 'error',
        position: positions,
        duration: 2000,
        isClosable: true,
      });
      return nav('/login');
    }
  }
  return (
    <Box>
      <Box zIndex={'-1'} bgColor={'black'} width={'100vw'}>
        <Box
          zIndex={'1'}
          paddingLeft={'264px'}
          top={'0'}
          position={'sticky'}
          display={'flex'}
          bgColor={'black'}
          color={'white'}
          alignItems={'center'}
          flexDir={'column'}
          height={'60px'}
          justifyContent={'space-evenly'}
        >
          <Box
            className="recentlyLogin"
            gap={'15px'}
            display={'flex'}
            fontWeight={'extrabold'}
            width={'999px'}
            justifyContent={'space-between'}
          >
            <Box className="arrows" display={'flex'} paddingTop={'15px'}>
              <Box style={{ paddingLeft: '30px' }}>
                <Icon
                  as={IoIosArrowBack}
                  style={{
                    color: 'grey',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50px',
                    backgroundColor: 'black',
                  }}
                />
              </Box>
              <Box style={{ paddingLeft: '20px' }}>
                <Icon
                  as={IoIosArrowForward}
                  style={{
                    color: 'grey',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50px',
                    backgroundColor: 'black',
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Box
                className="upgradeProfile"
                display={'flex'}
                paddingTop={'15px'}
                paddingRight={'30px'}
                gap={'15px'}
              >
                <Flex>
                  <Button
                    borderColor={'grey'}
                    colorScheme="grey"
                    variant="outline"
                    borderRadius={'100px'}
                    size={'sm'}
                    fontSize={'14px'}
                    fontWeight={'bold'}
                    backgroundColor={'black'}
                  >
                    Upgrade
                  </Button>
                </Flex>
                <Flex>
                  <Box
                    className="account"
                    gap={'10px'}
                    bgColor={'whiteAlpha.400'}
                    borderRadius={'100px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Icon
                      className="profilelogo"
                      as={CgProfile}
                      style={{ width: '25px', height: '25px' }}
                      bgColor={'grey'}
                      borderRadius={'20px'}
                      cursor={'pointer'}
                      onClick={logout}
                    />
                    {userSelector?.name}
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box></Box>
        </Box>
        <ContentLoad data={props.data} setPlaylist={props.setPlaylist} />
      </Box>
    </Box>
  );
}
