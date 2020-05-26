const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  //user who interacted with your profile/post
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: String,
  //commented, posted, followed, etc
  notificationType: { type: String, required: true },
  seen: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
