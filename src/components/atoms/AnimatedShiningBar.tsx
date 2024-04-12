import styled from 'styled-components';

export const AnimatedShiningBar = styled.div`
  margin: 10px auto;
  width: 100%;
  height: 2px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  opacity: 1;
  animation: shine 12s infinite ease-in-out;

  @keyframes shine {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    25% {
      opacity: 1;
      transform: scale(1);
    }
    75% {
      opacity: 1;
      transform: scale(1.2);
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;
