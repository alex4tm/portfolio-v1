import './ChangeTheme.css';


const changeThemeLight = () => {

    document.documentElement.style.setProperty('--primary', 'yellow')

        console.log("hi-Light")
  //   let darkThemeEnabled = document.documentElement.style.setProperty('--primary', 'yellow');
  //   localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
  // if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {

  //   document.documentElement.style.setProperty('--primary', 'yellow')
  // };
}

export default changeThemeLight;

