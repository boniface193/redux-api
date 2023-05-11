import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store/users/userSlice';
import { useEffect } from 'react'

const FetchUsers = () => {
  const dispatch = useDispatch()
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser())
  }, []);

  return (
    <>
      <span>{isLoading ? "Loading..." : ""}</span>
      <span>{error ? "new content" : ""}</span>
      <ul>
        {users.map((items) => <li key={items.dob.date}>{items.name.first} {items.name.last}</li>)}
      </ul>
    </>
  )
};

export default FetchUsers;
