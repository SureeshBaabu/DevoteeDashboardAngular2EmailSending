import * as express from 'express';

import CatCtrl from './controllers/cat';
import SellerCtrl from './controllers/seller';
import Cat from './models/cat';
import Seller from './models/seller';
import Rat from './models/rat';
import RatCtrl from './controllers/rat';
import Vendor from './models/vendor';
import VendorCtrl from './controllers/vendor';
import VendorBank from './models/vendorbank';
import VendorBankCtrl from './controllers/vendorbank';
import ProfileCtrl from './controllers/profile';
import * as nodemailer from 'nodemailer'

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const sellerCtrl = new SellerCtrl();
  const ratCtrl = new RatCtrl();
  const vendorCtrl = new VendorCtrl();
  const vendorbankCtrl = new VendorBankCtrl();
  const profileCtrl = new ProfileCtrl();
  
  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // // Rats
  router.route('/rats').get(ratCtrl.getAll);
  router.route('/rats/count').get(ratCtrl.count);
  router.route('/rat').post(ratCtrl.insert);
  router.route('/rat/:id').get(ratCtrl.get);
  router.route('/rat/:id').put(ratCtrl.update);
  router.route('/rat/:id').delete(ratCtrl.delete);

  // Vendor
  router.route('/vendors').get(vendorCtrl.getAll);
  router.route('/vendors/count').get(vendorCtrl.count);
  router.route('/vendor').post(vendorCtrl.insert);
  router.route('/vendor/:id').get(vendorCtrl.get);
  router.route('/vendor/:id').put(vendorCtrl.update);
  router.route('/vendor/:id').delete(vendorCtrl.delete);

  // Vendor Bank
  router.route('/vendorbanks').get(vendorbankCtrl.getAll);
  router.route('/vendorbanks/count').get(vendorbankCtrl.count);
  router.route('/vendorbank').post(vendorbankCtrl.insert);
  router.route('/vendorbank/:id').get(vendorbankCtrl.get);
  router.route('/vendorbank/:id').put(vendorbankCtrl.update);
  router.route('/vendorbank/:id').delete(vendorbankCtrl.delete);

  // Sellers
  router.route('/login').post(sellerCtrl.login);
  router.route('/sellers').get(sellerCtrl.getAll);
  router.route('/sellers/count').get(sellerCtrl.count);
  router.route('/seller').post(sellerCtrl.insert);
  router.route('/seller/:id').get(sellerCtrl.get);
  router.route('/seller/:id').put(sellerCtrl.update);
  router.route('/seller/:id').delete(sellerCtrl.delete);

  // Seller Deatils 
  // router.route('/profiles').get(profileCtrl.getAll);
  // router.route('/profiles/count').get(profileCtrl.count);
  router.route('/sellerprofile').post(profileCtrl.insert);
  router.route('/getsellerprofile/:id').get(profileCtrl.getBySellerProfileid);
  router.route('/updatesellerprofile/:id').put(profileCtrl.updateBySellerProfileid);
  // router.route('/profile/:id').delete(profileCtrl.delete);
 
  

// const output = ${req.body.username}

router.post('/sendemail', (req,res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: 'cse928@gmail.com',
      pass: '9492488174'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const output = `
  Name:  ${req.body.username}<br>
  Email: ${req.body.email}<br>
  Phone Number:${req.body.phoneno}<br>
  Message:${req.body.message}`

  let HelperOptions = {
    from: '"suresh" <cse928@gmail.com>',
    to: 'info@lakshyait.in;, dasarisowmya@lakshyait.in, yvr.sravani@gmail.com',
    subject: 'From Devotee Website' ,
    text: 'Hello',
    html: output,
  };
  
    transporter.sendMail(HelperOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("The message was sent!");
      console.log(info);
    });
  
})

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
