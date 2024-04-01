'use client';

import React, { ChangeEvent } from 'react';
import styles from './Input.module.css';

interface TextInputProps {
  placeholder: string;
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  name,
  value,
  onChange,
  error,
  icon,
  className,
  type,
}) => (
  <div>
    {/* <span className="input-icon">{iconComponent}</span> */}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={` ${className} ${styles.input}`}
    />
    {/* {errorMessage} */}
  </div>
);

export default TextInput;