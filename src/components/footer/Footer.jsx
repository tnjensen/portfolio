import './footer.scss';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <p>Copyright &copy; <span id="year"></span></p>
                <div className="footer-social">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
    </footer>
    )
}
export default Footer;