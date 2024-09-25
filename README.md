# Angular + Spring Boot Application

Este projeto é uma aplicação web fullstack construída com **Angular.js** no front-end e **Spring Boot** no back-end. O objetivo é criar uma interface de usuário reativa e um serviço back-end robusto para gerenciar dados e fornecer uma API RESTful fornecendo um serviço de gerenciador de tarefas

## Requisitos

### Para rodar o projeto, você precisa ter instalado:
- **Node.js** (v16 ou superior)
- **NPM** (v8 ou superior) ou **Yarn**
- **Java 11+** (JDK)
- **Maven** (se não estiver embutido no projeto Spring Boot)
- **MySQL** ou outro banco de dados compatível

## 1. Configuração do Back-end (Spring Boot)

### Passos:
1. Clone o repositório:
   ```bash
   git clone https://github.com/pedromends/api-find
2. Crie um banco de dados no MySQL:
   ```bash
    CREATE DATABASE api-find;
3. Configure o arquivo application.properties ou application.yml com as credenciais do banco de dados:
   ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/api-find
    spring.datasource.username=root
    spring.datasource.password=admin
    spring.jpa.hibernate.ddl-auto=update
    server.port=8080
4. Rode o projeto Spring Boot:
   ```bash
    mvn spring-boot:run
5. Ou rode o projeto na Sua IDE preferida (IntelliJ, Eclipse, etc)
## 2. Configuração do Front-end (Angular.js)

### Passos:
1. Clone o repositório:
   ```bash
    git clone https://github.com/pedromends/angular-find
2. Instale as dependências::
   ```bash
   npm install
3. Execute o servidor de desenvolvimento:
   ```bash
   ng serve
    

    