import express from 'express';
import BaseController from '../utils/BaseController';
import { speciesService } from '../services/SpeciesService';

export class SpeciesController extends BaseController {
	constructor() {
		super('api/species');
		this.router
			.get('', this.getAll)
			.post('', this.create)
			.put('/:speciesId', this.edit)
			.delete('/:speciesId', this.delete);
	}
	async getAll(req, res, next) {
		try {
			res.send(await speciesService.getAll());
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			res.send(await speciesService.create(req.body));
		} catch (error) {
			next(error);
		}
	}

	async edit(req, res, next) {
		try {
			res.send(await speciesService.edit(req.params.speciesId, req.body));
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			res.send(await speciesService.delete(req.params.speciesId));
		} catch (error) {
			next(error);
		}
	}
}
