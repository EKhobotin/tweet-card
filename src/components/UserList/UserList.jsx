import { User } from 'components/User/User';
import { UsersList, UsersListContainer } from './UserList.styled';

export const UserList = ({ users, cardsOnPage }) => {
  //   const USERS = JSON.parse(localStorage.getItem('USERS'));

  //   console.log(USERS);

  //   localStorage.setItem(
  //     'USERS',
  //     JSON.stringify(
  //       users.map(user => {
  //         return { id: user.id, follow: false };
  //       })
  //     )
  //   );
  return (
    <>
      <UsersListContainer>
        <UsersList>
          {users.slice(0, cardsOnPage).map(user => (
            <User key={user.id} {...user} />
          ))}
        </UsersList>
      </UsersListContainer>
    </>
  );
};
