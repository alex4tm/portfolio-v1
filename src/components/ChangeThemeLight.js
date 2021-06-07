import './ChangeTheme.css';


const changeThemeLight = () => {

    document.documentElement.style.setProperty('--background', '#f3f5d4')
    document.documentElement.style.setProperty('--primary', '#f3f4d5')
    document.documentElement.style.setProperty('--secondary', '#121212de')
    document.documentElement.style.setProperty('--hover', '#555555')

  //   let darkThemeEnabled = document.documentElement.style.setProperty('--primary', 'yellow');
  //   localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
  // if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {

  //   document.documentElement.style.setProperty('--primary', 'yellow')
  // };
}

export default changeThemeLight;

