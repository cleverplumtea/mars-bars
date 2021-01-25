import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import MarsInfo from "./components/MarsInfo";
import Images from "./components/Images";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/marsinfo" component={MarsInfo} />
          <Route exact path="/marsphotos" component={Images} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
