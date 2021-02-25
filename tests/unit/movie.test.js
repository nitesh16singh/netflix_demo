import { expect } from 'chai';
import * as cartService from '../../src/services/cart.service';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

describe('User', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => {});
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('Get Cart', () => {
    it('should return array', async () => {
      const result = await cartService.getAllCart();
      expect(result).to.be.an('array');
    });
  });
});
