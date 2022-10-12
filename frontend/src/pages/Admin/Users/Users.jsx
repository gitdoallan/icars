import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Link } from 'react-router-dom';
import { listAllUsers } from 'api';
import { ListAllUsersCard } from 'components/Cards';
import { StatusMessages } from 'components/StatusMessages';

export function Users() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState({ status: false });
  useEffect(() => {
    listAllUsers()
      .then((response) => setUsers(response))
      .catch((error) => setStatus({ status: true, message: error.message, type: 'error' }));
  }, []);

  return (
    <>
      <Header />
      <h1>Users</h1>
      <StatusMessages {...status} />
      <Link to="/admin/user/new">Create new user</Link>
      {' '}
      {users.map((user) => (
        <ListAllUsersCard key={user.id} {...user} />
      ))}
      <Footer />
    </>
  );
}
