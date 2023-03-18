import Profile from './Profile/Profile';
import user from '../confings/user.json';

import Statistics from './Statistics/Statistics';
import data from '../confings/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../confings/friends.json';

import TransactionHistory from './TransactionHistory/TransationHistory';
import transactions from '../confings/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;  
    </>
  );
};


