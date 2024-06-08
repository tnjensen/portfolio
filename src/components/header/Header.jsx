import { Link, Navigate, useNavigate } from 'react-router-dom';
import './header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';

function Header(){
    const ref = useRef();
    const navigate = useNavigate();
    const partUrl = window.location.href.split("/").pop();
    useOutsideClick(ref, () => {
      setMenu(false);
    });
    const [menu,setMenu] = useState(false);
    const openMenu = () =>{
        setMenu(!menu);
    }
   
    console.log(menu);
    return(
        <header>
             <div className="logo">
                <Link to={'/'}><img src="/images/elvehavn_1.jpg" alt="avatar" /></Link>
                <p>Thomas N. Jensen</p>
            </div>
            <nav className='navigation' ref={ref}>
                <MenuIcon className='menu-button' onClick={openMenu} />
                <div className={menu ? "nav-menu expanded" : "nav-menu"} >
                    { menu ? <ul>
                        <li onClick={openMenu}><Link to={'/'}>Home</Link></li>
                        <li onClick={openMenu}><Link to={'projects'}>Projects</Link></li>
                        <li onClick={openMenu}><Link to={'about'}>About</Link></li>
                        <li onClick={openMenu}><Link to={'contact'}>Contact</Link></li>
                    </ul> : 
                    <ul>
                    <li className={partUrl === "" ? "active": ""}><Link to={'/'}>Home</Link></li>
                    <li className={partUrl === "projects" ? "active": ""}><Link to={'projects'}>Projects</Link></li>
                    <li className={partUrl === "about" ? "active": ""}><Link to={'about'}>About</Link></li>
                    <li className={partUrl === "contact" ? "active": ""}><Link to={'contact'}>Contact</Link></li>
                </ul>}
                </div>
            </nav>
        </header>
        
    )
}
export default Header;