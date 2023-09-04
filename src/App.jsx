import { useState } from 'react';

import './App.css';

import Header from './Header';
import NotificationsList from './NotificationsList';

function App() {
  const DATA = [
    {
      id: 7,
      avatar: 'avatar-mark-webber.webp',
      username: 'Mark Webber',
      action: 'reacted to your recent post',
      post: 'My first tournament today!',
      status: false,
      time: '1m ago',
    },
    {
      id: 6,
      avatar: 'avatar-angela-gray.webp',
      username: 'Angela Gray',
      action: 'followed you',
      status: false,
      time: '5m ago',
    },
    {
      id: 5,
      avatar: 'avatar-jacob-thompson.webp',
      username: 'Jacob Thompson',
      action: 'has joined your group',
      group: 'Chess Club',
      status: false,
      time: '1 day ago',
    },
    {
      id: 4,
      avatar: 'avatar-rizky-hasanuddin.webp',
      username: 'Rizky Hasanuddin',
      action: 'sent you a private message',
      status: true,
      time: '5 days ago',
      message:
        'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
    },
    {
      id: 3,
      avatar: 'avatar-kimberly-smith.webp',
      username: 'Kimberly Smith',
      action: 'commented on your picture',
      status: true,
      time: '1 week ago',
      picture: 'image-chess.webp',
    },
    {
      id: 2,
      avatar: 'avatar-nathan-peterson.webp',
      username: 'Nathan Peterson',
      action: 'reacted to your recent post',
      post: '5 end-game strategies to increase your win rate',
      status: true,
      time: '2 weeks ago',
    },
    {
      id: 1,
      avatar: 'avatar-anna-kim.webp',
      username: 'Anna Kim',
      action: 'left the group',
      group: 'Chess Club',
      status: true,
      time: '2 weeks ago',
    },
  ];

  const [notifications, setNotifications] = useState(DATA);

  function clearNotificationsHandler() {
    const clearedNotifications = notifications.map((notification) => ({
      ...notification,
      status: true,
    }));

    setNotifications(clearedNotifications);
  }

  const unreadNotifications = notifications.filter(
    (notification) => notification.status === false
  );

  return (
    <main className="container">
      <Header
        onClearNotifications={clearNotificationsHandler}
        unread={unreadNotifications}
      />
      <NotificationsList data={notifications} />
    </main>
  );
}

export default App;
