export const state = () => ({
    menus: {},
    news: []
})

export const actions = {
    async nuxtServerInit ({ commit, state }, { app }) {
        let res = await app.$wordpressApi.getMenu('primary', app.i18n.locale)
        commit('setPrimaryMenu', res)
    },
    async setMenus(ctx) {
        let res = await this.app.$wordpressApi.getMenu('primary', this.app.i18n.locale)
        ctx.commit('setPrimaryMenu', res)
    },
    async setNews(ctx, count) {
        let res = await this.app.$wordpressApi.getPosts(this.app.i18n.locale, count)
        console.log(res);
        ctx.commit('setNews', res)
    }
}

export const getters = () => ({
    
})

export const mutations = {
    setPrimaryMenu(state, data){
        state.menus.primary = data;
    },
    setNews(state, data){
        state.news = data;
    }
}

