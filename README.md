# Ingenieria Web

Para solucionar este trabajo se crearon los componentes: owner-list, owner-edit y car-and-owner-list. El componente owner-list nos permite visualizar los owner y además nos da la opción de seleccionar uno o varios en caso de querer eliminarlos, en caso de ser eliminados se borra su relación con algún carro en caso de que la hubiera. El componente owner-edit nos permite editar owners existentes pero también agregar owners nuevos. Y por último el componente car-and-owner-list nos permite visualizar la lista de carros con sus respectivos owners. Además se modifico el component edit-car para poder asociar un owner a un carro.

Adicionalmente se agregó el servicio owner el cuál se encarga de conectarse con la api de owners para enviar las peticiones necesarias, se agregaron las funciones para obtener todos los owners, obtener owners por id o dni, agregar o editar owners, y eliminar owners.


# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

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
