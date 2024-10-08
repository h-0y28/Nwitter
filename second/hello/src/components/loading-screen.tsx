import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;
const Text = styled.span`
  font-size: 24px;
`;

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Text>loading...</Text>
    </Wrapper>
  );
}
