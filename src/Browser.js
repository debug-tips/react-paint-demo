import React from 'react';

export default function Browser() {
  return (
    <svg width='480' height='50' viewBox='0 0 800 75' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'>
          <stop stopColor='#F2F2F2' offset='0%' />
          <stop stopColor='#F2F2F2' offset='100%' />
        </linearGradient>
      </defs>
      <g id='Page-the-first' fill='none' fillRule='evenodd'>
        <g id='Chrome' transform='translate(0 -3)'>
          <g transform='translate(0 3)' id='Group'>
            <g id='Header'>
              <path d='M0.5,37.5 L799.5,37.5 L799.5,4.00021828 C799.5,2.06722166 797.932997,0.500218283 796,0.500218283 L4,0.500218283 C2.06700338,0.500218283 0.5,2.06722166 0.5,4.00021828 L0.5,37.5 Z'
                id='Window-header' stroke='#CACACA' fill='#DEDEDE' />
              <circle id='Enlarge' stroke='#1CAC2B' fill='#2ACB42' cx='59' cy='20' r='5.5'
              />
              <circle id='Minimize' stroke='#DFA022' fill='#FEBF2F' cx='39' cy='20'
                r='5.5' />
              <circle id='Close' stroke='#E14640' fill='#FE6159' cx='19' cy='20' r='5.5'
              />
            </g>
            <g id='Tab-bar' transform='translate(0 9)'>
              <path d='M0.5,28.5 L0.5,65.5 L799.5,65.5 L799.5,28.5 L285.962518,28.5 L272.656645,0.5 L86.5929525,0.5 L73.2870791,28.5 L0.5,28.5 Z'
                id='Tab' stroke='#9C9C9C' fill='url(#linearGradient-1)' />
              <path d='M96,33.5 C94.6192881,33.5 93.5,34.6192881 93.5,36 L93.5,58 C93.5,59.3807119 94.6192881,60.5 96,60.5 L761,60.5 C762.380712,60.5 763.5,59.3807119 763.5,58 L763.5,36 C763.5,34.6192881 762.380712,33.5 761,33.5 L96,33.5 Z'
                id='URL-Bar' stroke='#B7B7B7' fill='#FFF' />
              <g id='More' transform='translate(780 41)' fill='#5A5A5A'>
                <circle id='Oval' cx='1' cy='1' r='1' />
                <circle id='Oval' cx='1' cy='6' r='1' />
                <circle id='Oval' cx='1' cy='11' r='1' />
              </g>
              <polygon id='Back' fill='#6D6D6D' fillRule='nonzero' points='26 46.125 15.35125 46.125 20.2425 41.23375 19 40 12 47 19 54 20.23375 52.76625 15.35125 47.875 26 47.875'
              />
              <polygon id='Forward' fill='#6D6D6D' fillRule='nonzero' opacity='0.2'
                transform='rotate(-180 47 47)' points='54 46.125 43.35125 46.125 48.2425 41.23375 47 40 40 47 47 54 48.23375 52.76625 43.35125 47.875 54 47.875'
              />
              <path d='M79.942464,42.05625 C78.6729206,40.7875 76.9305816,40 74.9956223,40 C71.1257036,40 68,43.1325 68,47 C68,50.8675 71.1257036,54 74.9956223,54 C78.2614134,54 80.9843652,51.76875 81.7636023,48.75 L79.942464,48.75 C79.2245153,50.78875 77.2808005,52.25 74.9956223,52.25 C72.097561,52.25 69.742339,49.89625 69.742339,47 C69.742339,44.10375 72.097561,41.75 74.9956223,41.75 C76.4490306,41.75 77.7448405,42.35375 78.6904315,43.3075 L75.8711695,46.125 L82,46.125 L82,40 L79.942464,42.05625 Z'
                id='Reload-icon' fill='#6D6D6D' fillRule='nonzero' />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
