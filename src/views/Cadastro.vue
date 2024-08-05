<template>
  <div class="form-container">
    <h2>Cadastre sua Universidade</h2>
    <p>Preencha os campos abaixo para adicionar sua universidade.</p>
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="form-group">
          <label for="nomeUniversidade">Nome da Universidade:</label>
          <input type="text" id="nomeUniversidade" v-model="form.nomeUniversidade" required>
        </div>
        <div class="form-group">
          <label for="endereco">Endereço:</label>
          <textarea id="endereco" v-model="form.endereco" required></textarea>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="siglaUniversidade">Sigla da Universidade:</label>
          <input type="text" id="siglaUniversidade" v-model="form.siglaUniversidade" required>
        </div>
        <div class="form-group">
          <label for="uf">UF:</label>
          <select id="uf" v-model="form.uf" required>
            <option value="" disabled>Selecione o estado</option>
            <option value="SP">SP</option>
              <option value="RS">RS</option>
              <option value="RJ">RJ</option>
              <option value="MG">MG</option>
              <option value="SC">SC</option>
              <option value="PR">PR</option>
              <option value="DF">DF</option>
              <option value="PE">PE</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="RN">RN</option>
              <option value="GO">GO</option>
              <option value="ES">ES</option>
              <option value="PA">PA</option>
              <option value="SE">SE</option>
              <option value="PB">PB</option>
              <option value="PI">PI</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="AL">AL</option>
              <option value="MA">MA</option>
              <option value="AM">AM</option>
              <option value="RO">RO</option>
              <option value="AC">AC</option>
              <option value="RR">RR</option>
              <option value="AP">AP</option>
              <option value="TO">TO</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="publicaOuPrivada">Pública ou Privada:</label>
          <select id="publicaOuPrivada" v-model="form.publicaOuPrivada" required>
            <option value="" disabled>Selecione o tipo</option>
            <option value="Pública">Pública</option>
            <option value="Privada">Privada</option>
            <option value="Estadual">Estadual</option>
            <option value="Federal">Federal</option>
          </select>
        </div>
        <div class="form-group">
          <label for="sobre">Sobre:</label>
          <textarea id="sobre" v-model="form.sobre"></textarea>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="nitNome">Nome do NIT:</label>
          <input type="text" id="nitNome" v-model="form.nitNome" required>
        </div>
        <div class="form-group">
          <label for="instagram">Instagram:</label>
          <input type="url" id="instagram" v-model="form.instagram">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="link">Link:</label>
          <input type="url" id="link" v-model="form.link" required>
        </div>
      </div>
      <button class="button-uni" type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Cadastro',
  data() {
    return {
      form: {
        nomeUniversidade: '',
        siglaUniversidade: '',
        uf: '',
        publicaOuPrivada: '',
        nitNome: '',
        link: '',
        endereco: '',
        sobre: '',
        instagram: ''
      }
    }
  },
  methods: {
    submitForm() {
      axios.post('https://localhost:7287/api/Universidades', this.form)
        .then(response => {
          console.log('Universidade cadastrada com sucesso:', response.data);
          this.$router.push({ name: 'Home' });
        })
        .catch(error => {
          console.error('Erro ao cadastrar universidade:', error);
        });
    }
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  height: 100vh;
}

form {
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #000;
  text-align: center;
}

p {
  color: #666;
  margin-bottom: 20px;
  text-align: center;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  flex: 1 1 calc(50% - 20px);
  min-width: 200px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input[type="text"],
input[type="url"],
select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

textarea {
  resize: vertical;
}

button.button-uni {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

button.button-uni:hover {
  background-color: #333;
}
</style>
