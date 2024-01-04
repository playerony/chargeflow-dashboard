import searchIcon from "/search.svg";
import notificationsIcon from "/notifications.svg";
import helpIcon from "/help.svg";
import accountIcon from "/account.svg";
import "./TopBar.styles.css";

export const TopBar = () => (
  <div className="dashboard-topbar">
    <div className="dashboard-topbar__input-wrapper">
      <img src={searchIcon} alt="Search" className="dashboard-topbar__input__icon" />
      <input placeholder="Search..." className="dashboard-topbar__input" />
    </div>
    <div className="dashboard-topbar__info-hub">
      <img src={notificationsIcon} alt="Notifications" className="dashboard-topbar__info-hub__icon" />
      <img src={helpIcon} alt="Help" className="dashboard-topbar__info-hub__icon" />
      <img src={accountIcon} alt="Account" className="dashboard-topbar__info-hub__icon" />
    </div>
  </div>
);
