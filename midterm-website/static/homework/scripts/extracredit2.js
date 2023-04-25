let facebookNotif = false;
let slackNotif = false;
let emailNotif = false;
let instagramNotif = false;

function addFacebookNotifications() {
  facebookNotif = true;
}
function addEmailNotifications() {
  emailNotif = true;
}

function addInstagramNotifications() {
  instagramNotif = true;
}

function addSlackNotifications() {
  slackNotif = true;
  console.log(slackNotif);
}

function sendNotifications() {
  if (facebookNotif) {
    document.getElementById('facebook').innerText =
      'Notification from facebook!';
  }
  if (slackNotif) {
    document.getElementById('slack').innerText = 'Notification from slack!';
  }
  if (emailNotif) {
    document.getElementById('email').innerText = 'You have a email!';
  }
  if (instagramNotif) {
    document.getElementById('instagram').innerText =
      'Notification from instagram!';
  }
  slackNotif = false;
  facebookNotif = false;
  emailNotif = false;
  instagramNotif = false;
}
function clearIt() {
  console.log('x');
  document.getElementById('facebook').innerText = '';
  document.getElementById('slack').innerText = '';
  document.getElementById('email').innerText = '';
  document.getElementById('instagram').innerText = '';
}
