import {
  Box,
  Flex,
  Image,
  Icon,
  Center,
  Input,
  Checkbox,
  InputGroup,
  InputRightElement,
  Select,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import logo from '../img/spotify-logo2.png';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { TbAlertCircleFilled } from 'react-icons/tb';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { auth_types } from '../redux/types';
// import userReducer from '../redux/auth';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import YupPassword from 'yup-password';
import '../css/Register.css';
import axios from 'axios';

export default function RegisterPage() {
  YupPassword(Yup);
  const [seePassword, setSeePassword] = useState(false);
  const month = [
    {
      name: 'January',
      number: 1,
    },
    {
      name: 'February',
      number: 2,
    },
    {
      name: 'March',
      number: 3,
    },
    {
      name: 'April',
      number: 4,
    },
    {
      name: 'May',
      number: 5,
    },
    {
      name: 'June',
      number: 6,
    },
    {
      name: 'July',
      number: 7,
    },
    {
      name: 'August',
      number: 8,
    },
    {
      name: 'September',
      number: 9,
    },
    {
      name: 'October',
      number: 10,
    },
    {
      name: 'November',
      number: 11,
    },
    {
      name: 'December',
      number: 12,
    },
  ];

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      email2: '',
      password: '',
      name: '',
      day: '',
      month: '',
      year: '',
      gender: 'Male',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('You need to enter your email.')
        .email(
          "This email is invalid. Make sure it's written like example@email.com"
        ),
      email2: Yup.string()
        .required('You need to confimr your email.')
        .oneOf([Yup.ref('email'), null], "The email address don't match."),
      password: Yup.string().min(8, 'Your password is too short'),
      name: Yup.string().required('Enter a name for your profile'),
      day: Yup.number('Enter a valid day of the month.')
        .moreThan(0, 'Enter a valid day of the month.')
        .lessThan(32, 'Enter a valid day of the month.'),
      month: Yup.string().required('Select your birth month.'),
      year: Yup.number()
        .required('Enter a valid year.')
        .moreThan(0, 'Enter a valid year'),
    }),
    onSubmit: async () => {
      // console.log(formik.values);
      const { email, name, password, year, month, day, gender } = formik.values;
      const account = { email, name, password, gender };

      account.birthdate = new Date(year, month, day);

      const checkEmail = await axios
        .get('http://localhost:2000/user', {
          params: { email: account.email },
        })
        .then(res => {
          if (res.data.length) {
            return true;
          } else {
            return false;
          }
        });
      if (checkEmail) {
        return alert('email already used');
      } else {
        await axios.post('http://localhost:2000/user', account).then(res => {
          nav('/login');
        });
      }
    },
  });

  function inputHandler(event) {
    const { value, id } = event.target;
    formik.setFieldValue(id, value);
  }
  return (
    <>
      <Center w="100vw">
        <Center
          flexDir={'column'}
          w="100%"
          maxW={'450px'}
          fontSize={'14px'}
          color={'whiteAlpha.800'}
          gap="10px"
          paddingX={'24px'}
          pb={'10%'}
        >
          <Center w="100%" paddingTop={'25px'} pb={'12px'}>
            <Image src={logo} w="88px" h={'27px'} />
          </Center>

          <Center
            w="100%"
            fontWeight={'700'}
            gap="10px"
            cursor={'pointer'}
            color={'black'}
            fontSize={'24px'}
          >
            Sign up for free to start listening.
          </Center>

          <Center
            className="btn"
            w="100%"
            maxW={'312px'}
            bgColor="facebook.600"
            h="48px"
            fontWeight={'700'}
            borderRadius={'25px'}
            gap="10px"
            border={'1px solid #A5A5A5'}
            cursor={'pointer'}
            color={'white'}
          >
            <Icon w="20px" h="20px" as={BsFacebook}></Icon>
            Sign up with Facebook
          </Center>

          <Center
            className="btn"
            w="100%"
            maxW={'312px'}
            bgColor={'white'}
            h="48px"
            fontWeight={'700'}
            borderRadius={'25px'}
            gap="10px"
            border={'3px solid #535353'}
            cursor={'pointer'}
            color="#535353"
          >
            <Icon w="20px" h="20px" as={FcGoogle}></Icon>
            Sign up with Google
          </Center>

          <Center
            w="100%"
            maxW={'312px'}
            h="48px"
            color={'#7F7F7F'}
            gap={'12px'}
            fontWeight={'500'}
          >
            <Center w="100%">
              <Box h="1px" w="100%" bgColor={'#D9DADC'}></Box>
            </Center>
            or
            <Center w="100%">
              <Box h="1px" w="100%" bgColor={'#D9DADC'}></Box>
            </Center>
          </Center>

          <Flex w="100%" gap={'20px'} flexDir={'column'} color={'black'}>
            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}> What's your email?</Box>
              <Input
                // onChange={e => formik.setFieldValue('email', e.target.value)}
                onChange={inputHandler}
                id="email"
                placeholder="Enter your email."
              ></Input>
              <Flex
                color={'red'}
                gap="5px"
                display={formik.errors.email ? 'flex' : 'none'}
              >
                <Center>
                  <Icon as={TbAlertCircleFilled} w="16px" h="16px" />
                </Center>
                {formik.errors.email}
              </Flex>
              <Box color={'#117A37'} textDecor={'underline'} cursor={'pointer'}>
                Use phone number instead.
              </Box>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}> Confirm your email</Box>
              <Input
                onChange={inputHandler}
                id="email2"
                placeholder="Enter your email again."
              ></Input>
              <Flex
                color={'red'}
                gap="5px"
                display={formik.errors.email2 ? 'flex' : 'none'}
              >
                <Center>
                  <Icon as={TbAlertCircleFilled} w="16px" h="16px" />
                </Center>
                {formik.errors.email2}
              </Flex>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Create Password</Box>

              <InputGroup>
                <Input
                  onChange={inputHandler}
                  id="password"
                  placeholder="Create a password."
                  type={seePassword ? 'text' : 'password'}
                ></Input>
                <InputRightElement paddingTop={'18px'} paddingEnd={'10px'}>
                  <Icon
                    as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                    color={'#A5A5A5'}
                    w="24px"
                    h="24px"
                    cursor={'pointer'}
                    onClick={() => setSeePassword(!seePassword)}
                  ></Icon>
                </InputRightElement>
              </InputGroup>
              <Flex
                color={'red'}
                gap="5px"
                display={formik.errors.password ? 'flex' : 'none'}
              >
                <Center>
                  <Icon as={TbAlertCircleFilled} w="16px" h="16px" />
                </Center>
                {formik.errors.password}
              </Flex>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}> What should we call you?</Box>
              <Input
                onChange={inputHandler}
                id="name"
                placeholder="Enter a profile name."
              ></Input>
              <Flex
                color={'red'}
                gap="5px"
                display={formik.errors.name ? 'flex' : 'none'}
              >
                <Center>
                  <Icon as={TbAlertCircleFilled} w="16px" h="16px" />
                </Center>
                {formik.errors.name}
              </Flex>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}> What's your date of birth?</Box>

              <Flex justifyContent={'space-between'} gap={'20px'}>
                <Input
                  maxW={'80px'}
                  w="100%"
                  onChange={inputHandler}
                  id="day"
                  gap={'10px'}
                  placeholder="DD"
                  maxLength={2}
                ></Input>

                <Select
                  typeof="text"
                  onChange={inputHandler}
                  placeholder="Month"
                  id="month"
                  color={'#718096'}
                  w={'100%'}
                  bgColor={'#ffffff'}
                  gap={'10px'}
                >
                  {month.map(val => (
                    <option value={val.number}> {val.name} </option>
                  ))}
                </Select>
                <Input
                  maxW={'80px'}
                  w="100%"
                  onChange={inputHandler}
                  id="year"
                  placeholder="YYYY"
                ></Input>
              </Flex>
            </Flex>

            <Flex
              color={'red'}
              gap="5px"
              display={formik.errors.day ? 'flex' : 'none'}
            >
              <Center>
                <Icon as={TbAlertCircleFilled} w="16px" h="16px" />
              </Center>
              {formik.errors.day}
            </Flex>
            <Flex
              color={'red'}
              gap="5px"
              display={formik.errors.year ? 'flex' : 'none'}
            >
              <Center>
                <Icon as={TbAlertCircleFilled} w="16px" h="16px" />
              </Center>
              {formik.errors.year}
            </Flex>
            <Flex
              color={'red'}
              gap="5px"
              display={formik.errors.month ? 'flex' : 'none'}
            >
              <Center>
                <Icon as={TbAlertCircleFilled} w="16px" h="16px" />
              </Center>
              {formik.errors.month}
            </Flex>

            <RadioGroup defaultValue="Male" id="gender">
              <Flex flexDir={'column'} gap={'5px'}>
                <Box fontWeight={'700'}> What's your gender?</Box>
                <Flex
                  w={'100%'}
                  flexWrap={'wrap'}
                  rowGap={'10px'}
                  columnGap={'20px'}
                >
                  <Radio colorScheme="green" value="Male">
                    Male
                  </Radio>
                  <Radio colorScheme="green" value="Female">
                    Female
                  </Radio>
                  <Radio colorScheme="green" value="Non-binary">
                    Non-binary
                  </Radio>
                  <Radio colorScheme="green" value="Other">
                    Other
                  </Radio>
                  <Radio colorScheme="green" value="Prefer not to say">
                    Prefer not to say
                  </Radio>
                </Flex>
              </Flex>
            </RadioGroup>

            <Flex
              pt={'10px'}
              pb={'10px'}
              h="40px"
              fontSize={'14px'}
              alignItems={'flex-start'}
            >
              <Checkbox>
                <Box h="100%" paddingX={'12px'}>
                  I would prefer not to receive marketing messages from Spotify
                </Box>
              </Checkbox>
            </Flex>
            <Flex
              pt={'10px'}
              pb={'10px'}
              h="40px"
              fontSize={'14px'}
              alignItems={'flex-start'}
            >
              <Checkbox>
                <Box h="100%" paddingX={'12px'}>
                  Share my registration data with Spotify's content providers
                  for marketing purposes.
                </Box>
              </Checkbox>
            </Flex>

            <Center flexDir={'column'} gap={'10px'}>
              <Center fontSize={'11px'} gap={'11px'}>
                By clicking on sign-up, you agree to Spotify's
                <Flex color="green" textDecor={'underline'} cursor={'pointer'}>
                  Terms and Conditions of Use.
                </Flex>
              </Center>
              <Center fontSize={'11px'} gap={'5px'}>
                By clicking on sign-up, you agree to the
                <Flex color="green" textDecor={'underline'} cursor={'pointer'}>
                  Spotify Privacy Policy.
                </Flex>
              </Center>
            </Center>

            <Center>
              <Center
                className="btn"
                borderRadius={'25px'}
                fontWeight={'700'}
                fontSize={'18px'}
                bgColor={'#1ED760'}
                color={'white'}
                h={'48px'}
                w={'158px'}
                cursor={'pointer'}
                onClick={formik.handleSubmit}
              >
                Sign up
              </Center>
            </Center>

            <Center w="100%" gap={'4px'}>
              Have an account?
              <Link to={'/login'}>
                <Flex color={'green'} textDecor={'undeline'}>
                  Log in
                </Flex>
              </Link>
            </Center>
          </Flex>
        </Center>
      </Center>
    </>
  );
}
