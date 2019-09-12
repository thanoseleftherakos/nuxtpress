const fetchMenu = () => {

}

export const state = () => ({
    menus: {}
})

export const actions = {
    async nuxtServerInit ({ commit, state }, { app }) {
        let res = await app.$wordpressApi.getMenu('primary', app.i18n.locale)
        commit('setPrimaryMenu', res)
    },
    async setMenus(context) {
        let res = await this.app.$wordpressApi.getMenu('primary', this.app.i18n.locale)
        context.commit('setPrimaryMenu', res)
    }
}

export const getters = () => ({
    
})

export const mutations = {
    setPrimaryMenu(state, data){
        state.menus.primary = data;
    }
}

