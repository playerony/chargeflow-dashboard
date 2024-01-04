import clsx from "clsx";
import { ReactNode } from "react";
import { Typography } from "../../../../components";
import "./ChartCard.styles.css";

interface ChartCardProps {
  title: ReactNode;
  actionButton: ReactNode;
  price: string;
  cost?: string;
  chart?: ReactNode;
  chartFullWidth?: boolean;
  className?: string;
  currency?: "€" | "$" | "";
  fullWidth?: boolean;
}

/* I'm not good and naming :( */
export const ChartCard = ({
  title,
  actionButton,
  cost,
  price,
  chart,
  currency = "",
  className,
  fullWidth,
  chartFullWidth,
}: ChartCardProps) => (
  <div className={clsx("dashboard-chart-card", { "dashboard-chart-card--full-width": fullWidth }, className)}>
    <div className="dashboard-chart-card__header">
      <Typography className="dashboard-chart-card__title">{title}</Typography>
      <Typography className="dashboard-chart-card__action-button">{actionButton}</Typography>
    </div>
    <div className="dashboard-chart-card__details">
      <Typography as="h2" className="dashboard-chart-card__price">
        {currency}
        {price}
      </Typography>
      {cost ? (
        <Typography as="p" className="dashboard-chart-card__cost">
          {currency}
          {cost}
        </Typography>
      ) : null}
    </div>
    {chart ? (
      <Typography
        size="xs"
        className={clsx("dashboard-chart-card__chart", { "dashboard-chart-card__chart--full-width": chartFullWidth })}
      >
        {chart}
      </Typography>
    ) : null}
  </div>
);
