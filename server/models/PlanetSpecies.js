import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const PlanetSpecies = new Schema(
	{
		planet  : { type: ObjectId, ref: 'Planet' },
		species : { type: ObjectId, ref: 'Species' }
	},
	{ timestamps: true, toJSON: { virtuals: true } }
);

export default PlanetSpecies;
