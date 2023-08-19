// module_jwt.js

import getter from '@/js/getter.js'

const root = true

////////////////////////////////////////////////////////////////////////////////

const ScopeSession = "sessionStorage"
const ScopeLocal = "localStorage"


function normalizeScope(scope) {
    if (scope == ScopeSession || scope == ScopeLocal) {
        return scope
    }
    return ScopeSession
}

function saveScope(scope) {
    scope = normalizeScope(scope)
    window[ScopeLocal].jwtscope = scope
}

function loadScope() {
    let scope = window[ScopeLocal].jwtscope
    return normalizeScope(scope)
}

////////////////////////////////////////////////////////////////////////////////

const state = {
    jwt: "",
    scope: "", // ScopeSession|ScopeLocal
    tokens: []
}

const getters = {

    jwt(state) {
        return state.jwt;
    },

    scope(state) {
        return state.scope
    },

    token0(state) {
        return getter.Get('tokens.0', state, {})
    },

}

const mutations = {

    setJWT(state, p) {
        let scope = normalizeScope(state.scope)
        let jwt = p.jwt;
        state.jwt = jwt;
        window[scope].jwt = jwt
    },

    init(state, { scope }) {
        let scope2 = normalizeScope(scope)
        if (scope == scope2) {
            saveScope(scope)
        } else {
            scope = loadScope()
        }
        let jwt = window[scope].jwt
        state.jwt = jwt
        state.scope = scope
    },

    handleTokenResponse(state, vo) {
        state.tokens = vo.tokens
    },

}

const actions = {

    fetch(context) {
        let method = "GET"
        let type = "tokens"
        let id = "current"
        let p = { method, type, id }
        context.dispatch('rest/execute', p, { root }).then((resp) => {
            context.commit('handleTokenResponse', resp.data)
        }).catch(() => { })
    },

    renew(context) {
        let method = "POST"
        let type = "tokens"
        let id = "renew"
        let data = {}
        let p = { method, type, id, data }
        context.dispatch('rest/execute', p, { root }).then((resp) => {
            context.commit('handleTokenResponse', resp.data)
        }).catch(() => { })
    },

}

export default {
    name: "module_jwt",
    namespaced: true,
    actions, getters, mutations, state,
}
