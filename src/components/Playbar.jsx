import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Link,
  Icon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import {
  BiSkipNext,
  BiShuffle,
  BiSkipPrevious,
  BiRepeat,
} from 'react-icons/bi';

import { AiOutlineHeart } from 'react-icons/ai';
import {
  BsFillPlayCircleFill,
  BsPip,
  BsFillPauseCircleFill,
} from 'react-icons/bs';
import { TbMicrophone2, TbDevices2 } from 'react-icons/tb';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { SlVolume2 } from 'react-icons/sl';

import { useEffect, useState } from 'react';

export default function Playbar(props) {
  const [audio, setAudio] = useState({});

  const [duration, setDuration] = useState(0);
  const [counter, setCounter] = useState(0);

  const [pause, setPause] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // console.log(props.playlist);
    changePlaylist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.playlist]);

  function soundTrack() {
    if (props.playlist?.length) {
      const tempAudio = new Audio(
        require('../asset/audio/' + props.playlist[0].src)
      );
      tempAudio.addEventListener('loadedmetadata', function () {
        setDuration(tempAudio.duration);
        console.log(tempAudio.duration);
      });

      setAudio(tempAudio);
    }
  }

  function play(status) {
    setPause(status);
    if (!status) {
      audio.play();
      setTimeout(() => setCurrentTime(audio.currentTime), 500);
      return;
    }
    audio.pause();
  }

  useEffect(() => {
    updateTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  async function updateTime() {
    if (currentTime === audio.duration && audio.duration) {
      setCounter(counter + 1);
      return await changeSong(counter + 1);
      // return;
    }

    const promise = new Promise(resolve => {
      setTimeout(() => {
        if (!pause) {
          resolve(setCurrentTime(audio.currentTime));
        }
      }, 500);
    });
    return await promise;
  }

  async function changeSong(track) {
    if (track > props.playlist.length - 1 || track < 0) {
      track = 0;
    }
    setCounter(track);
    audio.src = require('../asset/audio/' + props.playlist[track].src);

    return audio.play().finally(() => {
      setPause(false);
      updateTime();
    });
  }

  function changePlaylist() {
    setTimeout(() => setCurrentTime(audio?.currentTime), 500);

    if (audio.src) {
      setCounter(0);
      changeSong(0);
    } else {
      soundTrack();
    }
  }

  return (
    <Container zIndex={3} className="body" margin={0} padding={0}>
      {/* <Box w="100%" h="570px"></Box> */}

      <Flex
        className="music-container"
        bg="#111"
        w="100%"
        h={112}
        position={'fixed'}
        bottom={0}
        direction="row"
        align="center"
        justify="center"
      >
        {/* KETERANGAN MUSIC */}
        <Flex className="msc-desc" gap={3} w={'30%'} align={'center'}>
          <Image
            w={70}
            h={70}
            src={props.playlist?.length ? props.playlist[counter]?.img : null}
          />
          <Flex className="msc-intr" direction={'column'} justify={'center'}>
            <Link href="#" color={'white'}>
              {props.playlist?.length ? props.playlist[counter]?.title : null}
            </Link>
            <Link href="#" color={'white'}>
              {props.playlist?.length ? props.playlist[counter]?.singer : null}
            </Link>
          </Flex>
          <Link href="#">
            <Icon as={AiOutlineHeart} w={5} h={5} color={'white'}></Icon>
          </Link>
          <Link href="#">
            <Icon as={BsPip} w={4} h={4} color={'white'}></Icon>
          </Link>
        </Flex>

        {/* TOMBOL PLAYER MUSIC */}
        <Flex
          className="msc-controller"
          direction="column"
          align="center"
          justify="center"
          width={'30%'}
        >
          <Flex
            className="ctrl-button"
            align={'center'}
            width={'100%'}
            justify={'center'}
            gap={3}
          >
            <Box>
              <IconButton
                variant={'link'}
                as={BiShuffle}
                style={{ width: '20px', height: '20px' }}
                color="#999"
              ></IconButton>
            </Box>
            <Box>
              <IconButton
                variant={'link'}
                cursor={'pointer'}
                as={BiSkipPrevious}
                style={{ width: '40px', height: '40px' }}
                color="#999"
                onClick={async () => {
                  setCounter(counter - 1);
                  await changeSong(counter - 1);
                }}
              ></IconButton>
            </Box>

            <IconButton
              as={audio.paused ? BsFillPlayCircleFill : BsFillPauseCircleFill}
              variant={'link'}
              // ini icon playbar
              onClick={() => play(!pause)}
              // onClick={() => audio.play()}
              style={{ width: '40px', height: '40px' }}
              color="white"
            ></IconButton>

            <Box>
              <IconButton
                variant={'link'}
                cursor={'pointer'}
                as={BiSkipNext}
                style={{ width: '40px', height: '40px' }}
                color="#999"
                onClick={async () => {
                  setCounter(counter + 1);
                  await changeSong(counter + 1);
                }}
              ></IconButton>
            </Box>
            <Box>
              <IconButton
                variant={'link'}
                as={BiRepeat}
                style={{ width: '20px', height: '20px' }}
                color="#999"
              ></IconButton>
            </Box>
          </Flex>
          <Box height={1} width={'100%'}></Box>
          <Flex
            className="prog-pool"
            align={'center'}
            justify={'space-between'}
            width={'100%'}
          >
            <Box color={'white'} width={'100%'}>
              <Flex>
                <center>
                  {' '}
                  0{Math.floor(audio.currentTime / 60)}:{' '}
                  {Math.floor(audio.currentTime % 60) > 9
                    ? Math.floor(audio.currentTime % 60)
                    : '0' + Math.floor(audio.currentTime % 60)}
                </center>
              </Flex>
            </Box>
            <Flex>
              <Box className="prog-bar" width={'100%'} padding={'inherit'}>
                <Slider
                  defaultValue={0}
                  aria-label="slider-ex-1"
                  justifyContent={'center'}
                  w={320}
                  cursor={'default'}
                  value={Math.round(audio.currentTime * 100) / audio.duration}
                  onChange={val => {
                    let changeDur = val / 100;
                    if (audio.duration) {
                      changeDur *= audio.duration;
                    }
                    audio.currentTime = changeDur;
                    setCurrentTime(audio?.currentTime);
                  }}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
            </Flex>

            <Box color={'white'} width={'100%'}>
              <Flex>
                <center>
                  {' '}
                  0{Math.floor(duration / 60)}:{' '}
                  {Math.floor(duration % 60) > 9
                    ? Math.floor(duration % 60)
                    : '0' + Math.floor(duration % 60)}
                </center>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        {/* PENGATURAN MUSIC */}
        <Flex
          className="msc-opt"
          w={'30%'}
          justify={'right'}
          gap={2}
          align={'center'}
          h={50}
        >
          <Link>
            <Icon as={TbMicrophone2} w={6} h={5} color={'white'}></Icon>
          </Link>
          <Link>
            <Icon as={HiOutlineQueueList} w={6} h={5} color={'white'}></Icon>
          </Link>
          <Link>
            <Icon as={TbDevices2} w={6} h={5} color={'white'}></Icon>
          </Link>
          <Link>
            <Icon as={SlVolume2} w={6} h={5} color={'white'}></Icon>
          </Link>

          <Slider
            aria-label="slider-ex-1"
            w={28}
            defaultValue={audio?.volume * 100}
            onChange={vol => (audio.volume = vol / 100)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
      </Flex>
    </Container>
  );
}
