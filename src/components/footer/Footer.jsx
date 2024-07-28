import { NavLink } from 'react-router-dom';
import './footer.scss';

function Footer(){
    let date = new Date().getFullYear();
    if(date > 2017){
        date = ` 2023 - `+ date;
    }else{
        date =  ` 2024`;
    }
    return(
        <footer className="footer">
            <div className="footer-content">
                <p>Copyright &copy; {date}</p>
                <div className="footer-social">
                    <NavLink to={"https://www.linkedin.com/in/tnjensen09/"}><i className="fa-brands fa-linkedin"></i></NavLink>
                    <NavLink to={"https://www.instagram.com/tnjensen09/"}><i className="fa-brands fa-instagram"></i></NavLink>
                </div>
            </div>
    </footer>
    )
}
export default Footer;