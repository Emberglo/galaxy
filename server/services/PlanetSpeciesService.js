import { dbContext } from '../db/DbContext';
import { BadRequest } from '../utils/Errors';

class PlanetSpeciesService {
	async getAll() {
		return await dbContext.Homes.find();
	}

	async create(body) {
		return await dbContext.Homes.create(body);
	}

	async edit(planetSpeciesId, body) {
		let exists = await this.findById(planetSpeciesId);
		if (!exists) {
			throw new BadRequest('This is not the planetSpecies you are looking for');
		} else {
			return await dbContext.Homes.findByIdAndUpdate(planetSpeciesId, body, { new: true });
		}
	}

	async delete(planetSpeciesId) {
		let exists = await this.findById(planetSpeciesId);
		if (!exists) {
			throw new BadRequest('This is not the planetSpecies you are looking for');
		} else {
			return await dbContext.Homes.findByIdAndDelete(planetSpeciesId);
		}
	}

	async findById(planetSpeciesId) {
		return await dbContext.Homes.findById(planetSpeciesId);
	}
}

export const planetSpeciesService = new PlanetSpeciesService();
