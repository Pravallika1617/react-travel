import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import './button.css'
import Button from './button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    const showButton = () => {
        if(window.innerwidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        } 
    };

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-conntainer'>
                    <div className='navbar-logo'>
                        <Link to='/' onClick={closeMobileMenu}>TRVL<i className='fab fa-typo3'></i></Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>Sign Up</Link>
                            {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar;