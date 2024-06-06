import { Model } from 'objection';
import { Order } from './Order.js';

export class User extends Model {
	static get tableName() {
		return 'users';
	}

	static get relationMappings() {
		return {
			orders: {
				relation: Order.HasManyRelation,
				modelClass: Order,
				join: {
					from: 'users.id',
					to: 'orders.user_id',
				},
			}
		}
	}

	$formatJson(json) {
		json = super.$formatJson(json);
		delete json.password;
		return json;
	}
}
