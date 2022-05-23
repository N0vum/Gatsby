import React from 'react';
import { Link } from 'gatsby';
import FooterStyles from '../styles/FooterStyles';

const Footer = () => (
  <FooterStyles>
    <div className="wrapperForm">
      <legend>
        <span className="formAction">Subscrib</span> to new post notifications
      </legend>
    </div>
    <div className="WrapperMain">
      <Link to="/"> Travel Blog </Link>
      &copy;{new Date().getFullYear()}{' '}
    </div>
  </FooterStyles>
);

export default Footer;
