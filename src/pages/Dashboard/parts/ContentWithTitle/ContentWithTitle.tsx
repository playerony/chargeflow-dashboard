import clsx from "clsx";
import { ReactNode } from "react";
import { Typography } from "../../../../components";
import "./ContentWithTitle.styles.css";

interface ContentWithTitleProps {
  title: string;
  children: ReactNode;
  contentClassName?: string;
}

export const ContentWithTitle = ({ title, children, contentClassName }: ContentWithTitleProps) => (
  <section className="dashboard-content-with-title">
    <Typography as="h1" display="block">
      {title}
    </Typography>
    <div className={clsx("dashboard-content-with-title__content", contentClassName)}>{children}</div>
  </section>
);
