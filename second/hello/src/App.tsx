import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import CreateAccount from './routes/create-account';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // styled-reset이 필요한 경우
import { useEffect, useState } from 'react';
import LoadingScreen from './components/loading-screen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // index: true, // 기본 라우트로 설정
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
${reset};  // styled-reset이 필요한 경우
*{
  box-sizing: border-box;
}
body{
  background-color: black;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    // wait for firebase
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
