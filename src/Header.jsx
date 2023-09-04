function Header(props) {
  function unreadHandler() {
    props.onClearNotifications();
  }

  const unreadNumber = props.unread.length.toString();

  return (
    <div className="notifications__header">
      <h2 className="notifications__heading">
        Notifications{' '}
        <span className="notifications__unread">{unreadNumber}</span>
      </h2>
      <button className="btn" onClick={unreadHandler}>
        Mark all as read
      </button>
    </div>
  );
}

export default Header;
