import './ChangeTheme.css';

const changeThemeDark = () => {

    document.documentElement.style.setProperty('--background', '#121212')
    document.documentElement.style.setProperty('--primary', '#353535')
    document.documentElement.style.setProperty('--secondary', '#d1acde')
    document.documentElement.style.setProperty('--hover', '#a27cafe8')
  //   let darkThemeEnabled = document.documentElement.style.setProperty('--primary', 'black');
  //   localStorage.setItem('dark-theme-enabled', darkThemeEnabled);

  // if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {

  //   document.documentElement.style.setProperty('--primary', 'red')
  // };
}

export default changeThemeDark;
