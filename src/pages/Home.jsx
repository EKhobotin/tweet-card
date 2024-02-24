import homeImg from '../images/home-bg.png';
import { HomeSection, LinkImg, Img } from './Home.styled';

const Home = () => {
  return (
    <HomeSection>
      <LinkImg to="/tweets">
        <h1>Welcome to tweets!</h1>
        <Img src={homeImg} alt="follow me" width="550" />
      </LinkImg>
    </HomeSection>
  );
};

export default Home;
