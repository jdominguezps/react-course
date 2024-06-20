import { React, useContext } from 'react';
import { ShopingCartContext } from '../../Context';
import { NavLink } from 'react-router-dom';
import { TotalItems } from '../../Utils/TotalItems';
import { IconShopingCart } from '../../Icons/IconShopingCart';

const menufont = 'font-semibold text-md';

const Navbar = () => {
    const context = useContext(ShopingCartContext);
    const activeStyle = 'underline underline-offset-4';
    const openCheckoutSideMenu = ( ) => {
        context.closeProductDetail();
        context.openCheckoutSideMenu();
    };

    return (
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-bold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li className={menufont}>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory('')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>|</li>
                <li className={menufont}>
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>|</li>
                <li className={menufont}>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>|</li>
                <li className={menufont}>
                    <NavLink
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>|</li>
                <li className={menufont}>
                    <NavLink
                        to='/toys'
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>|</li>
                <li className={menufont}>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60 font-bold'>
                    jcdomin@platzi.com
                </li>
                <li>
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <div className='flex justify-between items-center gap-1 cursor-pointer' onClick={() => openCheckoutSideMenu()}>
                        <IconShopingCart colorfill={context.colorfill}/><TotalItems />
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
