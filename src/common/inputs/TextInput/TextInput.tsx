import React from 'react';
import './TextInput.styles.scss';

interface IProps {
  type?: 'text' | 'password' | 'email';
  label?: string;
  value?: string;
  name?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const TextInput: React.FC<IProps> = React.forwardRef(({ type = 'text', name, value, label}, ref) => (
  <>
    {label && <label>{label}</label>}
    <input ref={ref} className="TextInput" name={name} type={type} value={value} />
  </>
));


export default TextInput;