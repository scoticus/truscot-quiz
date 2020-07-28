import styled from '@emotion/styled';

export const Container = styled.section`
  margin-top: 50px;
  max-width: 500px;
  width: 96%;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 50px;
  text-align: center;

  .thanks {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 20px;
    color: var(--saltire-blue);
  }
  h1 {
    font-weight: 300;
    font-size: 15px;
    color: var(--dark-text);

    span {
      font-weight: 600;
    }
  }
  .message {
    margin-bottom: 40px;
    font-size: 22px;
    color: var(--standard-text);
  }

  .links {
    margin: auto;
    max-width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    border: 1px solid var(--saltire-blue);
    border-radius: 6px;
    padding: 6px 16px;
    text-decoration: none;
    font-size: 14px;
    color: var(--saltire-blue);
    transition: 0.1s all;

    &:first-child {
      margin-bottom: 20px;
    }

    &:hover {
      background-color: var(--saltire-blue);
      color: white;
    }
  }

  .twitter {
    border-color: transparent;
    background-color: var(--twitter-blue);
    color: white;

    &:hover {
      border-color: var(--twitter-blue);
      background-color: white;
      color: var(--twitter-blue);
    }
  }
`;

export const IncorrectSummary = styled.section`
  margin: 30px 0;
  max-width: 600px;
  width: 96%;

  h2 {
    text-align: center;
    font-weight: 300;
    font-size: 18px;
  }

  > div {
    margin-top: 30px;
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(180px, 200px));
  }

  .card {
    margin: 8px;
    max-width: 200px;
    min-height: 220px;
    box-shadow: 0 3px 6px rgba(0, 94, 184, 0.3);
    border-radius: 6px;
    border: 2px solid var(--saltire-blue);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px 15px;

    h3 {
      height: 50%;
      font-weight: 400;
      font-size: 16px;
      color: var(--dark-text);
    }
    p {
      font-size: 14px;
      color: var(--dark-text);
    }
    p:last-child {
      margin-bottom: 0;
    }
    .meta {
      display: block;
      font-size: 12px;
      color: var(--lightest-text);
    }
  }
`;
