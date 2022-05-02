import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadProps {
  label?: string;
}
const Head: React.FC<HeadProps> = ({ label }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{label ? `${label} | 체크머니` : '체크머니'}</title>
    </Helmet>
  );
};

export default Head;
