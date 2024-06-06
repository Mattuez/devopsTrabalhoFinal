# Implementação de Balanceamento de Carga com Docker para Aplicação Web e Banco de Dados

Este projeto demonstra como configurar um sistema de balanceamento de carga utilizando Docker, NGINX, Node.js (com Express) e MySQL. O objetivo é garantir alta disponibilidade, escalabilidade e desempenho para uma aplicação web e seu banco de dados.

Funcionalidades:

- Balanceamento de Carga: Distribui o tráfego de forma equilibrada entre múltiplas instâncias da aplicação web.
- Dockerização: Facilita a implantação e o gerenciamento da aplicação e do banco de dados em containers isolados.
- Escalabilidade: Permite adicionar ou remover instâncias da aplicação para lidar com a demanda.
- Persistência de Dados: Utiliza volumes Docker para persistir os dados do banco de dados.

Tecnologias Utilizadas:

- Docker
- Docker Compose
- NGINX (balanceador de carga)
- Node.js (com Express)
- MySQL

Pré-requisitos:

- Docker e Docker Compose instalados na sua máquina.

Como Executar:

- Obs: Lembrar de parar o serviço do MySql para não dar conflito. 
- Clone o Repositório:
  - Bash git clone https://github.com/Mattuez/devopsTrabalhoFinal.git
- Navegue até a Pasta do Projeto:
  - Bash cd devopsTrabalhoFinal
- Inicie os Containers:
  - Bash docker-compose up -d --build

Acesse a Aplicação:

- Abra o navegador e acesse http://localhost:8080/
  - Você verá a mensagem de boas-vindas da sua aplicação.
- Rotas da API:

  - GET /: Retorna a mensagem de boas-vindas. -> Se ficar dando f5 aqui dá pra ver a mudança no id do container.
  - GET /nomes: Retorna todos os nomes armazenados no banco de dados.
  - POST /nomes: Adiciona um novo nome ao banco de dados (envie um JSON com a chave nome).
  - DELETE /nomes/:id: Remove um nome do banco de dados pelo ID.
