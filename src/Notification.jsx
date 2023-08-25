import { useState } from 'react';

function Notification(props) {
  const {
    status,
    avatar,
    key,
    username,
    action,
    post,
    group,
    time,
    message,
    picture,
  } = props;

  const notificationClass = status ? 'notification' : 'notification unread';
  const postLink = post ? (
    <a href="#" className="notification__post">
      {post}{' '}
    </a>
  ) : null;
  const groupLink = group ? (
    <a href="#" className="notification__group">
      {group}
    </a>
  ) : null;
  const statusIcon = !status ? (
    <div className="notification__icon"></div>
  ) : null;
  const messageContent = message ? (
    <div className="notification__message">{message}</div>
  ) : (
    ''
  );
  const mediaAction = picture ? (
    <div className="notification__media">
      <img src={picture} />
    </div>
  ) : null;

  const [isRead, setIsRead] = useState(status);

  function updateState() {}

  return (
    <div key={key} className={notificationClass}>
      <div className="notification__avatar">
        <img src={`avatar/${avatar}`} alt="" />
      </div>
      <div className="notification__data">
        <div className="notification__row">
          <a href="#" className="notification__username">
            {username}
          </a>
          <div className="notification__action">{action}</div>
          {postLink}
          {groupLink}
          {statusIcon}
        </div>
        <div className="notification__time">{time}</div>
        {messageContent}
      </div>
      {mediaAction}
    </div>
  );
}

export default Notification;
