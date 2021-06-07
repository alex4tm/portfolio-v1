import './ChangeTheme.css';

const changeThemeDark = () => {

    document.documentElement.style.setProperty('--background', '18, 18, 18')
    document.documentElement.style.setProperty('--primary', '53, 53, 53')
    document.documentElement.style.setProperty('--secondary', '187, 133, 248')
    document.documentElement.style.setProperty('--hover', '219, 177, 250')
  //   let darkThemeEnabled = document.documentElement.style.setProperty('--primary', 'black');
  //   localStorage.setItem('dark-theme-enabled', darkThemeEnabled);

  // if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {

  //   document.documentElement.style.setProperty('--primary', 'red')
  // };
}

export default changeThemeDark;

