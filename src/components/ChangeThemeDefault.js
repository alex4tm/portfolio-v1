

const changeThemeDefault = () => {

    document.documentElement.style.setProperty
    ('--color-background-main', '248, 248, 210'); /*#F8F8D2*/
    document.documentElement.style.setProperty
    ('--color-background-second', '248, 248, 185'); /*#F8F8B9*/
    document.documentElement.style.setProperty
    ('--color-background-third', '248, 248, 155'); /*#F8F89B*/
    document.documentElement.style.setProperty
    ('--color-main-700', '9, 8, 57'); /*#090839*/
    document.documentElement.style.setProperty
    ('--color-main-500', '9, 8, 77'); /*#09084D*/
    document.documentElement.style.setProperty
    ('--color-main-300', '9, 8, 107'); /*#09086B*/
    document.documentElement.style.setProperty
    ('--color-primary', '122, 2, 77'); /*#7A024D*/

    localStorage.setItem('theme', 'default');
}

export default changeThemeDefault;

