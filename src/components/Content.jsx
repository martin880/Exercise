import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function ContentLoad(props) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);
  const data1 = [
    {
      image:
        'https://parade.com/.image/t_share/MTkwNTgxMjYyNzA0NzE1NjQ0/joan-jett-runaways.jpg',
      price: 100000,
      title: 'Jacksepticeye Mix',
      creator: 'Jacksepticeye',
    },
    {
      image:
        'https://w0.peakpx.com/wallpaper/36/216/HD-wallpaper-music-rock-band-bands.jpg',
      price: 200000,
      title: 'Moistcr1tikal',
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 300000,
      title: 1998,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 400000,
      title: 1997,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 500000,
      title: 1996,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 600000,
      title: 1995,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 700000,
      title: 1994,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 800000,
      title: 1993,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 900000,
      title: 1992,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 10000000000,
      title: 2000,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 10000000000,
      title: 2000,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 10000000000,
      title: 2000,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 10000000000,
      title: 2000,
      creator: 'Hondo',
    },
    {
      image:
        'https://media.istockphoto.com/id/1287491417/vector/rock-music-emblems-retro-label-badge.jpg?s=612x612&w=0&k=20&c=EbuGy-YFw2HgL2iLi8iHadAGf2NyOblAypbjtcauX_A=',
      price: 10000000000,
      title: 2000,
      creator: 'Hondo',
    },
  ];

  return (
    <Box className="lol">
      {/* <Box className="emptybox"></Box> */}
      <Box className="gridbox">
        <Box
          style={{
            fontSize: '23px',
            fontWeight: 'bolder',
            color: ' white',
            paddingBottom: '30px',
            paddingLeft: '30px',
            paddingTop: '20px',
          }}
        >
          Recently played
        </Box>
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
    <Box onClick={() => props?.setPlaylist(props.list)}>
      <Box
        className="logo2"
        style={!props.highlight ? { justifyContent: 'end' } : null}
      ></Box>
      <Box className="bungkus">
        <Box className="product-image">
          <img src={props.imgURL} alt="member" />
        </Box>
        <Box className="kuning">
          <Box className="title" style={{ fontSize: '18px' }}>
            {props.playlist}
          </Box>
          <Box className="creator">{props.desc}</Box>
        </Box>
      </Box>
    </Box>
  );
}
