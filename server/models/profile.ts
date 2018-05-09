

import * as mongoose from 'mongoose';

const sellerprofileSchema = new mongoose.Schema({
  sellertype: String,
  firstname: String,
  lastname: String,
  location: String,
  contactno: Number,
  status: String,
  sellerid: String,
 });

const SellerProfile = mongoose.model('SellerProfile', sellerprofileSchema);

export default SellerProfile;