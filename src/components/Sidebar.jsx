import {
  Box,
  Container,
  Icon,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton,
} from '@chakra-ui/react';
import { Image, Flex } from '@chakra-ui/react';
import logo from '../img/Spotify_Logo_RGB_White.png';
import {
  BsHeartFill,
  BsHouseDoorFill,
  BsPlusSquareFill,
  BsSearch,
  BsFillFileMusicFill,
} from 'react-icons/bs';
import { VscLibrary } from 'react-icons/vsc';
import { BiGlobe } from 'react-icons/bi';
import { CreatePlaylist } from '../components/Modal';
import { useEffect } from 'react';

export default function Sidebar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log(props.sidebarPlaylist);
  }, [props.sidebarPlaylist]);

  return (
    <Box zIndex={'2'} w="264px" maxH="100vh" position={'absolute'} bg="black">
      <Container>
        <Flex>
          <Image
            zIndex={'2'}
            margin={'20px 20px'}
            w="130px"
            objectFit="cover"
            src={logo}
            alt="logo"
            cursor={'pointer'}
          />
        </Flex>
      </Container>
      <Box>
        <Container>
          <Flex>
            <Icon
              className="icon"
              margin={'20px 20px'}
              as={BsHouseDoorFill}
              color={'#B3B3B3'}
              w={'20px'}
              h={'20px'}
              cursor={'pointer'}
            ></Icon>
            <Text
              className="text"
              color={'#B3B3B3'}
              textAlign={'left'}
              marginBlock={'20px 0px'}
              cursor={'pointer'}
            >
              Home
            </Text>
          </Flex>
        </Container>
        <Container>
          <Flex>
            <Icon
              className="icon"
              as={BsSearch}
              margin={'20px 20px'}
              color={'#B3B3B3'}
              w={'20px'}
              h={'20px'}
              cursor={'pointer'}
            ></Icon>
            <Text
              className="text"
              color={'#B3B3B3'}
              textAlign={'center'}
              marginBlock={'20px 0px'}
              cursor={'pointer'}
            >
              Search
            </Text>
          </Flex>
        </Container>
        <Container>
          <Flex>
            <Icon
              className="icon"
              as={VscLibrary}
              margin={'20px 20px'}
              color={'#B3B3B3'}
              w={'20px'}
              h={'20px'}
              cursor={'pointer'}
            ></Icon>
            <Text
              className="text"
              color={'#B3B3B3'}
              textAlign={'center'}
              marginBlock={'20px 0px'}
              cursor={'pointer'}
            >
              Your Library
            </Text>
          </Flex>
        </Container>
      </Box>
      <Box margin={'20px 0px'}>
        <Container>
          <Flex onClick={onOpen}>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent playlist={props.playlist}>
                <CreatePlaylist onClose={onClose} />
              </ModalContent>
            </Modal>
            <Icon
              className="icon"
              as={BsPlusSquareFill}
              margin={'20px 20px'}
              color={'#B3B3B3'}
              w={'20px'}
              h={'20px'}
              cursor={'pointer'}
            ></Icon>

            <Text
              className="text"
              color={'#B3B3B3'}
              textAlign={'center'}
              marginBlock={'20px 0px'}
              cursor={'pointer'}
            >
              Create Playlist
            </Text>
          </Flex>
        </Container>

        <Container>
          <Flex>
            <Icon
              className="icon"
              as={BsHeartFill}
              margin={'20px 20px'}
              color={'#B3B3B3'}
              w={'20px'}
              h={'20px'}
              cursor={'pointer'}
            ></Icon>
            <Text
              className="text"
              color={'#B3B3B3'}
              textAlign={'center'}
              marginBlock={'20px 0px'}
              cursor={'pointer'}
            >
              Liked Songs
            </Text>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container>
          <Flex>
            <Icon
              className="icon"
              as={BsFillFileMusicFill}
              margin={'20px 20px'}
              color={'#B3B3B3'}
              w={'20px'}
              h={'20px'}
              cursor={'pointer'}
            ></Icon>
            <Text
              className="text"
              color={'#B3B3B3'}
              textAlign={'center'}
              marginBottom={'10px'}
              marginBlock={'20px 0px'}
              cursor={'pointer'}
            >
              {props.sidebarPlaylist?.map(val => (
                <SideBar {...val} />
              ))}
            </Text>
          </Flex>
        </Container>
      </Box>
      <Box margin={'20px 0px'}>
        <Container>
          <Flex>
            <Text
              className="cookies"
              color={'#B3B3B3'}
              marginLeft={'10px'}
              fontWeight={'10px'}
              fontSize={'smaller'}
              textAlign={'center'}
              cursor={'pointer'}
            >
              Cookies
            </Text>
          </Flex>
        </Container>
      </Box>
      <Box margin={'20px 0px'}>
        <Container>
          <Flex>
            <Button
              className="btnLang"
              borderRadius={'20px'}
              w={'82px'}
              h={'30px'}
              margin={'20px 20px'}
              bgColor={'black'}
              borderColor={'#727272'}
              cursor={'pointer'}
            >
              <Icon
                as={BiGlobe}
                color={'white'}
                margin={'20px 2px'}
                w={'20px'}
                h={'20px'}
                cursor={'pointer'}
              ></Icon>
              <Text marginRight={'0px'} color={'white'} fontWeight={'bold'}>
                English
              </Text>
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

function SideBar(props) {
  return (
    // <Box onClick={() => props?.setPlaylist(props.list)}>{props.playlist}</Box>
    <Box>{props.playlist}</Box>
  );
}
