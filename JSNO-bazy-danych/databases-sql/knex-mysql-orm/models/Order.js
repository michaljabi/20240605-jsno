import { Model } from 'objection';

export class Order extends Model {
	static get tableName() {
		return 'orders';
	}

	static get relationMappings() {
		const User = require('./User');

		return {
			user: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'orders.user_id',
					to: 'users.id'
				}
			}
		}
	}
}
