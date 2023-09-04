import Notification from './Notification';

function NotificationsList({ data }) {
  return (
    <div className="notifications__list">
      {data.map((item) => (
        <Notification
          key={item.id}
          avatar={item.avatar}
          username={item.username}
          action={item.action}
          post={item.post}
          group={item.group}
          status={item.status}
          time={item.time}
          message={item.message}
          picture={item.picture}
        />
      ))}
    </div>
  );
}

export default NotificationsList;
