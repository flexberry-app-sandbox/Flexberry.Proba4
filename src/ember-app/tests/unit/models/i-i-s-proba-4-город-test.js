import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba-4-город', 'Unit | Model | i-i-s-proba-4-город', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba-4-город',
    'model:i-i-s-proba-4-улицы',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
