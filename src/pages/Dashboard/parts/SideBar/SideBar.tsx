import { useState } from "react";
import { Switch, Typography } from "../../../../components";
import "./SideBar.styles.css";
import storeIcon from "/store.svg";
import chevronIcon from "/chevron.svg";
import homeIcon from "/home.svg";
import payments from "/payments.svg";
import balances from "/balances.svg";
import customers from "/customers.svg";
import products from "/products.svg";
import reports from "/reports.svg";
import connectedAccounts from "/connected-accounts.svg";

export const SideBar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="dashboard-sidebar">
      <header className="dashboard-sidebar__header">
        <div className="dashboard-sidebar__store-icon">
          <img src={storeIcon} alt="store icon" />
        </div>
        <Typography as="h2">Store name</Typography>
        <img src={chevronIcon} alt="chevron icon" className="dashboard-sidebar__chevron-icon" />
      </header>
      <div className="dashboard-sidebar__content">
        <div className="dashboard-sidebar__content-group">
          <div className="dashboard-sidebar__content-item dashboard-sidebar__content-item--active">
            <img src={homeIcon} alt="home icon" />
            <Typography as="span">Home</Typography>
          </div>
        </div>
        <div className="dashboard-sidebar__content-group">
          <div className="dashboard-sidebar__content-item">
            <img src={payments} alt="payments icon" />
            <Typography as="span">Payments</Typography>
          </div>
          <div className="dashboard-sidebar__content-item">
            <img src={balances} alt="balances icon" />
            <Typography as="span">Balances</Typography>
          </div>
          <div className="dashboard-sidebar__content-item">
            <img src={customers} alt="customers icon" />
            <Typography as="span">Customers</Typography>
          </div>
          <div className="dashboard-sidebar__content-item">
            <img src={connectedAccounts} alt="connected accounts icon" />
            <Typography as="span">Connected accounts</Typography>
          </div>
          <div className="dashboard-sidebar__content-item">
            <img src={payments} alt="payments icon" />
            <Typography as="span">Payments</Typography>
          </div>
          <div className="dashboard-sidebar__content-item">
            <img src={products} alt="products icon" />
            <Typography as="span">Products</Typography>
          </div>
          <div className="dashboard-sidebar__content-item">
            <img src={reports} alt="reports icon" />
            <Typography as="span">Reports</Typography>
          </div>
        </div>
        <div className="dashboard-sidebar__content-group">
          <div className="dashboard-sidebar__content-item">
            <img src={payments} alt="payments icon" />
            <Typography as="span">Payments</Typography>
          </div>
          <div className="dashboard-sidebar__content-item">
            <Switch checked={checked} onChange={setChecked} />
            <Typography as="span">View test data</Typography>
          </div>
          <div className="dashboard-sidebar__content-item">
            <img src={reports} alt="reports icon" />
            <Typography as="span">Reports</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
