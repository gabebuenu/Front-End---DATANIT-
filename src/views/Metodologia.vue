<template>
    <div class="methodology-container">
      <h1>Metodologia</h1>
      <p>
      O DATANIT baseia-se em duas listas de universidades amplamente reconhecidas no Brasil: o Ranking Universitário Folha e o Ranking de Universidades Empreendedoras. Essas listas abrangem 203 universidades distintas. Para cada uma dessas 203 instituições, foram acessados os websites das universidades, com o objetivo de identificar os Núcleos de Inovação Tecnológica (NIT), independentemente do nome específico utilizado para designar esses núcleos. Ou seja, mesmo que um NIT tenha um nome diferente de "núcleo de inovação tecnológica", ele foi identificado da mesma forma. Para cada núcleo identificado, foram coletados o nome, website, o endereço, a seção "sobre" e a conta no Instagram.

Na seção "sobre", é fornecida a descrição de cada NIT conforme disponível em seus respectivos websites. Já o endereço é utilizado para o georreferenciamento de todos os núcleos.

É importante destacar que nem todas as universidades possuem um NIT ou órgão similar. Além disso, o DATANIT oferece aos gestores de Instituições de Ensino e de Instituições Científicas, Tecnológicas e de Inovação a oportunidade de cadastrar os núcleos de suas respectivas instituições na seção "Adicionar".
      </p>
    </div>
</template>
<style scoped>
.methodology-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: left;
  font-family: Arial, sans-serif;
  padding: 0 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  font-size: 1em;
  line-height: 1.5;
  color: #333;
  max-width: 600px; 
}
</style>
