import React from 'react';

export function MyExampleComponent(props: {
  name: string
}) {
  return (
    <div className='p-4 bg-white'>
      <p className='text-black'>{props.name}</p>
    </div>
  )
}
