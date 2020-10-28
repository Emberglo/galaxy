import { dbContext } from '../db/DbContext';
import { BadRequest } from '../utils/Errors';

class StarService {
	async getAll() {
		return await dbContext.Stars.find();
	}

	async create(body) {
		return await dbContext.Stars.create(body);
	}

	async edit(starId, body) {
		let exists = await this.findById(starId);
		if (!exists) {
			throw new BadRequest('This is not the star you are looking for');
		} else {
			return await dbContext.Stars.findByIdAndUpdate(starId, body, { new: true });
		}
	}

	async delete(starId) {
		let exists = await this.findById(starId);
		if (!exists) {
			throw new BadRequest('This is not the star you are looking for');
		} else {
			return await dbContext.Stars.findByIdAndDelete(starId);
		}
	}

	async findById(starId) {
		return await dbContext.Stars.findById(starId);
	}
}

export const starService = new StarService();
