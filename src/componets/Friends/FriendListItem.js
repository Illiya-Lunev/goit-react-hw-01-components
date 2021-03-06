import PropTypes from 'prop-types';
import s from './friends.module.css';

export default function FriendsListItem({ id, isOnline, avatar, name }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.statusOn : s.statusOff}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
