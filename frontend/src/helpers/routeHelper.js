export const getRegisterUser = () => {
    let user;

    try {
        user = JSON.parse(localStorage.getItem('user'));
    } catch (e) {
        console.log(e);
    }

    if (!user?.id) {
        localStorage.removeItem(user);
        delete localStorage.jwt;
    }

    return user;
};

export const getUserToken = () => {
    return localStorage.getItem('jwt');
};

export const getByNameParam = (name, route, type = 'string') => {
    let item = type === 'string' ? '' : null;

    if (route.params[name]) {
        if (type === 'string') {
            item = route.params[name];
        } else {
            item = Number.parseInt(route.params[name], 10);
        }
    } else if (route.query[name]) {
        if (type === 'string') {
            item = route.query[name];
        } else {
            item = Number.parseInt(route.query[name], 10);
        }
    }

    return item;
};
