// module_session.js

import getter from '@/js/getter.js'


const root = true

const state = {
    authorized: false,
    avatar: "",
    nickname: "",
    username: "",
    uid: "",
    roles: "",
}

const getters = {

    authorized(state) { return state.authorized },

    avatar(state) { return state.avatar },

    nickname(state) { return state.nickname },

    roles(state) { return state.roles },

    username(state) { return state.username },

    uid(state) { return state.uid },

}

const mutations = {

    handleFetchResponse(state, vo) {
        let session = getter.Get("sessions.0", vo, {});
        state.authorized = getter.Get("authorized", session, false)
        state.avatar = getter.Get("user.avatar", session, "")
        state.nickname = getter.Get("user.nickname", session, "")
        state.roles = getter.Get("user.roles", session, "")
        state.username = getter.Get("user.name", session, "")
        state.uid = getter.Get("user.id", session, 0)
    }

}

const actions = {

    fetch(context) {
        let method = "GET"
        let type = "sessions"
        let id = "current"
        let p = { method, type, id }
        return context.dispatch("rest/execute", p, { root }).then((resp) => {
            context.commit("handleFetchResponse", resp.data)
            return Promise.resolve(resp)
        })
    }

}

export default {
    name: "module_session",
    namespaced: true,
    actions, getters, mutations, state,
}
