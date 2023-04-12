import { calc } from '@chakra-ui/react';

export default function Test() {
  const arr = [
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
    <div className="lol">
      {/* <div className="emptybox"></div> */}
      <div className="gridbox">
        <div
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
        </div>
        <div className="grid">
          {arr.map((val, idx) => (
            <Desc {...val} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Desc(props) {
  return (
    <div>
      <div
        className="logo2"
        style={!props.highlight ? { justifyContent: 'end' } : null}
      ></div>
      <div className="bungkus">
        <div className="product-image">
          <img src={props.image} alt="member" />
        </div>
        <div className="kuning">
          <div className="title" style={{ fontSize: '18px' }}>
            {props.title}
          </div>
          <div className="creator">{props.creator}</div>
        </div>
      </div>
    </div>
  );
}
