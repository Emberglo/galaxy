import { dbContext } from '../db/DbContext';
import { BadRequest } from '../utils/Errors';

class GalaxyService {
	async getAll() {
		return await dbContext.Galaxies.find();
	}

	async create(body) {
		return await dbContext.Galaxies.create(body);
	}

	async edit(galaxyId, body) {
		let exists = await this.findById(galaxyId);
		if (!exists) {
			throw new BadRequest('This is not the galaxy you are looking for');
		} else {
			return await dbContext.Galaxies.findByIdAndUpdate(galaxyId, body, { new: true });
		}
	}

	async delete(galaxyId) {
		let exists = await this.findById(galaxyId);
		if (!exists) {
			throw new BadRequest('This is not the galaxy you are looking for');
		} else {
			return await dbContext.Galaxies.findByIdAndDelete(galaxyId);
		}
	}

	async findById(galaxyId) {
		return await dbContext.Galaxies.findById(galaxyId);
	}
}

export const galaxyService = new GalaxyService();
