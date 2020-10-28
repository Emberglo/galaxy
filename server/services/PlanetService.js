import { dbContext } from '../db/DbContext';
import { BadRequest } from '../utils/Errors';

class PlanetService {
	async getAll() {
		return await dbContext.Planets.find();
	}

	async create(body) {
		return await dbContext.Planets.create(body);
	}

	async edit(planetId, body) {
		let exists = await this.findById(planetId);
		if (!exists) {
			throw new BadRequest('This is not the planet you are looking for');
		} else {
			return await dbContext.Planets.findByIdAndUpdate(planetId, body, { new: true });
		}
	}

	async delete(planetId) {
		let exists = await this.findById(planetId);
		if (!exists) {
			throw new BadRequest('This is not the planet you are looking for');
		} else {
			return await dbContext.Planets.findByIdAndDelete(planetId);
		}
	}

	async findById(planetId) {
		return await dbContext.Planets.findById(planetId);
	}
}

export const planetService = new PlanetService();
