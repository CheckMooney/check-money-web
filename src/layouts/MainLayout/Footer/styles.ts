import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--color--bg-secondary);
`;

export const FooterTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterBottomContainer = styled.div`
  padding: 2rem 0;
  color: var(--color--text-third);
`;

export const FooterLeftContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 4rem;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const SocialLink = styled.a`
  margin-right: 0.5rem;
  color: var(--color--text-third);

  &:hover {
    color: var(--color--text-secondary);
  }
`;

export const FooterRightContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;
