import React, { ReactNode } from 'react';

type ContainerType = {
  children: ReactNode
}
const Container = ({children}: ContainerType ) => {
  return (
    <div className='w-full max-w-6xl  mx-auto h-auto rounded-md shadow-lg'>
      {children}
    </div>
  );
};

export default Container;