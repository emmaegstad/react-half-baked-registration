import React from 'react';
import './Header.css';
import classNames from 'classnames';

export default function Header({ type, setType }) {
  return (
    <div className="Header">
      <span
        className={classNames({ active: type === 'signin' })}
        onClick={() => {
          setType('signin');
        }}
      >
        Sign-in
      </span>
      <span
        className={classNames({ active: type === 'signup' })}
        onClick={() => {
          setType('signup');
        }}
      >
        Sign-up
      </span>
    </div>
  );
}
