# 🍎 Hortifruti E-commerce (Front-end)

Este é o repositório do **front-end** do projeto Hortifruti, uma aplicação de e-commerce completa para a venda de produtos de hortifruti.

A aplicação é construída em **React** com **TypeScript** e utiliza o **Vite** como ferramenta de build. Ela consome uma API RESTful para gerenciar usuários, produtos, carrinhos e pagamentos.

## ❗ Importante: Repositório do Back-end

Todo o código do **back-end** (servidor, API e banco de dados) para este projeto está em um **repositório separado**.

Para que este front-end funcione, o servidor do back-end precisa estar rodando localmente.

➡️ **Acesse o repositório do back-end aqui:** [https://github.com/FilipiNyetz/HortifrutiFinal.git](https://github.com/FilipiNyetz/HortifrutiFinal.git)

-----

## ✨ Funcionalidades Principais

  * **Autenticação de Usuário:** Sistema completo de login e registro de novas contas.
  * **Listagem de Produtos:** Dashboard principal com visualização de todos os produtos disponíveis.
  * **Carrinho de Compras:** Adicione produtos ao carrinho, visualize o subtotal e gerencie os itens.
  * **Checkout:** Modal de finalização de compra com seleção de método de pagamento.
  * **Roteamento:** Aplicação Single Page Application (SPA) com rotas protegidas usando `react-router-dom`.

## 🚀 Tecnologias Utilizadas

  * **React**
  * **TypeScript**
  * **Vite** (Build e Servidor de Desenvolvimento)
  * **React Router DOM** (Gerenciamento de rotas)
  * **Axios** (Para chamadas à API)
  * **CSS Padrão** (Para estilização)

-----

## 📦 Instalação e Execução (Front-end)

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone este repositório:**

    ```bash
    git clone https://github.com/gbrielzera/hortifruti-front-end.git
    cd hortifruti-front-end/hortifruti
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure o Ambiente:**

      * Este projeto precisa se conectar à API do back-end. Crie um arquivo `.env` na pasta `hortifruti/`.
      * Adicione a seguinte variável (ou a URL do back-end que você configurou):
        ```
        VITE_API_URL=http://localhost:3000
        ```
      * 
4.  **Rode o projeto Back-end:**

      * Não se esqueça de clonar, instalar e rodar o projeto do **back-end** (do outro repositório) para que a API esteja disponível.

5.  **Rode o servidor de desenvolvimento do Front-end:**

    ```bash
    npm run dev
    ```

    O projeto estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

## 🔧 Scripts NPM

  * `npm run dev`: Inicia o servidor de desenvolvimento do Vite com hot-reload.
  * `npm run build`: Compila o projeto para produção.
  * `npm run lint`: Executa o linter (ESLint).
  * `npm run preview`: Pré-visualiza o build de produção localmente.

# Integrantes do grupo

Gabriel Cézar Peres Matos UC23102346

Filipe Silva da Fonseca UC23103065

Késia Silva Viana UC23200887

Filipi Martins Romão Fanuck Stein UC22201204

Joelma Giovanna Barbosa UC23200743

João Pedro Nunes Neto UC23200137

# Video da explicação:
https://www.youtube.com/watch?v=agov_f07DBc

