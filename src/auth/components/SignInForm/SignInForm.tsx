import React from 'react';
import './SignInForm.styles.scss'

interface IProps {
  children?: React.ReactNode;
  onSubmit?: (value: any) => void;
}
const SignInForm: React.FC<IProps> = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {children}
  </form> 
);

export default SignInForm;