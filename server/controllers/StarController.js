import express from 'express';
import BaseController from '../utils/BaseController';
import { starService } from '../services/StarService';

export class StarController extends BaseController {
	constructor() {
		super('api/stars');
		this.router
			.get('', this.getAll)
			.post('', this.create)
			.put('/:starId', this.edit)
			.delete('/:starId', this.delete);
	}
	async getAll(req, res, next) {
		try {
			res.send(await starService.getAll());
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			res.send(await starService.create(req.body));
		} catch (error) {
			next(error);
		}
	}

	async edit(req, res, next) {
		try {
			res.send(await starService.edit(req.params.starId, req.body));
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			res.send(await starService.delete(req.params.starId));
		} catch (error) {
			next(error);
		}
	}
}
