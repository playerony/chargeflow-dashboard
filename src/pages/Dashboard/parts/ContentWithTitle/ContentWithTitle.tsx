import { ReactNode } from "react";
import { Typography } from "../../../../components";
import "./ContentWithTitle.styles.css";

interface ContentWithTitleProps {
  title: string;
  children: ReactNode;
}

export const ContentWithTitle = ({ title, children }: ContentWithTitleProps) => (
  <section className="dashboard-content-with-title">
    <Typography as="h1" display="block">
      {title}
    </Typography>
    <div className="dashboard-content-with-title__content">{children}</div>
  </section>
);
