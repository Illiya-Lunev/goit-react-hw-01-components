// Компонент профиля
import Profile from './componets/SocialProfile/Profile';
import user from './componets/SocialProfile/user.json';
// Компонент статистики
import Statistics from './componets/Statisctick/Statistics';
import statisticalData from './componets/Statisctick/statistical-data.json';
// Компонент друзей
import Friends from './componets/Friends/Friends';
import friendsData from './componets/Friends/Friends-data.json';
// Компонент Транзакций
import transactions from './componets/Transaction/transactions.json';
import TransactionHistory from './componets/Transaction/TransactionHistory';

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
      <Friends friends={friendsData} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
