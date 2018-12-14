import React from 'react';

export default function Loading() {
  return (
    <svg className='refresh-icon' width='12' height='12' viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 0 0"
        to="360 0 0"
        dur="1s"
        repeatCount="indefinite" />
      <path fill='#333' d='M960 447.008q-11.008-152.992-120-261.504t-260.992-120.512q-16-0.992-27.488 9.504t-11.488 26.496q0 14.016 9.504 24.512t23.488 11.488q55.008 4 107.008 26.016 60.992 26.016 108.992 73.504t74.016 109.504q22.016 51.008 26.016 106.016 0.992 14.016 11.488 23.488t24.512 9.504q15.008 0 26.016-11.008 11.008-12 8.992-27.008z'
      />
    </svg>
  )
}
