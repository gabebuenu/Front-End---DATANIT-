<template>
    <div class="container">
      <section class="about-section">
        <div class="about-content">
          <h2>Sobre o DataNit</h2>
          <p>
            Lorem ipsum dolor sit amet. Et nisi quia aut deserunt voluptas aut minus repudiandae. Eos officia odio et nihil nihil ut laudantium perspiciatis in alias eius et sint facere rem corporis exercitationem. Est corrupti possimus et maiores beatae quo tempora perferendis in voluptas perspiciatis sed provident esse ut facere natus aut pariatur error. Ut optio deleniti qui ipsam officiis qui iure quos in repellat dolore qui iure quidem.
          </p>
        </div>
        <div class="values-content">
          <h2>Outras informações</h2>
          <p>
            Lorem ipsum dolor sit amet. Et nisi quia aut deserunt voluptas aut minus repudiandae. Eos officia odio et nihil nihil ut laudantium perspiciatis in alias eius et sint facere rem corporis exercitationem. Est corrupti possimus et maiores beatae quo tempora perferendis in voluptas perspiciatis sed provident esse ut facere natus aut pariatur error. Ut optio deleniti qui ipsam officiis qui iure quos in repellat dolore qui iure quidem.
          </p>
        </div>
      </section>
      <section class="leadership-team">
        <h2>Sobre os Criadores</h2>
        <div class="team-members">
          <div class="team-member">
            <h3>Gabriel Bueno da Silva</h3>
            <p>Discente</p>
            <p>
                Aut omnis dolorum eum asperiores amet ea voluptate amet 33 temporibus rerum. Qui exercitationem deleniti ut esse officia est fugit dignissimos qui voluptatem veniam et quia quod aut doloremque blanditiis ut amet mollitia.
            </p>
          </div>
          <div class="team-member">
            <h3>Rafael Gutierres Castanha</h3>
            <p>Docente</p>
            <p>
                Aut omnis dolorum eum asperiores amet ea voluptate amet 33 temporibus rerum. Qui exercitationem deleniti ut esse officia est fugit dignissimos qui voluptatem veniam et quia quod aut doloremque blanditiis ut amet mollitia.
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LeadershipTeam'
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .about-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    text-align: center;
  }
  
  .about-content, .values-content {
    width: 100%;
    max-width: 600px;
    margin: 10px 0;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  
  .leadership-team {
    text-align: center;
  }
  
  .team-members {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .team-member {
    flex: 1;
    min-width: 250px;
    max-width: 300px;
    margin: 10px;
  }
  
  .team-member h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .team-member p {
    font-size: 14px;
    line-height: 1.5;
  }
  </style>
  