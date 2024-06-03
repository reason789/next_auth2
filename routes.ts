/**
 * An array of routes that are accessible to the public
 * Thses routes do not requore authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification"
]

/**
 * An array of routes that are used for authentication
 * Thses routes wll redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
]

/**
 * The prefix for API authetication routes
 * api authentication purpose hehe
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";