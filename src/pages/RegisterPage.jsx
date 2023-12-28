import { Button, Card, CardBody, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signUpThunk } from 'store/auth/thunks';
import { Label } from './Page.styled';

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function submit(data) {
    dispatch(signUpThunk(data))
      .unwrap()
      .then(() => {
        return toast.success("You're logined!");
      })
      .catch(err => {
        toast.error(err);
      });
  }
  return (
    <>
      <Card maxW="md" mx="auto" p="6">
        <Heading size="md" textTransform="uppercase" textAlign="center">
          Sign Up
        </Heading>
        <CardBody>
          <form onSubmit={handleSubmit(submit)}>
            <Label htmlFor="name_reg">
              Name
              <Input
                placeholder="input name"
                mb="5"
                {...register('name')}
                type="text"
                name="name"
                id="name_reg"
                size="lg"
              />
            </Label>
            <Label htmlFor="email_reg">
              Email
              <Input
                placeholder="input email"
                mb="5"
                {...register('email')}
                type="text"
                name="email"
                id="email_reg"
                size="lg"
              />
            </Label>
            <Label htmlFor="pass_reg">
              Password
              <Input
                placeholder="input password"
                mb="5"
                marginBottom="15px"
                {...register('password')}
                type="text"
                name="password"
                id="pass_reg"
                size="lg"
              />
            </Label>
            <Button type="submit" colorScheme="blue" size="lg">
              Sign Up
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default RegisterPage;
