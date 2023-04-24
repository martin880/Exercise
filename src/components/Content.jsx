import { Box, Flex, Card, CardBody, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import '../css/All.css';
import { useSelector } from 'react-redux';

export default function ContentLoad(props) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);

  const userSelector = useSelector(state => state.auth);

  return (
    <Box
      className="containerBox"
      bgColor={'black'}
      overflow={'scroll'}
      height={'100vh'}
      paddingLeft={'264px'}
    >
      <Box className="gridbox" cursor={'pointer'}>
        <Flex>
          <Box
            style={{
              fontSize: '23px',
              fontWeight: 'bolder',
              color: ' white',
            }}
          >
            Recently played
          </Box>
        </Flex>
        <Flex>
          <Box className="grid">
            {props?.data?.map((val, idx) => (
              <Desc {...val} setPlaylist={props.setPlaylist} />
            ))}
          </Box>
        </Flex>
      </Box>
      <Box className="gridbox">
        <Flex>
          <Box
            style={{
              fontSize: '20px',
              fontWeight: 'bolder',
              color: ' white',
            }}
          >
            Playlist for @{userSelector?.name}
          </Box>
        </Flex>
        <Flex>
          <Box className="grid" cursor={'pointer'}>
            {props?.data?.map((val, idx) => (
              <Desc {...val} setPlaylist={props.setPlaylist} />
            ))}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function Desc(props) {
  return (
    <Flex>
      <Card className="card" bgColor={'#23272A'} marginBottom={'10px'}>
        <Box onClick={() => props?.setPlaylist(props.list)}>
          <Box
            className="logo2"
            style={!props.highlight ? { justifyContent: 'end' } : null}
          ></Box>
          <CardBody>
            {' '}
            <Box>
              <Box
                className="playlist-Img"
                padding={'9px 0px 7px 0px'}
                display={'flex'}
                gap={'5px'}
                maxHeight={'160px'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Image
                  src={props.imgURL}
                  alt="member"
                  width={'280px'}
                  height={'175px'}
                  borderRadius={'5px'}
                />
              </Box>
            </Box>
          </CardBody>
          <Box
            className="title"
            fontWeight={'bold'}
            color={'white'}
            paddingLeft={'15px'}
            style={{ fontSize: '12px' }}
          >
            {props.playlist}
          </Box>
          <Box
            className="creator"
            color={'grey'}
            fontSize={'15px'}
            fontFamily={'sans-serif'}
            paddingBottom={'10px'}
            paddingLeft={'15px'}
          >
            {props.desc}
          </Box>
        </Box>
      </Card>
    </Flex>
  );
}
