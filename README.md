Instalar o nvm
Instalar o node v8.9
npm install -g npm@6.1.0 //curl -L https://www.npmjs.com/install.sh | sh
npm install -g @angular/cli@6.0.7
ng new alurapic
ng serve --open

[RESOLVIDO] Sofri mas achei uma solução:

1- no arquivo package.json, alterar a chave "rxjs". de: "^6.0.0" para "6.0.0".

2- deletar a pasta node_modules e salvar

3- na pasta do projeto, executar "npm install"

4- subir a aplicação novamente "ng serve --open"

Fiz isso 5 vezes no meu projeto e funcionou em todas!

# Alurapic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
