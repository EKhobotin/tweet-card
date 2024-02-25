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
import { useEffect, useState } from 'react';

export const User = ({ user, tweets, followers, avatar, id }) => {
  //   const USERS = JSON.parse(localStorage.getItem('USERS'));
  //   const [{ follower }] = USERS.filter(user => user.id === id);

  const [following, setfollowing] = useState(
    JSON.parse(localStorage.getItem(`USER_${id}`)) || false
  );

  //   console.log(follower);
  //   useEffect(() => {
  //     localStorage.setItem(
  //       'USERS',
  //       JSON.stringify(
  //         USERS.map(user =>
  //           user.id !== id ? user : { id: user.id, follower: !user.follower }
  //         )
  //       )
  //     );
  //   }, [following, id]);

  useEffect(() => {
    localStorage.setItem(`USER_${id}`, JSON.stringify(following));
  }, [following, id]);

  const formatNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleFollowButton = () => {
    setfollowing(!following);
    // console.log('clickfollow');
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
        style={{ backgroundColor: following ? '#45b3e0' : '#ebd8ff' }}
        onClick={handleFollowButton}
      >
        {following ? 'following' : 'follow'}
      </UserBtn>
    </UserContainer>
  );
};
