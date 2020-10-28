import express from 'express';
import BaseController from '../utils/BaseController';
import { galaxyService } from '../services/GalaxyService';

export class GalaxyController extends BaseController {
	constructor() {
		super('api/galaxy');
		this.router
			.get('', this.getAll)
			.post('', this.create)
			.put('/:galaxyId', this.edit)
			.delete('/:galaxyId', this.delete);
	}
	async getAll(req, res, next) {
		try {
			res.send(await galaxyService.getAll());
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			res.send(await galaxyService.create(req.body));
		} catch (error) {
			next(error);
		}
	}

	async edit(req, res, next) {
		try {
			res.send(await galaxyService.edit(req.params.galaxyId, req.body));
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			res.send(await galaxyService.delete(req.params.galaxyId));
		} catch (error) {
			next(error);
		}
	}
}
