import { Typography } from "../../components";
import "./Dashboard.styles.css";
import { SideBar, TopBar } from "./parts";

export const Dashboard = () => (
  <main className="dashboard">
    <TopBar />
    <SideBar />
    <div className="dashboard__content">
      <Typography>Content</Typography>
    </div>
  </main>
);
