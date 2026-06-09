# CadastroAPI
Sistema de cadastro simples de usuário com Java, springBoot E PostgreeSQL. API REST + Front-end em HTML, CSS e JS

🚀 Demonstração
Front-end consumindo a API para cadastrar e listar usuários em tempo real.

🛠 Tecnologias Utilizadas

Back-end
Java 21
Spring Boot
Spring Data JPA / Hibernate
PostgreSQL
Maven

Front-end
HTML5
CSS3
JavaScript

📋 Funcionalidades
 Cadastro de novos usuários
 Listagem de todos os usuários cadastrados
 Atualização de dados do usuário
 Exclusão de usuário
 
🗃️ Estrutura do Banco de Dados
A aplicação utiliza uma tabela principal usuarios:

PostegreeSQL
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    senha VARCHAR(200) NOT NULL,
    telefone VARCHAR(200),
    );
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
