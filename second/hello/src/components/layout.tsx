import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <h2>kayout</h2>
      // Outlet : 자식 라우트를 어디에 렌더링할지 결정하는 중요한 역할을 함
      <Outlet />
    </>
  );
}
