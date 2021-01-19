import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-cointainer' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {(() => {
                if (currentUser === undefined) {
                    return (<div className='option'><FontAwesomeIcon className='spinner' icon={faSpinner} /></div>)
                } else if (currentUser === null) {
                    return (<Link className='option' to='/sign'>SIGN IN</Link>)
                } else {
                    return (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                }
            })()}
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);