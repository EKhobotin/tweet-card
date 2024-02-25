import React, { useEffect, useState } from 'react';
import { fetchUsers } from 'services/api';
import { UserList } from 'components/UserList/UserList';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import {
  LoadMoreButton,
  UsersListWrapper,
} from 'components/UserList/UserList.styled';
import { Loader } from 'components/Loader/Loader';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [cardsOnPage, setCardsOnPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (users?.length) {
      return;
    }

    const getUsers = async () => {
      try {
        setLoading(true);
        const listusers = await fetchUsers();
        setUsers(listusers);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, [users]);

  const handleLoadMore = () => {
    setCardsOnPage(prevState => prevState + 3);
  };
  return (
    <UsersListWrapper>
      <ButtonBack />
      {loading ? (
        <Loader />
      ) : (
        <UserList users={users} cardsOnPage={cardsOnPage} />
      )}
      {cardsOnPage < users.length ? (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      ) : null}
    </UsersListWrapper>
  );
};

export default Tweets;
