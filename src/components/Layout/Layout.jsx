import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './Layout.styled';

export const Layout = () => {
    return (
        <>
        <Header>
        <Navigation />
        </Header>
        <main>
            <Outlet />
        </main>
        </>
    )
}