import './ChangeTheme.css';


const changeThemeLight = () => {

    document.documentElement.style.setProperty('--color-background-main', '243, 245, 212')
    document.documentElement.style.setProperty('--color-background-second', '243, 244, 213')
    document.documentElement.style.setProperty('--color-main-700', '18, 18, 18')
    document.documentElement.style.setProperty('--hover', '85, 85, 85')

  //   let darkThemeEnabled = document.documentElement.style.setProperty('--color-background-second', 'yellow');
  //   localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
  // if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {

  //   document.documentElement.style.setProperty('--color-background-second', 'yellow')
  // };
}

export default changeThemeLight;

