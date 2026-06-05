import './style.css'
import { renderDashboard } from "./dashboard";
import { renderLogin } from "./login";
import { renderUserDashboard } from './user';

const routes = {
    "/": renderLogin,
    "/dashboard": renderDashboard,
    "/user": renderUserDashboard
}

const location = window.location.pathname

export function renderPage(path) {
    const userString = localStorage.getItem("user");

    if (!userString) {
        window.history.pushState({}, "", "/");
        routes["/"]();
        return;
    }

    const user = JSON.parse(userString);
    const isAdmin = user.role === 'admin';

    if (isAdmin) {
        const targetPath = (path === "/" || path === "/user") ? "/dashboard" : path;
        window.history.pushState({}, "", targetPath);
        routes[targetPath]();
    } else {
        window.history.pushState({}, "", "/user");
        routes["/user"]();
    }
}

renderPage(location);
