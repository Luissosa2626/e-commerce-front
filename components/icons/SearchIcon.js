import styled from 'styled-components';
const AnimatedSVG = styled.svg`
  /* Variant styles */
  &:hover {
    filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff)
      drop-shadow(0 0 20px #fff) drop-shadow(0 0 40px #0ff)
      drop-shadow(0 0 80px #0ff);
  }
  /* Transition properties */
  transition: color 0.3s ease, filter 0.3s ease;
`;
export default function SearchIcon({ className = 'w-6 h-6' }) {
  return (
    <AnimatedSVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3.5}
      stroke="#fffeff"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </AnimatedSVG>
  );
}
