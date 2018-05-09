
import Seller from "../models/seller";
import SellerProfile from '../models/profile';
import BaseCtrl from './base';

export default class ProfileCtrl extends BaseCtrl {

  model = SellerProfile;

   
   getBySellerProfileid = (req, res) => {
    this.model.findOne({ sellerid: req.params.id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }


  updateBySellerProfileid = (req, res) => {
    this.model.findOneAndUpdate({sellerid : req.params.id },req.body, (err, item1) => {
      if (err) { return console.log(err); }
      console.log(item1);
      res.status(200).json(item1);
    });
  }
  }
