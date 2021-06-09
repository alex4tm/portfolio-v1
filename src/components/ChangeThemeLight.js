import './ChangeTheme.css';


const changeThemeLight = () => {

    document.documentElement.style.setProperty('--color-background-main', '248, 249, 250'); // #F8F9FA
    document.documentElement.style.setProperty('--color-background-second', '226, 227, 228'); // #E2E3E4
    document.documentElement.style.setProperty('--color-background-third', '206, 207, 208'); // #CECFD0
    document.documentElement.style.setProperty('--color-main-700', '18, 18, 18'); // #121212
    document.documentElement.style.setProperty('--color-main-500', '40, 40, 40'); // #282828
    document.documentElement.style.setProperty('--color-main-300', '60, 60, 60'); // #3C3C3C
    document.documentElement.style.setProperty('--color-primary', '166, 10, 13'); // #A00A0D

  //   let darkThemeEnabled = document.documentElement.style.setProperty('--color-background-second', 'yellow');
  //   localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
  // if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {

  //   document.documentElement.style.setProperty('--color-background-second', 'yellow')
  // };
}

export default changeThemeLight;

