import { dbContext } from '../db/DbContext';
import { BadRequest } from '../utils/Errors';

class SpeciesService {
	async getAll() {
		return await dbContext.Species.find();
	}

	async create(body) {
		return await dbContext.Species.create(body);
	}

	async edit(speciesId, body) {
		let exists = await this.findById(speciesId);
		if (!exists) {
			throw new BadRequest('This is not the species you are looking for');
		} else {
			return await dbContext.Species.findByIdAndUpdate(speciesId, body, { new: true });
		}
	}

	async delete(speciesId) {
		let exists = await this.findById(speciesId);
		if (!exists) {
			throw new BadRequest('This is not the species you are looking for');
		} else {
			return await dbContext.Species.findByIdAndDelete(speciesId);
		}
	}

	async findById(speciesId) {
		return await dbContext.Species.findById(speciesId);
	}
}

export const speciesService = new SpeciesService();
