import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { ContainerHeader, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <ContainerHeader>
          <Navigation />
        </ContainerHeader>
      </Header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
