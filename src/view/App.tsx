import React, { VFC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Container from "./layouts/Container";
import CustomThemeProvider from "../utils/provider/themeProvider";

const App: VFC = () => {
  return (
    <CustomThemeProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={TopPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </CustomThemeProvider>
  );
};

export default App;
