import styled from '@emotion/styled';

const github = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-github"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const twitter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-twitter"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const StyledFooter = styled.footer`
  border-top: 1px solid #dcdcdc;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: var(--dark-text);

  div,
  p {
    width: 33%;
  }
  p {
    text-align: center;
  }

  div:last-child {
    text-align: right;

    a {
      margin: 0 2px;
      color: var(--saltire-blue);
      text-decoration: none;
      padding: 4px;
      transition: color 0.1s;

      svg {
        stroke-width: 1.5;
        height: 20px;
      }

      &:hover {
        color: var(--dark-text);
      }
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;

    div,
    p {
      width: 100%;
    }

    div:last-child {
      text-align: center;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div />
      <p>This site was created by Scoticus.</p>
      <div>
        <a href="https://twitter.com/scoticus_">{twitter}</a>
        <a href="https://github.com/scoticus">{github}</a>
      </div>
    </StyledFooter>
  );
}
