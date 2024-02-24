import React, { useEffect, useState } from 'react';
import { fetchUsers } from 'services/api';
import { UserList } from 'components/UserList/UserList';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import {
  LoadMoreButton,
  UsersListWrapper,
} from 'components/UserList/UserList.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [cardsOnPage, setCardsOnPage] = useState(3);

  useEffect(() => {
    if (users?.length) {
      return;
    }
    const getUsers = async () => {
      const listusers = await fetchUsers();
      setUsers(listusers);
    };
    getUsers();
  }, [users]);

  const handleLoadMore = () => {
    setCardsOnPage(prevState => prevState + 3);
  };
  return (
    <UsersListWrapper>
      <ButtonBack />
      <UserList users={users} cardsOnPage={cardsOnPage} />
      <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
    </UsersListWrapper>
  );
};

export default Tweets;
