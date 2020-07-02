import React from "react";
// import { themeConfig } from "../context/ThemeContext";
import ThemeContext from "../components/context/ThemeContext";

const withThemeContext = (WrappedComponent) => {
  return function WithThemeContext(props) {
    return (
      <ThemeContext.Consumer>
        {(ctx) => <WrappedComponent {...props} themeData={ctx} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withThemeContext;
