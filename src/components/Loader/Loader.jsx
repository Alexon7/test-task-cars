
import { Puff } from 'react-loader-spinner'; 
import { LoaderContainer } from './Loader.styled';

const Loader = () => (
  <LoaderContainer>
    <Puff
      color="#3470ff"
      height={80}
      width={80}
    />
  </LoaderContainer>
);

export default Loader;