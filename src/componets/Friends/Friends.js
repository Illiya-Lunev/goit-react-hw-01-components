import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';
import s from './friends.module.css';

export default function Friends({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};
