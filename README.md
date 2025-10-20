<h1 align="center">Doação Solidária</h1>

![Node.js Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![AWS Badge](https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Express Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker Badge](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Axios Badge](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

O projeto se baseia em um sistema web para cadastro de entidades beneficentes com o intuito de trazer visibilidade e doações às mesmas, sendo desenvolvido para a Sprint 2 e 3 do Programa de Bolsas da Compass UOL - Machine Learning AWS.

O sistema segue a proposta das sprints mencionadas utilizando para a construção do mesmo principalmente NodeJS, Docker para a containerização e os serviços da AWS (Amazon Web Services) para o deploy da aplicação. A API escolhida para consumo pelo sistema foi a ViaCEP.

Link da API utilizada no projeto: [ViaCEP](https://viacep.com.br/)

## 📑 Índice
- [📑 Índice](#-índice)
- [📈 Status do Projeto](#-status-do-projeto)
- [🎨 Layout](#-layout)
  - [Web](#web)
  - [Mobile](#mobile)
- [✨ Funcionalidades](#-funcionalidades)
- [🗃️ Banco de Dados](#️-banco-de-dados)
- [⚙️ Variáveis de Ambiente](#️-variáveis-de-ambiente)
- [📦 Como Rodar A Aplicação](#-como-rodar-a-aplicação)
- [🚀 Deploy](#-deploy)
- [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📂 Estrutura de Diretórios](#-estrutura-de-diretórios)
- [📐 Padrões Utilizados](#-padrões-utilizados)
- [📅 Metodologia de Desenvolvimento](#-metodologia-de-desenvolvimento)
- [👥 Desenvolvedores](#-desenvolvedores)
- [😿 Principais Dificuldades](#-principais-dificuldades)
- [📝 Licença](#-licença)

## 📈 Status do Projeto
Finalizado ✅

Acesse a aplicação no seguinte link:
**[Doação Solidária](http://54.243.175.2)**

## 🎨 Layout

### Web

<div style="display: flex;">
  <img alt="webPageHome" title="#webPageHome" src="./public/img/webPageHome.png" style="margin-right: 10px;">

  <img alt="webPageRegister" title="#webPageRegister" src="./public/img/webPageRegister.png">
</div>

### Mobile

<div style="display: flex;">
  <img alt="webPageHome" title="#webPageHome" src="./public/img/mobilePageHome.jpg" style="margin-right: 10px;" width="300px">

  <img alt="webPageRegister" title="#webPageRegister" src="./public/img/mobilePageRegister.jpg" width="300">
</div>

## ✨ Funcionalidades
1. **Cadastro de entidades**: Possibilita o cadastro das entidades através do preenchimento de informações básicas.
2. **Consulta dos registros**: Possibilita a consulta de todas as entidades registradas no sistema.
3. **Consulta do CEP**: O sistema retorna os dados de endereço através da inserção do CEP pelo usuário.
4. **Consulta de cadastros por região**: Os usuários conseguem visualizar as entidades cadastradas no sistema que estão localizadas próximas do mesmo através da inserção do CEP pessoal.
5. **Responsividade**: Site responsivo para aplicativos mobile.

## 🗃️ Banco de Dados

Foi utilizado o MongoDB Atlas, uma solução de banco de dados NoSQL na nuvem, na sua versão gratuita, que oferece um limite de 512 MB de armazenamento. O cluster foi configurado na região us-east-1 e a conexão foi realizada utilizando a string de conexão fornecida pelo MongoDB Atlas.

Para rodar a aplicação localmente, é necessário configurar um cluster no MongoDB Atlas para criar e gerenciar o banco de dados, e obter uma string de conexão.
Após obter a string de conexão, é necessário seguir os passos descritos na sessão de variáveis de ambiente para configurar a aplicação corretamente.

## ⚙️ Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para configuração. Para configurar seu ambiente local:

1. Crie no diretório base do projeto um arquivo com o nome ".env"

2. Abra o arquivo .env e substitua as variáveis de exemplo pelos valores reais, seguindo as instruções fornecidas no próprio arquivo.

| Variável         | Descrição                             | Exemplo                    |
|------------------|---------------------------------------|----------------------------|
| CONNECTIONSTRING | String de conexão para o MongoDB      | `mongodb+srv://username:password@cluster0.qcya0jh.mongodb.net/Entidades?retryWrites=true&w=majority` |


## 📦 Como Rodar A Aplicação

**Utilizando Docker :**

** Certifique-se de ter o docker instalado e executando em sua máquina.

** Para instalar o Docker acesse a página oficial e siga as instruções : [Docker](https://www.docker.com/)

1. Clone o repositório em sua máquina com o seguinte comando no terminal : 

       git clone -b grupo-1 https://github.com/Compass-pb-aws-2024-JUNHO/sprints-2-3-pb-aws-junho.git

3. Dentro do diretório raiz da aplicação, digite o seguinte comando para criar a imagem Docker :

        docker build -t jeanptbr/projeto-doacao-solidaria .

4. Em seguida, no terminal :

        docker run -p 3000:3000 jeanptbr/projeto-doacao-solidaria

**Sem Docker:**

1. Execute o comando de clonagem do repositório no terminal :

       git clone -b grupo-1 https://github.com/Compass-pb-aws-2024-JUNHO/sprints-2-3-pb-aws-junho.git


2. Execute o comando para instalar as dependências necessárias:

        npm install

2. Após isso execute o seguinte comando :

       npm start

4. Acesse a aplicação em : http://localhost:3000/ .

## 🚀 Deploy

**Para realizar o deploy seguindo os passos abaixo certifique-se de ter uma conta na AWS.**

Para realizar o deploy da aplicação foram seguidos os seguintes passos :

1.Criar uma VPC com subnet pública através do console da AWS utilizando a ferramenta de VPC modelo.

2.Criar uma instância EC2 com as seguintes configurações :

    - Zona de Disponibilidade : us-east-1
    - AMI : Ubuntu Server 24.04 LTS (HVM),EBS General Purpose (SSD) Volume Type
    - Tipo de Instância : t3.micro
    - Armazenamento : 1x8 GiB gp3
    - Criação de chaves SSH
    - Permissão para Tráfego HTTP e HTTPS 
    - Associar EC2 a subnet pública e habilitar Público

3.Conexão via SSH com a EC2.

4.Atualização do servidor.

5.Instalação do Docker e da imagem correspondente no seguinte link : **jeanptbr/projeto-doacao-solidaria**

6.No terminal do servidor execução do seguinte comando :

    docker run -p 80:3000 jeanptbr/projeto-doacao-solidaria
    

## 💻 Tecnologias Utilizadas
- [HTML](https://www.w3.org/html/)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/pt)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- [Serviços da AWS](https://aws.amazon.com)
- [MongoDB](https://www.mongodb.com/)

## 📂 Estrutura de Diretórios

Abaixo está a estrutura de diretórios do projeto:

    my-project/
    │
    ├── public/                 # Arquivos estáticos servidos diretamente
    │   ├── css/                # Folhas de estilo CSS
    │   ├── img/                # Imagens usadas na aplicação
    │   └── js/                 # Scripts JavaScript para o frontend
    │
    ├── src/                    # Código fonte principal do projeto
    │   ├── controllers/        # Controladores para a lógica do aplicativo
    │   ├── models/             # Modelos de dados que interagem com o banco de dados
    │   ├── views/              # Visualizações (ou templates) da aplicação
    │
    ├── .gitignore              # Arquivos e diretórios a serem ignorados pelo Git
    ├── Dockerfile              # Arquivo de configuração para Docker
    └── README.md               # Este arquivo
    ├── server.js               # Servidor principal da aplicação
    └── .env                    # Variáveis de ambiente para a aplicação
    └── package.json            # Pacotes NodeJS
    
## 📐 Padrões Utilizados
1. **Commits Semânticos**: Os commits do projeto seguem o padrão de commits semânticos facilitando o entendimento e a padronização.
2. **Estrutura MVC**: A arquitetura do projeto segue o padrão Model-View-Controller (MVC) para organizar e separar as responsabilidades da aplicação.

## 📅 Metodologia de Desenvolvimento
Para o desenvolvimento do projeto a metodologia adotada foi a Scrum.
O projeto foi dividido entre 3 sprints:

 - **Sprint 1**: Desenvolvimento da aplicação.
 - **Sprint 2**: Aprimoramento da Aplicação, Conteinerização do Docker.
 - **Sprint 3**: Criação da EC2, Deploy na AWS, Testes.

Foram realizadas dailys para alinhamento através do Microsoft Teams.

## 👥 Desenvolvedores
- [Hugo Bessa Susini Ribeiro](https://github.com/hsusini)
- [Jean Carlos Penha Da Conceição](https://github.com/JeanPTBR)
- [Marcel Dupret Lopes Barbosa](https://github.com/MarcelDBarbosa)
- [Pedro Henrique Silveira Nunes](https://github.com/PedroNunesBH)

## 😿 Principais Dificuldades 
- **Conexão Handlebars e Rotas Node Express.**
- **Conexão da Variável de Ambiente com Docker**
- **Sincronização do Grupo nas responsibilidades do projeto**
- **Estilização da página**
- **Problemas com o Sistema MAC ao criar imagem do Docker para EC2**

## 📝 Licença
Este projeto utiliza a licença MIT.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)