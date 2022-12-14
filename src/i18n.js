import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

//options for languageDetector
const detectorOptions = {
  order: ["htmlTag", "localStorage", "sessionStorage"],
  caches: ["localStorage", "cookie"],

  // order: [
  //  "querystring",
  //  "cookie",
  //  "localStorage",
  //  "sessionStorage",
  //  "navigator",
  //  "htmlTag",
  //  "path",
  //  "subdomain",
  // ],
  // -----------------------------
  // keys or params to lookup language from
  // lookupQuerystring: "lng",
  // lookupCookie: "i18next",
  // lookupLocalStorage: "i18nextLng",
  // lookupSessionStorage: "i18nextLng",
  // lookupFromPathIndex: 0,
  // lookupFromSubdomainIndex: 0,
  // -----------------------------
  // cache user language on
  //caches: ["localStorage", "cookie"],
  //excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)
  // -----------------------------
  // optional expire and domain for set cookie
  //cookieMinutes: 10,
  //cookieDomain: "myDomain",
  // -----------------------------
  // optional htmlTag with lang attribute, the default is:
  //htmlTag: document.documentElement,
  // -----------------------------
  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  //cookieOptions: { path: "/", sameSite: "strict" },
};

//options for backend
const backendOptions = {
  loadPath: "/assets/locales/{{lng}}/{{ns}}.json",
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    lng: "fr",
    ns: "translation",
    supportedLngs: ["en", "ar", "fr"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: detectorOptions,
    backend: backendOptions,
    react: {
      useSuspense: false,
    },
    // debug: true,
    // resources: {}
  });
