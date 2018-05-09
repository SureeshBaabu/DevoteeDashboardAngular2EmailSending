import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
  sellername: String,
  email: { type: String, unique: true, lowercase: true, trim: true },
  password: String,
  role: String
});

// Before saving the seller, hash the password
sellerSchema.pre('save', function(next) {
  const seller = this;
  if (!seller.isModified('password')) { return next(); }
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }
    bcrypt.hash(seller.password, salt, function(error, hash) {
      if (error) { return next(error); }
      seller.password = hash;
      next();
    });
  });
});

sellerSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

// Omit the password when returning a seller
sellerSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    delete ret.password;
    return ret;
  }
});

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;
