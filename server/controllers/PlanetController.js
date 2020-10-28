import express from 'express';
import BaseController from '../utils/BaseController';
import { planetService } from '../services/PlanetService';

export class PlanetController extends BaseController {
	constructor() {
		super('api/planets');
		this.router
			.get('', this.getAll)
			.post('', this.create)
			.put('/:planetId', this.edit)
			.delete('/:planetId', this.delete);
	}
	async getAll(req, res, next) {
		try {
			res.send(await planetService.getAll());
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			res.send(await planetService.create(req.body));
		} catch (error) {
			next(error);
		}
	}

	async edit(req, res, next) {
		try {
			res.send(await planetService.edit(req.params.planetId, req.body));
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			res.send(await planetService.delete(req.params.planetId));
		} catch (error) {
			next(error);
		}
	}
}
