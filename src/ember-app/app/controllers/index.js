import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba-4.caption'),
          title: i18n.t('forms.application.sitemap.proba-4.title'),
          children: [{
            link: 'i-i-s-proba-4-город-l',
            caption: i18n.t('forms.application.sitemap.proba-4.i-i-s-proba-4-город-l.caption'),
            title: i18n.t('forms.application.sitemap.proba-4.i-i-s-proba-4-город-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-proba-4-улицы-l',
            caption: i18n.t('forms.application.sitemap.proba-4.i-i-s-proba-4-улицы-l.caption'),
            title: i18n.t('forms.application.sitemap.proba-4.i-i-s-proba-4-улицы-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})