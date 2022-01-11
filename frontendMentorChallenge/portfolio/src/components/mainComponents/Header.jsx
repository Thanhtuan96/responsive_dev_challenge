import NavBar from '../smallComponents/NavBar';
import elipse from '../../design/ellipse.svg';
import avatar from '../../design/avatar.png';

const HeroImage = () => {
    return (
        <div className='w-full h-screen hero-img'>
            <div className='portfolio-content'></div>
            <div className='avatar-container relative h-full w-full'>
                <img
                    src={elipse}
                    className='ellipse absolute w-7/12 h-7/12  bottom-20 right-1'
                    alt='ellipse'
                />
                <img
                    src={avatar}
                    className='avatar absolute w-7/12 h-7/12 bottom-0 right-1'
                    alt='avatar'
                />
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <NavBar />
            <HeroImage />
        </div>
    );
};

export default Header;
