import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import Seller from '../models/seller';
import BaseCtrl from './base';

export default class sellerCtrl extends BaseCtrl {
  model = Seller;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, seller) => {
      if (!seller) { return res.sendStatus(403); }
      seller.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ seller: seller }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

}
