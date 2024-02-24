import Logo from '../../images/logo.png';
import BgImg from '../../images/background_image.png';
import {
  UserContainer,
  UserLogo,
  UserPicture,
  Line,
  AvatarContainer,
  InfoContainer,
  UserBtn,
} from './User.styled';

export const User = () => {
  return (
    <UserContainer>
      <UserLogo src={Logo} alt="card logo" />
      <UserPicture src={BgImg} alt="background card" />
      <Line />
      <AvatarContainer>
        <img src="" alt="user" width="62" height="62" />
      </AvatarContainer>
      <InfoContainer>
        <li>
          <p>User Name</p>
        </li>
        <li>10 tweets</li>
        <li>100500 Followers</li>
      </InfoContainer>
      <UserBtn>Following</UserBtn>
    </UserContainer>
  );
};
