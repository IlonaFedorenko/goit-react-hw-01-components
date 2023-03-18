import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
      <ul className={css.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </ul>
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
export default FriendList;