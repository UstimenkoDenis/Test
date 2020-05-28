Запуск приложения.
1. На компьютере должен быть установлен Git (например для Windows https://git-scm.com/download/win)
2. Должен быть установлен редактор кода (например VS Code https://code.visualstudio.com/)
3. На компьютере должен быть установлен nodejs (Если его нет, пройдите по ссылке https://nodejs.org/en/)
4. Создайте папку для приложения на диске, далее зайдите в нее в терминале VS Code и введите 
    git clone https://github.com/UstimenkoDenis/Test.git   
  - проект клонируется в папку на диске.
5. В терминале VS code введите команду cd Test  (для перехода в папку проекта)
6. Введите команду npm i  (установятся все зависимости)
7. Введите npm i json-server (установится сервер для работы с БД)
8. Запустие приложение командой npm run dev  (запустится 2 сервера, надо подождать)
9. В браузере перейдите по адресу localhost:4200


Данные для входа:
           email : ustimenkodenis@mail.ru
           password: 12denis

Вы можете создать своего пользователя.

Описание.
  После авторизации и входа, вы можете добавлять новые контакты, удалять и редактировать их,
  также пользоваться функцией поиска.
  При выходе есть возможность сохранить изменения в БД
  База данных находится в файле db.json












# NgTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

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
