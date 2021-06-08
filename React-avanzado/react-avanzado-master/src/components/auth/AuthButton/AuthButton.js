
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../../shared';
import { logout } from '../../../api/auth';
import { getIsLogged } from '../../../store/selectors';
import { authLogout } from '../../../store/actions';


const AuthButton = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };

  const props = isLogged
    ? { onClick: handleLogoutClick, children: 'Log out' }
    : {
        as: Link,
        to: '/login',
        children: 'Log in',
      };

  return <Button className={className} {...props} />;
};


const mapStateToProps = (state, ownProps) => ({isLogged: getIsLogged(state)});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLogout: () => dispatch(authLogout),
});


export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
