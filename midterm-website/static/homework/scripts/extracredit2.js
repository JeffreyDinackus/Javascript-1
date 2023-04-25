let facebookNotif = false;
let slackNofif = false;
let emailNotif = false;
let instagramNotif = false;

function addFacebookNotifications() {}

function addEmailNotifications() {}

function addInstagramNotifications() {}

function addSlackNotifications() {
  slackNofif = true;
}

function sendNotifications() {
  if (facebookNotif) {
  }
  if (slackNofif) {
    document.getElementById('slack').innerText = 'Notification from slack!';
  }
  if (emailNotif) {
    console.log('Email notification sent');
  }
  if (instagramNotif) {
    console.log('Instagram notification sent');
  }
  slackNotif = false;
  facebookNotif = false;
  emailNotif = false;
  instagramNotif = false;
}
