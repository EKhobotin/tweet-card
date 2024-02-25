import React, { useCallback, useEffect, useState } from 'react';
import { fetchUsers } from 'services/api';
import { UserList } from 'components/UserList/UserList';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import {
  LoadMoreButton,
  UsersListWrapper,
} from 'components/UserList/UserList.styled';
import { Loader } from 'components/Loader/Loader';
import { loadFromLS, saveToLS } from 'services/localStorage';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [cardsOnPage, setCardsOnPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, [users]);

  const checkFollowers = useCallback(() => {
    const followers = loadFromLS('FOLLOWERS');
    if (!followers) {
      saveToLS('FOLLOWERS', []);
    }
  }, []);

  useEffect(() => {
    checkFollowers();
  }, [checkFollowers]);

  const handleLoadMore = () => {
    setCardsOnPage(prevState => prevState + 3);
    checkFollowers();
  };
  return (
    <>
      {error ? (
        <h1>Something went wrong, try again later</h1>
      ) : (
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
      )}
    </>
  );
};

export default Tweets;
