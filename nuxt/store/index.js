export const state = () => ({
    menus: {},
    news: [],
    initialization: 0,
})

export const actions = {
    async nuxtServerInit ({ commit, state }, { app }) {
        let res = await app.$wordpressApi.getMenu('primary', app.i18n.locale)
        let initialization = await app.$wordpressApi.getInitialization()
        commit('setPrimaryMenu', res)
        commit('setInitialization', initialization)
    },
    async setInitialization(ctx) {
        let initialization = await this.app.$wordpressApi.getInitialization()
        ctx.commit('setInitialization', initialization)
    },
    async setMenus(ctx) {
        let res = await this.app.$wordpressApi.getMenu('primary', this.app.i18n.locale)
        ctx.commit('setPrimaryMenu', res)
    },
}

export const getters = () => ({
    
})

export const mutations = {
    setPrimaryMenu(state, data){
        state.menus.primary = data;
    },
    setInitialization(state, data) {
        state.initialization = data;
    }
}

