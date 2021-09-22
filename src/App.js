// Компонент профиля
import Profile from './componets/SocialProfile/Profile';
import user from './componets/SocialProfile/user.json';
// Компонент Статистики
import Statistics from './componets/Statisctick/Statistics';
import statisticalData from './componets/Statisctick/statistical-data.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        likes={user.stats.likes}
        views={user.stats.views}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}
