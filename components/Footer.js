import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  border-top: 1px solid #dcdcdc;
  width: 100%;
  font-size: 13px;
  text-align: center;
  color: var(--dark-text);
  a {
    color: var(--saltire-blue);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        This site was created by{' '}
        <a href="https://twitter.com/scoticus_">Scoticus</a>.
      </p>
    </StyledFooter>
  );
}
