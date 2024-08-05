<template>
  <div :class="['sidebar', { 'is-open': isOpen }]">
    <button class="toggle-button" @click="toggleSidebar">
      <i :class="isOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
    </button>
    <div class="logo-container">
      <i class="bi bi-code-slash"></i>
      <span>Data Nit</span>
    </div>
    <nav class="menu">
      <ul>
        <li v-if="isLoggedIn">
          <i class="bi bi-person"></i><span>{{ user ? user.username : 'Administrador' }}</span>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/login" @click.native="closeSidebar">
            <i class="bi bi-arrow-right-short"></i>Logar
          </router-link>
        </li>
        <li>
          <router-link to="/" @click.native="closeSidebar">
            <i class="bi bi-house"></i><span>Inicio</span>
          </router-link>
        </li>
        <li>
          <router-link to="/sobre" @click.native="closeSidebar">
            <i class="bi bi-info-circle"></i><span>Sobre</span>
          </router-link>
        </li>
        <li>
          <router-link to="/metodologia" @click.native="closeSidebar">
            <i class="bi bi-book"></i><span>Metodologia</span>
          </router-link>
        </li>
        <li>
          <router-link to="/lei" @click.native="closeSidebar">
            <i class="bi bi-file-text"></i><span>Lei</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" @click.native="closeSidebar">
            <i class="bi bi-list"></i><span>RankingFolha</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" @click.native="closeSidebar">
            <i class="bi bi-list"></i><span>Ranking</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="logout-container" v-if="isLoggedIn">
      <button @click="logout">
        <i class="bi bi-box-arrow-left"></i><span>Sair</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    ...mapState(['user', 'isLoggedIn']),
  },
  methods: {
    ...mapActions(['logout']),
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    closeSidebar() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  color: #000;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar.is-open {
  transform: translateX(0);
}

.toggle-button {
  position: absolute;
  top: 20px;
  right: -45px;
  background-color: transparent;
  border: none;
  color: #333;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1001;
}

.toggle-button:hover {
  background-color: rgba(211, 211, 211, 0.1);
}

.toggle-button i {
  font-size: 24px;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.logo-container i {
  font-size: 24px;
  margin-right: 10px;
}

.logo-container span {
  font-size: 20px;
  font-weight: bold;
}

.menu {
  width: 100%;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin: 20px 0;
  display: flex;
  align-items: center;
}

.menu li i {
  font-size: 20px;
  margin-right: 10px;
}

.menu li span {
  font-size: 16px;
}

.menu a {
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
}

.menu a:hover {
  color: #555;
}

button {
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
}

button:hover {
  color: #555;
}

.logout-container {
  width: 100%;
  padding: 20px 0;
}
</style>
