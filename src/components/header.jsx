import './header.css';

function Header(){
    return(
        <div className='page-header'>
            
            <ul>
            <p>LA LA MOBILES</p>
            <li><a>Contact us</a></li>                
                <li>About us</li>                
                <li>Categories</li>
                <li><a href='./body.jsx/.home'>Home</a></li>
            </ul>
        </div>
    );
}
export default Header;