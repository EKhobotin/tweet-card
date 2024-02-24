import { fetchUsers } from 'services/api';
import { useEffect, useState } from 'react';
import { User } from 'components/User/User';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [cardsOnPage, setCardsOnPage] = useState(6);

  useEffect(() => {
    if (users?.length) {
      return;
    }
    const getUsers = async () => {
      const listusers = await fetchUsers();
      setUsers(listusers);
    };
    getUsers();
    console.log(users);
  }, [users]);

  const handleLoadMore = () => {
    setCardsOnPage(prevState => prevState + 6);
  };

  return (
    <>
      <ul>
        {users.slice(0, cardsOnPage).map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
    </>
  );
};
