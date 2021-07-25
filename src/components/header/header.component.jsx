import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

//import { ReactComponent as Logo } from '../../assets/crwn.svg';


import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <i class="fab fa-battle-net fa-5x"></i>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        STOCK
      </Link>
      <Link className='option' to='/shop'>
        ABOUT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          EXIT
        </div>
      ) : (
        <Link className='option' to='/signin'>
            BUY
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);