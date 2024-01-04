import { Typography } from "../../components";
import "./Dashboard.styles.css";
import { TopBar } from "./parts";

export const Dashboard = () => (
  <main className="dashboard">
    <TopBar />
    <div className="dashboard__sidebar">
      <Typography>Sidebar</Typography>
    </div>
    <div className="dashboard__content">
      <Typography>Content</Typography>
    </div>
  </main>
);
