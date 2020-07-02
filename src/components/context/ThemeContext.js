import React, { Component, createContext } from "react";
import localStorageMethods from "../../utils/localStorageMethods";

const THEME = {
  light: "light",
  dark: "dark",
};

const Context = createContext();

class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  state = {
    theme: THEME.light,
    isChecked: false,
  };

  componentDidMount() {
    const storedTheme = localStorageMethods.get("theme");

    if (storedTheme) {
      this.setState({
        theme: storedTheme,
        isChecked: storedTheme === THEME.light ? false : true,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { theme } = this.state;
    const prevTheme = prevState.theme;

    if (theme !== prevTheme) {
      localStorageMethods.save("theme", theme, prevState);
    }
  }

  toggle = () =>
    this.setState(({ isChecked, theme }) => ({
      isChecked: !isChecked,
      theme: theme === THEME.light ? THEME.dark : THEME.light,
    }));

  render() {
    return (
      <Context.Provider
        value={{
          isChecked: this.state.isChecked,
          theme: this.state.theme,
          onThemeToggle: this.toggle,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ThemeContext;
