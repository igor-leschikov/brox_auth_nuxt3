// https://v3.nuxtjs.org/api/configuration/nuxt.config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
    runtimeConfig: {
        cookieName: process.env.COOKIE_NAME || "__session",
        cookieSecret: process.env.COOKIE_SECRET || "secret",
        cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(), 10), // 1 day
        cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(), 10), // 7 days
    },
    app: {
        head: {
            link: [
                { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" },
            ],
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js",
                    type: "text/javascript",
                },
            ],
        },
    },
});
