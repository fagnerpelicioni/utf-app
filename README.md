# Starter web project

Projeto inicial para desenvolvimento web, pronto para ser usado em frontend e backend, para páginas estaticas ou dinamicas, usando PHP ou node.js

  - Adiciona pacotes via yarn
  - Adiciona pacotes via npm
  - Minifica imagens, styles, scripts automatizado via gulp
  - Compila SASS via gulp

## Novos!

  - Removido **Bower** e adicionado **Yarn**
  - Adicionado tarefas para imagens e fonts no gulpfile

### Gerenciadores

* [npm](https://npmjs.com) - Gerenciador de pacotes node.js
* [yarn](https://yarnpkg.com) - Gerenciador de pacotes front-end
* [Gulp] - Task-runner
* [jQuery] - duh

### Pacotes

* [Bootstrap](https://getbootstrap.com) - Gerenciador de pacotes node.js
* [SASS](https://sass-lang.com/) - Gerenciador de pacotes front-end
* [Popper](https://popper.js.org/) - Lib javascript
* [jQuery] - Lib javascript
* [Font-Awesome](https://fontawesome.com/) - Fontes e icones

### Instalação

O pacote necessita do [Node.js](https://nodejs.org/) v4+ para funcionar.
Em seguida, atualize o npm e instale o gulp global
Clone o repositório.

```sh
$ npm install -g npm@latest
$ npm install -g gulp
```

Instale as dependencias do npm

```sh
$ cd starter-web-project
$ npm install -d
```

Instale as dependencias do yarn
```sh
$ yarn install
```
Em seguida gerar os arquivos de produção

```sh
$ gulp
```
Pronto. Abra o arquivo index.html

### Desenvolvimento

Depois de instalado. O projeto estará pronto para ser trabalhado. Use o watch para automatizar as alterações dos seus assets.

```sh
$ gulp watch
```

Para adicionar novos estilos, fazer o import do caminho no arquivo main.scss
Por exemplo
```css
@import "../../node_modules/bootstrap/scss/bootstrap.scss";
```

Para adicionar novos scripts, inserir o caminho do script no arquivo gulpfile.js, ele será concatenado.
Por exemplo

```js
gulp.src([
    'src/**/*.js',
    'node_modules/jquery/dist/*.js'
        ])
```

License
----
MIT

**Pelicioni Web Studios, 2018**

   [node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   [Gulp]: <http://gulpjs.com>

