import './ChangeTheme.css';

const changeThemeDark = () => {

    document.documentElement.style.setProperty('--primary', 'red')
    document.documentElement.style.setProperty('--secondary', 'darkblue')
  //   let darkThemeEnabled = document.documentElement.style.setProperty('--primary', 'black');
  //   localStorage.setItem('dark-theme-enabled', darkThemeEnabled);

  // if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {

  //   document.documentElement.style.setProperty('--primary', 'red')
  // };
}

export default changeThemeDark;
