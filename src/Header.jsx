function Header() {
  function unreadHandler() {
    console.log('unreadHandler');
  }

  return (
    <div className="notifications__header">
      <h2 className="notifications__heading">
        Notifications <span className="notifications__unread">3</span>
      </h2>
      <button className="btn" onClick={unreadHandler}>
        Mark all as read
      </button>
    </div>
  );
}

export default Header;
