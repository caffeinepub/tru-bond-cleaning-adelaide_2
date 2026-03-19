import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BathroomCleaningPage from "./pages/services/BathroomCleaningPage";
import BondCleaningPage from "./pages/services/BondCleaningPage";
import CarpetCleaningPage from "./pages/services/CarpetCleaningPage";
import OvenCleaningPage from "./pages/services/OvenCleaningPage";
import WindowCleaningPage from "./pages/services/WindowCleaningPage";
import SuburbPage from "./pages/suburbs/SuburbPage";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});
const bondCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/bond-cleaning",
  component: BondCleaningPage,
});
const carpetCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/carpet-cleaning",
  component: CarpetCleaningPage,
});
const ovenCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/oven-cleaning",
  component: OvenCleaningPage,
});
const windowCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/window-cleaning",
  component: WindowCleaningPage,
});
const bathroomCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/bathroom-cleaning",
  component: BathroomCleaningPage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

// Suburb routes
const norwoodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/norwood",
  component: SuburbPage,
});
const glenelgRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/glenelg",
  component: SuburbPage,
});
const unleyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/unley",
  component: SuburbPage,
});
const prospectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/prospect",
  component: SuburbPage,
});
const mawsonLakesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/mawson-lakes",
  component: SuburbPage,
});
const marionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/marion",
  component: SuburbPage,
});
const teaTreeGullyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/tea-tree-gully",
  component: SuburbPage,
});
const mitchamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/mitcham",
  component: SuburbPage,
});
const burnsideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/burnside",
  component: SuburbPage,
});
const portAdelaideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/port-adelaide",
  component: SuburbPage,
});
const elizabethRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/elizabeth",
  component: SuburbPage,
});
const salisburyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/salisbury",
  component: SuburbPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  bondCleaningRoute,
  carpetCleaningRoute,
  ovenCleaningRoute,
  windowCleaningRoute,
  bathroomCleaningRoute,
  aboutRoute,
  contactRoute,
  norwoodRoute,
  glenelgRoute,
  unleyRoute,
  prospectRoute,
  mawsonLakesRoute,
  marionRoute,
  teaTreeGullyRoute,
  mitchamRoute,
  burnsideRoute,
  portAdelaideRoute,
  elizabethRoute,
  salisburyRoute,
]);
