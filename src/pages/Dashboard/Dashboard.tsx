import { Typography } from "../../components";
import "./Dashboard.styles.css";
import { ContentWithTitle, SideBar, TopBar } from "./parts";

export const Dashboard = () => (
  <main className="dashboard">
    <TopBar />
    <SideBar />
    <div className="dashboard__content">
      <ContentWithTitle title="Today">
        <Typography>Dashboard 1</Typography>
      </ContentWithTitle>
      <ContentWithTitle title="Reports overview">
        <Typography>Dashboard 2</Typography>
      </ContentWithTitle>
    </div>
  </main>
);
