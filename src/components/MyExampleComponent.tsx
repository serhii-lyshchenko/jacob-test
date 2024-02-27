import React from 'react';

export function MyExampleComponent(props: {
  name: string
}) {
  return (
    <div className='mt-4 p-4 bg-black'>
      <p className='text-white'>{props.name}</p>
    </div>
  )
}
