
const changeThemeDark = () => {

    document.documentElement.style.setProperty('--color-background-main', '18, 18, 18'); // #121212
    document.documentElement.style.setProperty('--color-background-second', '25, 25, 40'); // #191928
    document.documentElement.style.setProperty('--color-background-third', '30, 30, 60'); // #1E1E3C
    document.documentElement.style.setProperty('--color-main-700', '213, 174, 255'); // #D5AEFF
    document.documentElement.style.setProperty('--color-main-500', '213, 174, 235'); // #D5AEEB
    document.documentElement.style.setProperty('--color-main-300', '213, 174, 210'); // #D5AED2
    document.documentElement.style.setProperty('--color-primary', '255, 174, 216'); // #FFAED8  // complementary tetraidic with color-main-700

  //   let darkThemeEnabled = document.documentElement.style.setProperty('--color-background-second', 'black');
  //   localStorage.setItem('dark-theme-enabled', darkThemeEnabled);

  // if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {

  //   document.documentElement.style.setProperty('--color-background-second', 'red')
  // };
}

export default changeThemeDark;

