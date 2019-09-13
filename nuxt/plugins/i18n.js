
export default function ({ app, store }) {
    app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
        store.dispatch('setMenus');
        // store.dispatch('setInitialization');
    }
}