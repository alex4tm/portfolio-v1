import './ChangeTheme.css';


const changeThemeLight = () => {

    document.documentElement.style.setProperty('--primary', '#fff')
    document.documentElement.style.setProperty('--secondary', '#ef3535ad')
    document.documentElement.style.setProperty('--hover', '#b87bbf')

  //   let darkThemeEnabled = document.documentElement.style.setProperty('--primary', 'yellow');
  //   localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
  // if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {

  //   document.documentElement.style.setProperty('--primary', 'yellow')
  // };
}

export default changeThemeLight;

