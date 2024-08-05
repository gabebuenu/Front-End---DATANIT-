<template>
  <div id="app">
    <header class="header" v-if="showHeader">
      <img src="./assets/img/datanit_1.svg" alt="Logo" class="logo"/>
      <div class="social-icons">
        <a href="#" target="_blank" class="icon-link"><i class="bi bi-twitter"></i></a>
        <a href="#" target="_blank" class="icon-link"><i class="bi bi-facebook"></i></a>
        <a href="#" target="_blank" class="icon-link"><i class="bi bi-instagram"></i></a>
      </div>
    </header>
    <Sidebar />
    <main class="main">
      <router-view @login="handleLogin" />
    </main>
  </div>
</template>



<script>
import Sidebar from './components/Sidebar.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Sidebar
  },
  computed: {
    ...mapState(['isLoggedIn']),
    showHeader() {
      return this.$route.name !== 'login' && this.$route.name !== 'Cadastro' && this.$route.name !== 'Sobre' && this.$route.name !== 'Metodologia' && this.$route.name !== 'Lei';
    }
  },
  methods: {
    ...mapActions(['checkAuth']),
    handleLogin() {
      console.log('Login successful');
    }
  },
  mounted() {
    this.checkAuth();
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.2/font/bootstrap-icons.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "League Spartan", sans-serif;
  text-decoration: none;
}

body {
  width: 100%;
  height: 100%;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* Ajuste conforme necessário */
  position: relative;
}

.logo {
  max-width: 70%;
  height: auto;
}

.social-icons {
  position: absolute;
  bottom: 340px; 
  display: flex;
  gap: 15px;
}

.icon-link {
  color: #585858;
  font-size: 1.3rem;
  transition: color 0.3s ease;
}

.icon-link:hover {
  color: #ccc;
}

.main {
  flex: 1;
}

@media (max-height: 600px) {
  .logo {
    max-width: 75%;
  }

  .icon-link {
    font-size: 1.1rem; 
  }
  .social-icons {
  position: absolute;
  bottom: 200px;
  display: flex;
  gap: 15px;
  }
}
</style>