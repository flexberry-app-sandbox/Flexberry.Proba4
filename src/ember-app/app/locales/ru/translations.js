import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProba_4ГородLForm from './forms/i-i-s-proba-4-город-l';
import IISProba_4УлицыLForm from './forms/i-i-s-proba-4-улицы-l';
import IISProba_4ГородEForm from './forms/i-i-s-proba-4-город-e';
import IISProba_4УлицыEForm from './forms/i-i-s-proba-4-улицы-e';
import IISProba_4ГородModel from './models/i-i-s-proba-4-город';
import IISProba_4УлицыModel from './models/i-i-s-proba-4-улицы';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba-4-город': IISProba_4ГородModel,
    'i-i-s-proba-4-улицы': IISProba_4УлицыModel
  },

  'application-name': 'Proba_4',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba_4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_4',
          title: 'Proba_4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'proba-4': {
          caption: 'Proba_4',
          title: 'Proba_4',
          'i-i-s-proba-4-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-proba-4-улицы-l': {
            caption: 'Улицы',
            title: ''
          }
        },
        приложение: {
          caption: 'Приложение',
          title: 'Приложение',
          'i-i-s-proba-4-улицы-l': {
            caption: 'УлицыL',
            title: 'Улицы'
          },
          'i-i-s-proba-4-город-l': {
            caption: 'ГородL',
            title: 'Город'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba-4-город-l': IISProba_4ГородLForm,
    'i-i-s-proba-4-улицы-l': IISProba_4УлицыLForm,
    'i-i-s-proba-4-город-e': IISProba_4ГородEForm,
    'i-i-s-proba-4-улицы-e': IISProba_4УлицыEForm
  },

});

export default translations;
