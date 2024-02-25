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
import { useState } from 'react';
import { loadFromLS, saveToLS } from 'services/localStorage';

export const User = ({ user, tweets, followers, avatar, id }) => {
  const [following, setfollowing] = useState(
    loadFromLS('FOLLOWERS').includes(id) || false
  );

  const formatNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleFollowButton = () => {
    setfollowing(!following);
    const followers = loadFromLS('FOLLOWERS');
    followers.includes(id)
      ? followers.splice(followers.indexOf(id), 1)
      : followers.push(id);
    saveToLS('FOLLOWERS', followers);
  };

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
        <li>{formatNumber(tweets * 999)} tweets</li>
        <li>
          {following
            ? formatNumber(followers * 555 + 1)
            : formatNumber(followers * 555)}{' '}
          followers
        </li>
      </InfoContainer>
      <UserBtn
        style={{ backgroundColor: following ? '#5CD3A8' : '#ebd8ff' }}
        onClick={handleFollowButton}
      >
        {following ? 'following' : 'follow'}
      </UserBtn>
    </UserContainer>
  );
};
