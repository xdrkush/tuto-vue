# 15 - build

Build application vuejs
  - build
  - vue.config.js


Au cas ou vous ne l'avez pas remarquer le build ne fonctionne pas correctement depuis le début du tuto
  - 1er je vais vous expliquer comment le faire fonctionner ainsi
  - 2eme on va le rebuild avec une config maison (en attente)

Pour le build de cette maniere vous avez juste besoin de lancer la commande
```
npm run build
npm i -g serve
serve -s dist
```

ou entrer dans dist et le lancer avec visual code studio
```
cd dist/
code .
```
Une fois dans visual code studio télécharger l'extension 'live server'
  - ensuite pour lancer l'application builder
  - clik droit sur le index.html
  - open with a live server (qui devrais ce lancer sur le locahost:5500)

--- ---

Le build est réparé, vous n'avez qu'à lancer la commande:
```
npm run build
```
récuperer l'index.html dans le dossier dist et injecter le dans votre navigateur

## Source
  - https://fr.vuejs.org/v2/guide/deployment.html
  - https://cli.vuejs.org/config/#outputdir
  
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
