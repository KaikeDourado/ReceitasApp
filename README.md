# ReceitasApp

🎉 Receitas Juninas App
Aplicativo móvel desenvolvido com React Native e Expo CLI, que exibe uma lista de receitas típicas de festa junina. O usuário pode visualizar detalhes sobre cada receita, incluindo ingredientes e modo de preparo.

📱 Funcionalidades

Tela inicial com lista de 7 receitas típicas de festa junina.
Exibição de título e descrição resumida de cada receita.
Navegação para uma tela de detalhes com ingredientes e modo de preparo completos.
Navegação entre telas utilizando React Navigation (Native Stack).
Estrutura modularizada com componentes reutilizáveis.

🛠 Tecnologias Utilizadas

React Native
Expo CLI
React Navigation
[JavaScript ES6+]

📁 Estrutura do Projeto

/outdoor-recipes
  /assets
  /components
    RecipeCard.js
  /data
    recipes.js
  /screens
    HomeScreen.js
    DetailScreen.js
  App.js
  
🚀 Como Rodar o Projeto

Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina:

Node.js
Expo CLI
Git

Passos

1.Clone este repositório:

git clone https://github.com/KaikeDourado/ReceitasApp.git
cd outdoor-recipes

2.Instale as dependências:
npm install

3.Inicie o servidor de desenvolvimento:

expo start

4.Abra o aplicativo no seu dispositivo ou emulador utilizando o QR Code exibido no terminal ou na interface web do Expo.

📱 Navegação

HomeScreen: Exibe a lista de receitas.
DetailScreen: Mostra os detalhes de uma receita selecionada, incluindo ingredientes e modo de preparo.

📄 Dados das Receitas

As receitas estão armazenadas em data/recipes.js como um array de objetos. Cada objeto contém:

id: Identificador único da receita.
title: Nome da receita.
description: Descrição resumida.
ingredients: Lista de ingredientes.
instructions: Passo a passo do modo de preparo.

🧩 Componentes

RecipeCard: Componente reutilizável que exibe o título e a descrição de cada receita na tela inicial.

📸 Exemplo de Tela

![Screenshot_20250514_094906_Expo Go](https://github.com/user-attachments/assets/7f98d412-d2c8-48ad-b980-3d4cda9667fe)
![Screenshot_20250514_094910_Expo Go](https://github.com/user-attachments/assets/ed1fe088-709c-44c2-a6fd-6312f74cb247)

