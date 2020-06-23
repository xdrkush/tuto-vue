# 10 - State

Intégration de state avec vuex
  - store
  - mapState
  
./store/store-home.js
  - Ici c'est le store de home avec les fonction que nous avons besoin (Nous stockons nos tableaux afin de pouvoir les récupéré dans nos components)

./store/store-contact.js
  - Es vide mais sa nous montre comment l'architecturé

./store/index.js
  - Qui va nous permetre d'instancier nos store avec VUE

./main.js
  - Nous allons enfin pouvoir demander à VUE d'utiliser notre store

./components/resultComponents
  - Ici nous récupérons notre store grace à VUE X et mapState

./pages/HomePage
  - Ici nous récupérons notre store grace à VUE X et mapState


À quoi ça sert ??
Vue X va nous permetre de créé une sorte de cache dans notre application, que l'on appel store.
On pouvoir venir y stocker des States, Actions, Getters, Mutation
Ce qui va nous faciliter la modulations de nos datas, dans nos components 

  - Action = methods
  - State = stocker des valeurs (Boolean, Tableau, objet, ...)
  - Mutation = va nous permettre de changez la valeure de nos states
  - Getters = Stocker des fonctions calculé

Source:
https://vuex.vuejs.org/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).