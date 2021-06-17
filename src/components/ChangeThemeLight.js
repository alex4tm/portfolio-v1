

const changeThemeLight = () => {

    document.documentElement.style.setProperty
    ('--color-background-main', '248, 249, 250'); // #F8F9FA
    document.documentElement.style.setProperty
    ('--color-background-second', '226, 227, 228'); // #E2E3E4
    document.documentElement.style.setProperty
    ('--color-background-third', '206, 207, 208'); // #CECFD0
    document.documentElement.style.setProperty
    ('--color-main-700', '18, 18, 18'); // #121212
    document.documentElement.style.setProperty
    ('--color-main-500', '18, 18, 40'); // #282828
    document.documentElement.style.setProperty
    ('--color-main-300', '60, 60, 60'); // #3C3C3C
    document.documentElement.style.setProperty
    ('--color-primary', '125, 27, 100'); // #7D1B64

    localStorage.setItem('theme', 'light');
}

export default changeThemeLight;

