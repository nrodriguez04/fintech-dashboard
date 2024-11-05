import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '../redux/store';

const Dashboard = () => {
  const router = useRouter();
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!token) {
      router.push('/');
    }
  }, [token, router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your banking dashboard!</p>
    </div>
  );
};

export default Dashboard;
