import { NavLink} from 'react-router-dom';
import './header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { useRef, useState } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';

function Header(){
    const ref = useRef();
    useOutsideClick(ref, () => {
      setMenu(false);
    });
    const [menu,setMenu] = useState(false);
    const openMenu = () =>{
        setMenu(!menu);
    }
   
    return(
        <header>
             <div className="logo">
                <NavLink to={'/'} activeclassname="active"><img src="/images/elvehavn_1.jpg" alt="avatar" /></NavLink>
                <p>Thomas N. Jensen</p>
            </div>
            <nav className='navigation' ref={ref}>
                <MenuIcon className='menu-button' onClick={openMenu} />
                <div className={menu ? "nav-menu expanded" : "nav-menu"} >
                    { menu ? <ul>
                        <li onClick={openMenu}><NavLink to={'/'} activeclassname="active">Home</NavLink></li>
                        <li onClick={openMenu}><NavLink to={'projects'} activeclassname="active">Projects</NavLink></li>
                        <li onClick={openMenu}><NavLink to={'about'} activeclassname="active">About</NavLink></li>
                        <li onClick={openMenu}><NavLink to={'contact'} activeclassname="active">Contact</NavLink></li>
                    </ul> : 
                    <ul>
                    <li><NavLink to={'/'} activeclassname="active">Home</NavLink></li>
                    <li><NavLink to={'projects'} activeclassname="active">Projects</NavLink></li>
                    <li><NavLink to={'about'} activeclassname="active">About</NavLink></li>
                    <li><NavLink to={'contact'} activeclassname="active">Contact</NavLink></li>
                </ul>}
                </div>
            </nav>
        </header>
        
    )
}
export default Header;