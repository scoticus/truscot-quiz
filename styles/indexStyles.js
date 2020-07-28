import styled from '@emotion/styled';

export const Container = styled.section`
  margin: 40px 8px;
  max-width: 500px;
  width: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 20px 0;
    max-width: 98%;
    width: 400px;
  }

  h1 {
    margin-top: 40px;
    color: var(--saltire-blue);
  }

  p {
    margin: 0;
    max-width: 280px;
    text-align: center;
    line-height: 1.5;
    font-size: 14px;
    color: var(--dark-text);

    &.caledonia {
      margin-bottom: 12px;
      font-weight: 600;
    }
  }

  a {
    margin-top: 50px;
    width: 100%;
    box-shadow: 0 3px 12px rgba(0, 94, 184, 0.5);
    border-radius: 6px;
    background-color: var(--saltire-blue);
    padding: 8px 0;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: box-shadow 0.1s;

    &:hover {
      box-shadow: 0 6px 24px rgba(0, 94, 184, 0.8);
    }
  }
`;
