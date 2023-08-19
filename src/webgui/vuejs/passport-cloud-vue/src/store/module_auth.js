// module_log.js

const use_root = { root: true }


const state = {
}

const getters = {
}

const mutations = {
}

const actions = {

    loginWithPassword(context, p) {

        let account = p.account
        let secret = p.password
        let mechanism = "password"

        let method = 'POST'
        let type = 'auth'
        let id = null;
        let data = {
            auth: {
                mechanism, secret, account
            }
        }

        return context.dispatch('rest/execute', {
            method, type, id, data
        }, use_root)
    }

}

export default {
    name: "module_log",
    namespaced: true,
    actions, getters, mutations, state,
}
