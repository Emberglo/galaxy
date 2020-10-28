import express from 'express';
import BaseController from '../utils/BaseController';
import { moonService } from '../services/MoonService';

export class MoonController extends BaseController {
	constructor() {
		super('api/moons');
		this.router
			.get('', this.getAll)
			.post('', this.create)
			.put('/:moonId', this.edit)
			.delete('/:moonId', this.delete);
	}
	async getAll(req, res, next) {
		try {
			res.send(await moonService.getAll());
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			res.send(await moonService.create(req.body));
		} catch (error) {
			next(error);
		}
	}

	async edit(req, res, next) {
		try {
			res.send(await moonService.edit(req.params.moonId, req.body));
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			res.send(await moonService.delete(req.params.moonId));
		} catch (error) {
			next(error);
		}
	}
}
