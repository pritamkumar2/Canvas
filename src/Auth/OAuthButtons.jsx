// OAuthButtons.js
import React from 'react';

const OAuthButtons = () => {
  return (
    <ul className="buttons">
      <li>
        <a className="button button--full" href="#">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <use xlinkHref="#icon-google" />
          </svg>
        </a>
      </li>
      <li>
        <a className="button button--full" href="#">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <use xlinkHref="#icon-apple" />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default OAuthButtons;
