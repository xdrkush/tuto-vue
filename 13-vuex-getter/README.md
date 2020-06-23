# 13 - Getters

Intégration de state avec vuex
  - store
  - mapActions
  
./store/store-home
  - Ici nous stockons nos fonctions calculé afin de pouvoir les appelés dans nos componennts

./pages/homePage
  - Nous voyons bien que nous appelons mapGetters qui est filtré grace à notre components search et envoyons notre résultat de filterNewsComponent dans le components newsComponent.

./components/resultComponent
  - Ici nous faisons un petit getters de routine

Il y 1 ou 2 petit Getters a trainer 

À quoi ça sert ??
Le faites de pouvoir stocker des actions dans notre store simplifie grandement la modulation de notre architecture, du faite que des que nous allons avoir besoin d'une méthode nous allons juste besoin de l'appelé dans nos components plutot que de récrire le code à chaque fois.

Source:
https://vuex.vuejs.org/fr/guide/getters.html
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