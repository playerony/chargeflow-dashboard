import { Typography } from "../../components";
import "./Dashboard.styles.css";
import { ChartCard, ContentWithTitle, SideBar, TopBar } from "./parts";

const DummyChart = () => <div className="dashboard__chart-placeholder" />;

export const Dashboard = () => (
  <main className="dashboard">
    <TopBar />
    <SideBar />
    <div className="dashboard__content">
      <ContentWithTitle title="Today" contentClassName="dashboard__today-report">
        <ChartCard
          className="dashboard__today-report__volume"
          currency="€"
          title="Total Revenue"
          actionButton={<div>View all</div>}
          price="1,452.25"
          cost="1,253.61"
          chart={<DummyChart />}
          chartFullWidth
        />
        <ChartCard
          fullWidth
          className="dashboard__today-report__balance-1"
          currency="€"
          title="Total Revenue"
          actionButton={<div>View</div>}
          price="1,452.25"
          chart="Estimated future payouts"
        />
        <ChartCard
          fullWidth
          className="dashboard__today-report__balance-2"
          currency="€"
          title="Total Revenue"
          actionButton={<div>View</div>}
          price="4,130.99"
          chart="Deposited on 8 Jun"
        />
      </ContentWithTitle>
      <ContentWithTitle title="Reports overview">
        <Typography>Dashboard 2</Typography>
      </ContentWithTitle>
    </div>
  </main>
);
