import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './store/userSlice';
import UserTable from './components/UserTable';
import columns from './configColumns';
import { RootState, AppDispatch } from './store/store';

function App() {
  const { status, error } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') {
    return <h2 className='loading-message'>Loading...</h2>;
  }

  if (error) {
    return <h2 className='loading-message'>An error occurred: {error}</h2>;
  }

  return (
    <div className="wrapper">
      <UserTable columns={columns} />
    </div>
  );
}

export default App;
