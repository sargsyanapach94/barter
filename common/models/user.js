var config = require('../../server/config.json');
var path = require('path');

module.exports = function(User) {

  User.validatesUniquenessOf('email');

  // var InventoryDefinition = { 
  //     id: {type: String, id: 1}, 
  //     user_id: {type: String, id: 2}
  //   }

  // // listProjects
  // User.listProjects = function(cb) {
  //   User.find({
  //     fields: {
  //       balance: false
  //     }
  //   }, cb);
  // };
  // User.remoteMethod('listProjects', {
  //   returns: {arg: 'projects', type: 'array'},
  //   http: {path:'/list-projects', verb: 'get'}
  // });

  // //send verification email after registration
  // User.afterRemote('create', function(context, User) {
  //   console.log('> User.afterRemote triggered');

  //   var options = {
  //     type: 'email',
  //     to: User.email,
  //     from: 'noreply@loopback.com',
  //     subject: 'Thanks for registering.',
  //     template: path.resolve(__dirname, '../../server/views/verify.ejs'),
  //     redirect: '/verified',
  //     User: User
  //   };

  //   User.verify(options, function(err, response) {
  //     if (err) {
  //       next(err);
  //       return;
  //     }

  //     console.log('> verification email sent:', response);

  //     context.res.render('response', {
  //       title: 'Signed up successfully',
  //       content: 'Please check your email and click on the verification link '
  //         + 'before logging in.',
  //       redirectTo: '/',
  //       redirectToLinkText: 'Log in'
  //     });
  //   });
  // });

  // //send password reset link when requested
  // User.on('resetPasswordRequest', function(info) {
  //   var url = 'http://' + config.host + ':' + config.port + '/reset-password';
  //   var html = 'Click <a href="' + url + '?access_token=' + info.accessToken.id
  //     + '">here</a> to reset your password';

  //   User.app.models.Email.send({
  //     to: info.email,
  //     from: info.email,
  //     subject: 'Password reset',
  //     html: html
  //   }, function(err) {
  //     if (err) return console.log('> error sending password reset email');
  //     console.log('> sending password reset email to:', info.email);
  //   });
  // });
};