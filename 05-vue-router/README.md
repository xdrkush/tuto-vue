# 04-vue-router

Intégration de vue-router
  - Mise en place d'un layout dynamique

./src/layouts/MyLayout.vue
  - On Initialise notre Layout avec un 'router-view' pour faire circuler nos pages

./src/router/routes.js
  - Création du router avec Layout Parent et Pages Enfant que l'on export

./src/main.js
  - On importe notre router et on demande a notre vue de l'utiliser

./src/App.vue
  - On initialise notre App.vue avec router-view pour qu'il fassent circuler notre router

./src/pages/Contact.vue
  - On créé notre pages avec ses components

./src/pages/Home.vue
  - On créé notre pages avec ses components

Source:
  - https://router.vuejs.org/

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
