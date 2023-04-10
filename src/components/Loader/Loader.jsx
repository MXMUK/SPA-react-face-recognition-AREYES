import React from 'react';

export const Loader = () => {
  return (
    <div className="justify-center items-center flex absolute bottom-0 left-0 right-0 h-full">
      <img
        src={require('../../assets/icon/loadIcon.svg').default}
        alt="loading"
        className="animate-spin"
      />
    </div>
  );
};
