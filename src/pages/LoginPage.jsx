import { Button, Card, CardBody, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signInThunk } from 'store/auth/thunks';
import { Label } from './Page.styled';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function submit(data) {
    dispatch(signInThunk(data))
      .unwrap()
      .then(() => {
        return toast.success('You are logged in');
      })
      .catch(() => {
        return toast.error('Something went wrong!');
      });
  }

  return (
    <>
      <Card mx="auto" maxW="sm" p="6">
        <Heading size="md" textTransform="uppercase" textAlign="center">
          Sign In
        </Heading>
        <CardBody>
          <form onSubmit={handleSubmit(submit)}>
            <Label htmlFor="email_login">
              Email
              <Input
                placeholder="your email"
                mb="5"
                {...register('email')}
                type="email"
                name="email"
                id="email_login"
              />
            </Label>
            <Label htmlFor="pass_login">
              Password
              <Input
                placeholder="your password"
                mb="5"
                {...register('password')}
                type="password"
                name="password"
                id="pass_login"
              />
            </Label>
            <Button type="submit" colorScheme="blue" size="lg">
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default LoginPage;
