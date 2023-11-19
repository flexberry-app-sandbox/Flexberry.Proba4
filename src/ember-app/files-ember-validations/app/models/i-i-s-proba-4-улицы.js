import {
  defineNamespace,
  defineProjections,
  Model as УлицыMixin
} from '../mixins/regenerated/models/i-i-s-proba-4-улицы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УлицыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
