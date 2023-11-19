import { Serializer as УлицыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba-4-улицы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УлицыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
