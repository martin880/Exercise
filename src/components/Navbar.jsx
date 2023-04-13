import '../css/navbar.css';
import { Button, Icon, Box, Flex } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth_type } from '../redux/types';
import { useEffect } from 'react';
import ContentLoad from './Content';

export default function Navbar(props) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);

  const userSelector = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const nav = useNavigate();

  function logout() {
    dispatch({ type: auth_type.logout });
    localStorage.removeItem('user');
    nav('/login');
  }
  return (
    <div>
      <div className="navbarnya">
        <div className="navbarbox">
          <div className="recentlylogin">
            <div className="arrows">
              <div style={{ paddingLeft: '30px' }}>
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
              </div>
              <div style={{ paddingLeft: '20px' }}>
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
              </div>
            </div>
            <Box>
              <div className="upgradeprofile">
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
                  <div className="account">
                    <Icon
                      className="profilelogo"
                      as={CgProfile}
                      style={{ width: '25px', height: '25px' }}
                      cursor={'pointer'}
                      onClick={logout}
                    />
                    {userSelector?.name}
                  </div>
                </Flex>
              </div>
            </Box>
          </div>
          <div></div>
        </div>
        <ContentLoad data={props.data} setPlaylist={props.setPlaylist} />
      </div>
    </div>
  );
}
