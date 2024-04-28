import styled from 'styled-components';
const BarsSVG = styled.svg`
  /* Variant styles */
  &:hover {
    filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff)
      drop-shadow(0 0 20px #fff) drop-shadow(0 0 40px #0ff)
      drop-shadow(0 0 80px #0ff);
  }
  /* Transition properties */
  transition: color 0.3s ease, filter 0.3s ease;
`;

export default function BarsIcon({ className = 'w-6 h-6' }) {
  return (
    <BarsSVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#fffeff"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </BarsSVG>
  );
}
