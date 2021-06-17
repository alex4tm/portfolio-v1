import changeThemeDark from './ChangeThemeDark';
import changeThemeDefault from './ChangeThemeDefault';
import changeThemeLight from './ChangeThemeLight';

function checkTheme(){

switch (localStorage.getItem('theme')) {
  case "dark":
    changeThemeDark();
    break
  case "light":
    changeThemeLight();
    break;
    default:
    changeThemeDefault();
    break;
  }
};

export default checkTheme;
