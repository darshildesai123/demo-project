import Stack from 'react-bootstrap/Stack';
import { styled } from 'styled-components';

function HorizontalMarginStartExample() {
  return (
    <Div>

    <Stack direction="horizontal" gap={3}>
      <div className="p-2"><a href=''>Home</a></div>
      <div className="p-2">About Us</div>
      <div className="p-2 ms-auto">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
    </Div>
  );
}


const Div = styled.div`
    border: 1px solid red;
`
export default HorizontalMarginStartExample;