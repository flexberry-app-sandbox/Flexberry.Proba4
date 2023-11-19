import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba_4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_4',
          title: 'Proba_4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba-4-город-l': IISProba_4ГородLForm,
    'i-i-s-proba-4-улицы-l': IISProba_4УлицыLForm,
    'i-i-s-proba-4-город-e': IISProba_4ГородEForm,
    'i-i-s-proba-4-улицы-e': IISProba_4УлицыEForm
  },

});

export default translations;
