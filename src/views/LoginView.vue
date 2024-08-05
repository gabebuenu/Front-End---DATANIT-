<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Login</h2>
      <p>Seja Bem-vindo!</p>
      <div class="form-group">
        <input type="email" id="name" v-model="username" placeholder="Username" required />
      </div>
      <div class="form-group">
        <input type="password" id="password" v-model="password" placeholder="Password" required />
      </div>
      <div class="form-group remember-me">
        <input type="checkbox" id="remember" />
        <label for="remember">Lembrar de mim</label>
      </div>
      <div class="form-group forgot-password">
        <a href="#">Forgot your password?</a>
      </div>
      <button type="submit" class="btn">Sign in</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      try {
        await this.login({ username: this.username, password: this.password });
        this.$router.push({ name: 'Home', query: { section: 'universities' } });
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed: ' + error.message);
      }
    }
  }
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent;
}

.login-form {
  text-align: center;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: 8px;
  background-color: #fff;
}

.login-form h2 {
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.login-form p {
  margin-bottom: 20px;
  color: #666;
}

.login-form a {
  color: #007bff;
  text-decoration: none;
}

.login-form .form-group {
  margin-bottom: 15px;
}

.login-form input[type="email"],
.login-form input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  font-size: 1rem;
}

.login-form .btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

.login-form .btn:hover {
  background-color: #333;
}

.login-form .remember-me {
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 15px;
}

.login-form .remember-me input[type="checkbox"] {
  margin-right: 10px;
}

.login-form .forgot-password {
  text-align: right;
}
</style>
