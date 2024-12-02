import './style.css'
import Logo from '../../assets/image/Logo1.jpeg';

export default function Header1() {
    return (
        <div className="HeaderContainer">
            <div className='LogoContainer'>
                <img src={Logo} alt="icone da Logo" />
                <p>BuyFlow</p>
            </div>
        </div>
    )
}