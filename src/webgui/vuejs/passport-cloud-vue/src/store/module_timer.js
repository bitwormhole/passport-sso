// module_timer.js


////////////////////////////////////////////////////////////////////////////////

function Timer(ctx) {
    this.context = ctx
    this.hasInit = false
}

Timer.prototype = {

    init() {
        if (this.hasInit) {
            return
        } else {
            this.hasInit = true
        }
        this.setTimer()
    },

    setTimer() {
        setTimeout(() => {
            this.setTimer()
        }, 1000)
        this.onTimer()
    },

    onTimer() {
        this.context.commit("update")
    },
}


////////////////////////////////////////////////////////////////////////////////

function TimerHolder() {
    this.timer = null;
}

TimerHolder.prototype = {
    getTimer(context) {
        let t = this.timer
        if (t == null) {
            t = new Timer(context)
            this.timer = t
        }
        return t
    }
}

const theTimer1hz = new TimerHolder()

////////////////////////////////////////////////////////////////////////////////

const state = {
    timestamp: 0,
    count: 0,
}

const getters = {

    count(state) {
        return state.count
    },

    timestamp(state) {
        return state.timestamp
    },

}

const mutations = {

    update(state) {
        let now = new Date()
        state.timestamp = now.getTime();
        state.count++
    }

}

const actions = {

    init(context) {
        let t = theTimer1hz.getTimer(context)
        t.init()
    }

}

export default {
    name: "module_timer",
    namespaced: true,
    actions, getters, mutations, state,
}
