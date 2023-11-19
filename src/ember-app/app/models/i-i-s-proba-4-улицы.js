import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as УлицыMixin
} from '../mixins/regenerated/models/i-i-s-proba-4-улицы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УлицыMixin, Validations, {
});

defineProjections(Model);

export default Model;
