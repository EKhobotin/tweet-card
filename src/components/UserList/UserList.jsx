import { User } from 'components/User/User';
import { UsersList, UsersListContainer } from './UserList.styled';

export const UserList = ({ users, cardsOnPage }) => {
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
