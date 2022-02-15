import Converge from "./Converge";
import Portfolio from "./Portfolio";


export const PortfolioRoutes = [
  { path: "/portfolio", name: "Portfolio", component: Portfolio, exact: true },
  { path: "/portfolio/convergei", name: "Converge", component: Converge },
];