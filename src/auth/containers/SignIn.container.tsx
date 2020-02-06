import React from "react";
import useForm from "react-hook-form";

import { TextInput, Button } from '@/common';
import SignInForm from '../components/SignInForm';



const SignInContainer = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <SignInForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Email"
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}

      <TextInput
        label="Password"
        name="password"
        type="password"
        ref={register({})}
      />
      {errors.password && errors.password.message}

      <Button height={60} type="submit">Submit</Button>
    </SignInForm>
  );
};
export default SignInContainer;