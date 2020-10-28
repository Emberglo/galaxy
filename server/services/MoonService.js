import { dbContext } from '../db/DbContext';
import { BadRequest } from '../utils/Errors';

class MoonService {
	async getAll() {
		return await dbContext.Moons.find();
	}

	async create(body) {
		return await dbContext.Moons.create(body);
	}

	async edit(moonId, body) {
		let exists = await this.findById(moonId);
		if (!exists) {
			throw new BadRequest('This is not the moon you are looking for');
		} else {
			return await dbContext.Moons.findByIdAndUpdate(moonId, body, { new: true });
		}
	}

	async delete(moonId) {
		let exists = await this.findById(moonId);
		if (!exists) {
			throw new BadRequest('This is not the moon you are looking for');
		} else {
			return await dbContext.Moons.findByIdAndDelete(moonId);
		}
	}

	async findById(moonId) {
		return await dbContext.Moons.findById(moonId);
	}
}

export const moonService = new MoonService();
