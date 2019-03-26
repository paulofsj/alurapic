Instalar o nvm

Instalar o node v8.9

`npm install -g npm@6.1.0` //curl -L https://www.npmjs.com/install.sh | sh

`npm install -g @angular/cli@6.0.7`

`ng new alurapic`

para funcionar o auto reefresh `echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf` 
`sudo sysctl -p` ou `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

rm -rf nodes_modules/ -> npm update -> npm install

`ng serve --open` ou `ng serve --live-reload`

[] bind para atributos - one way data binding

`npm install bootstrap@4.1.1`

angular.json  "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],

Criar component, é boa pratica preficar o nome do seletor pela app. Sempre deve ser adicionado a um module.

app.molule.ts é o primeiro ts a ser executado. Lá deve incluir todos os components. declarations: [
    AppComponent,
    PhotoComponent
  ],

Uma boa prática é criar um agrupador de Modulos e chamar esse agrupador no app.molule.ts na properties imports.

Para receber um valor da propriedade deve usar o @Input(), assim ele recebe o valor dinamicamente.

Para iterar array
<ap-photo
    *ngFor="let photo of photos"
    url="photo.url"
    description="photo.description"
>
</ap-photo>

Iremos ao módulo principal da aplicação, app.module.ts, e incluiremos HttpClientModule em imports:

import { HttpClientModule } from '@angular/common/http';

imports: [
    BrowserModule,
    PhotosModule,
    HttpClientModule
],

na classe é só injetar no construtor 
 import { HttpClient } from '@angular/common/http';
  constructor(http: HttpClient) {
    console.log(http);
  }


 Para criar um serviço, basta olhar o PhotoService e fazer o inject no constructor da classe que precisa usar o serviCe. Para consumir 
    photoService
        .listFromUser('flavio')
        .subscribe(photos => this.photos = photos);

Uma boa pratica é usar o constructor só para inject. Se precisar rodar algo no inicio, usar ngOnInit. Basta a classe implementar OnInit.

para gerar os componentes com o cli: 'ng generate component photos/photo-list'







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
