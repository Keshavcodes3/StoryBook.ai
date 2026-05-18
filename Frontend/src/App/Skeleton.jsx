import React from 'react';
import styled from 'styled-components';

const Loader = () => {
    return (
        <StyledWrapper>
            <div className="loader">
                <svg id="pegtopone" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                    <defs>
                        <filter id="shine">
                            <feGaussianBlur stdDeviation={3} />
                        </filter>
                        <mask id="mask">
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="white" />
                        </mask>
                        <radialGradient id="gradient-1" cx={50} cy={66} fx={50} fy={66} r={30} gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="black" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="black" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="black" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="gradient-2" cx={55} cy={20} fx={55} fy={20} r={30} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="white" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="gradient-3" cx={85} cy={50} fx={85} fy={50} xlinkHref="#gradient-2" />
                        <radialGradient id="gradient-4" cx={50} cy={58} fx={50} fy={58} r={60} gradientTransform="translate(0 47) scale(1 0.2)" xlinkHref="#gradient-3" />
                        <linearGradient id="gradient-5" x1={50} y1={90} x2={50} y2={10} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="black" stopOpacity="0.2" />
                            <stop offset="40%" stopColor="black" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <g>
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-1)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#shine)" mask="url(#mask)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-2)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-3)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-4)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-5)" />
                    </g>
                </svg>
                <svg id="pegtoptwo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                    <defs>
                        <filter id="shine">
                            <feGaussianBlur stdDeviation={3} />
                        </filter>
                        <mask id="mask">
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="white" />
                        </mask>
                        <radialGradient id="gradient-1" cx={50} cy={66} fx={50} fy={66} r={30} gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="black" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="black" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="black" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="gradient-2" cx={55} cy={20} fx={55} fy={20} r={30} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="white" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="gradient-3" cx={85} cy={50} fx={85} fy={50} xlinkHref="#gradient-2" />
                        <radialGradient id="gradient-4" cx={50} cy={58} fx={50} fy={58} r={60} gradientTransform="translate(0 47) scale(1 0.2)" xlinkHref="#gradient-3" />
                        <linearGradient id="gradient-5" x1={50} y1={90} x2={50} y2={10} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="black" stopOpacity="0.2" />
                            <stop offset="40%" stopColor="black" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <g>
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-1)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#shine)" mask="url(#mask)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-2)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-3)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-4)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-5)" />
                    </g>
                </svg>
                <svg id="pegtopthree" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                    <defs>
                        <filter id="shine">
                            <feGaussianBlur stdDeviation={3} />
                        </filter>
                        <mask id="mask">
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="white" />
                        </mask>
                        <radialGradient id="gradient-1" cx={50} cy={66} fx={50} fy={66} r={30} gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="black" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="black" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="black" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="gradient-2" cx={55} cy={20} fx={55} fy={20} r={30} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="white" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="gradient-3" cx={85} cy={50} fx={85} fy={50} xlinkHref="#gradient-2" />
                        <radialGradient id="gradient-4" cx={50} cy={58} fx={50} fy={58} r={60} gradientTransform="translate(0 47) scale(1 0.2)" xlinkHref="#gradient-3" />
                        <linearGradient id="gradient-5" x1={50} y1={90} x2={50} y2={10} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="black" stopOpacity="0.2" />
                            <stop offset="40%" stopColor="black" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <g>
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-1)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#shine)" mask="url(#mask)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-2)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-3)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-4)" />
                        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-5)" />
                    </g>
                </svg>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .loader {
    --fill-color: #5c3d99;
    --shine-color: #5c3d9933;
    transform: scale(0.5); /* You can change the size */
    width: 100px;
    height: auto;
    position: relative;
    filter: drop-shadow(0 0 10px var(--shine-color));
  }

  .loader #pegtopone {
    position: absolute;
    animation: flowe-one 1s linear infinite;
  }

  .loader #pegtoptwo {
    position: absolute;
    opacity: 0;
    transform: scale(0) translateY(-200px) translateX(-100px);
    animation: flowe-two 1s linear infinite;
    animation-delay: 0.3s;
  }

  .loader #pegtopthree {
    position: absolute;
    opacity: 0;
    transform: scale(0) translateY(-200px) translateX(100px);
    animation: flowe-three 1s linear infinite;
    animation-delay: 0.6s;
  }

  .loader svg g path:first-child {
    fill: var(--fill-color);
  }

  @keyframes flowe-one {
    0% {
      transform: scale(0.5) translateY(-200px);
      opacity: 0;
    }
    25% {
      transform: scale(0.75) translateY(-100px);
      opacity: 1;
    }
    50% {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
    75% {
      transform: scale(0.5) translateY(50px);
      opacity: 1;
    }
    100% {
      transform: scale(0) translateY(100px);
      opacity: 0;
    }
  }

  @keyframes flowe-two {
    0% {
      transform: scale(0.5) rotateZ(-10deg) translateY(-200px) translateX(-100px);
      opacity: 0;
    }
    25% {
      transform: scale(1) rotateZ(-5deg) translateY(-100px) translateX(-50px);
      opacity: 1;
    }
    50% {
      transform: scale(1) rotateZ(0deg) translateY(0px) translateX(-25px);
      opacity: 1;
    }
    75% {
      transform: scale(0.5) rotateZ(5deg) translateY(50px) translateX(0px);
      opacity: 1;
    }
    100% {
      transform: scale(0) rotateZ(10deg) translateY(100px) translateX(25px);
      opacity: 0;
    }
  }

  @keyframes flowe-three {
    0% {
      transform: scale(0.5) rotateZ(10deg) translateY(-200px) translateX(100px);
      opacity: 0;
    }
    25% {
      transform: scale(1) rotateZ(5deg) translateY(-100px) translateX(50px);
      opacity: 1;
    }
    50% {
      transform: scale(1) rotateZ(0deg) translateY(0px) translateX(25px);
      opacity: 1;
    }
    75% {
      transform: scale(0.5) rotateZ(-5deg) translateY(50px) translateX(0px);
      opacity: 1;
    }
    100% {
      transform: scale(0) rotateZ(-10deg) translateY(100px) translateX(-25px);
      opacity: 0;
    }
  }`;

export default Loader;
