import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  город: DS.belongsTo('i-i-s-proba-4-город', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-proba-4-улицы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-proba-4-улицы.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УлицыE', 'i-i-s-proba-4-улицы', {
    наименование: attr('Наименование', { index: 0 }),
    город: belongsTo('i-i-s-proba-4-город', 'Город', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('УлицыL', 'i-i-s-proba-4-улицы', {
    наименование: attr('Наименование', { index: 0 }),
    город: belongsTo('i-i-s-proba-4-город', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
