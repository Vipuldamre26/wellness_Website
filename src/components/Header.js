import './header.css';

const Header = () => {
    return(
        <div className='main'>
            <h1 className='heading'>Family Wellness</h1>
            <span>MASSAGE THERAPY</span>
            <ul>
                    <li className='navItem li1'>HOME</li>
                    <li className='navItem'>ABOUT</li>
                    <li className='navItem'>SERVICES</li>
                    <li className='navItem'>FAQ</li>
                    <li className='navItem'>CONTACT</li>
            </ul>
            <img src="./public/hero-img.png" alt=""></img>
        </div>
    );
}


export default Header;