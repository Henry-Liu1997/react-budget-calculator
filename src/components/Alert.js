import React from 'react';

import './Alert.css';

export default ({ type, text }) => {
  return (
    <div className={`alert alert-${type} container mx-auto`} role="alert">
      {text}
    </div>
  );
};
