import styled from '@emotion/styled';

export const Heading = styled.div`
  margin: 30px auto 0;
  max-width: 96%;
  width: 600px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
  color: var(--standard-text);

  .exit {
    position: absolute;
    top: 12px;
    right: 10px;
    font-size: 14px;
  }

  .info {
    padding-bottom: 6px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;

    h2 {
      margin: 0;
      font-weight: 300;
      font-size: 20px;
    }

    .timer {
      margin: 0;
      font-size: 13px;
    }
  }

  a {
    width: min-content;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 6px 16px;
    align-self: flex-end;
    text-decoration: none;
    font-size: 15px;
    color: #757575;
    transition: all 0.1s;

    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
      border-color: #dcdcdc;
      color: var(--saltire-blue);
    }
  }

  .hurry {
    color: var(--red);
  }
`;

export const QuestionContainer = styled.section`
  margin-top: 50px;
  max-width: 500px;
  width: 96%;

  h1 {
    font-weight: 400;
    font-size: 20px;
  }

  button {
    margin: 10px 0;
    height: 36px;
    width: 100%;
    border: 1px solid #005eb8;
    border-radius: 6px;
    font-size: 16px;
    transition: all 0.1s;

    &:hover:not(:disabled) {
      background-color: #005eb8;
      color: white;
      cursor: pointer;
    }
    &:disabled {
      border-color: rgba(0, 0, 0, 0.1);
    }
    &.correct {
      background: var(--green);
      color: white;
    }
    &.wrong {
      background: var(--red);
      color: white;
    }
  }

  .result {
    h2 {
      margin: 30px 0 10px;
      font-weight: 300;
      font-size: 18px;
    }
    p {
      margin-top: 0;
      font-size: 14px;
    }
  }
`;
