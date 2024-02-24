import styled from '@emotion/styled';

export const UserContainer = styled.li`
  position: relative;
  display: flex;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  box-shadow: -3px 7px 21px 0 rgba(0, 0, 0, 0.23);
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
`;

export const UserLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const UserPicture = styled.img`
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Line = styled.div`
  width: 100%;
  height: 8px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ebd8ff;
  box-shadow: inset 0 3px 3px 0 #fbf8ff, 0 3px 3px 0 rgba(0, 0, 0, 0.06),
    inset 0 -2px 3px 0 #ae7be3;
`;

export const AvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ebd8ff;
  box-shadow: inset 0 4px 3px 0 #fbf8ff, 0 4px 4px 0 rgba(0, 0, 0, 0.06),
    inset 0 -2px 4px 0 #ae7be3;
  border-radius: 50%;
  > img {
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  > li {
    color: #ebd8ff;
    font-weight: 500;
    font-size: 20px;
    line-height: calc(24 / 20);
    text-transform: uppercase;
  }
`;

export const UserBtn = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 14px 56px;
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;

  color: #373737;
  background:  #45b3e0
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
  &:hover {
  }
`;
