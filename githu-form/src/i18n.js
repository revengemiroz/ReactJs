import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationIN from './locales/hindi.json';
import translationEN from './locales/english.json';
import translationRM from './locales/romanian.json';
import translationNP from './locales/nepali.json';
// the translations
const resources = {
    en: {
        translation: translationEN
    },
    in: {
        translation: translationIN
    },
    rm: {
        translation: translationRM
    },
    np: {
        translation: translationNP
    }
};

i18n
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;