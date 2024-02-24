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

export const User = ({ user, tweets, followers, avatar, id }) => {
  return (
    <UserContainer>
      <UserLogo src={Logo} alt="card logo" />
      <UserPicture src={BgImg} alt="background card" />
      <Line />
      <AvatarContainer>
        <img src={avatar} alt="avatar" width="62" height="62" />
      </AvatarContainer>
      <InfoContainer>
        <li>{user}</li>
        <li>{tweets} tweets</li>
        <li>{followers} followers</li>
      </InfoContainer>
      <UserBtn>Following</UserBtn>
    </UserContainer>
  );
};
