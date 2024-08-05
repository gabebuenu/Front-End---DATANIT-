import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoggedIn: false,
    isAdmin: false
  },
  mutations: {
    SET_LOGIN(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    SET_ADMIN(state, isAdmin) {
      state.isAdmin = isAdmin;
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        if (username === 'datanit@gmail.com' && password === 'data123') {
          commit('SET_LOGIN', true);
          commit('SET_ADMIN', true);
          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('isAdmin', true);
          resolve();
        } else if (username === 'user' && password === 'password') {
          commit('SET_LOGIN', true);
          commit('SET_ADMIN', false);
          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('isAdmin', false);
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      });
    },
    checkAuth({ commit }) {
      const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
      const isAdmin = localStorage.getItem('isAdmin') === 'true';

      commit('SET_LOGIN', isAuthenticated);
      commit('SET_ADMIN', isAdmin);
    },
    logout({ commit }) {
      commit('SET_LOGIN', false);
      commit('SET_ADMIN', false);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('isAdmin');
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    isAdmin: state => state.isAdmin
  }
});

export default store;
