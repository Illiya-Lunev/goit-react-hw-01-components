import Profile from './componets/SocialProfile/Profile';
import user from './componets/SocialProfile/user.json';

export default function App() {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      likes={user.stats.likes}
      views={user.stats.views}
    />
  );
}
