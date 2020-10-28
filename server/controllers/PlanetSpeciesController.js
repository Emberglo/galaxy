import express from 'express';
import BaseController from '../utils/BaseController';
import { planetSpeciesService } from '../services/PlanetSpeciesService';

export class PlanetSpeciesController extends BaseController {
	constructor() {
		super('api/planetSpecies');
		this.router
			.get('', this.getAll)
			.post('', this.create)
			.put('/:planetSpeciesId', this.edit)
			.delete('/:planetSpeciesId', this.delete);
	}
	async getAll(req, res, next) {
		try {
			res.send(await planetSpeciesService.getAll());
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			res.send(await planetSpeciesService.create(req.body));
		} catch (error) {
			next(error);
		}
	}

	async edit(req, res, next) {
		try {
			res.send(await planetSpeciesService.edit(req.params.planetSpeciesId, req.body));
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			res.send(await planetSpeciesService.delete(req.params.planetSpeciesId));
		} catch (error) {
			next(error);
		}
	}
}
