let facebookNotif = false;
let slackNotif = false;
let emailNotif = false;
let instagramNotif = false;

//explains the business problem and requirements

//the business problem is that the user wants to be able to recieve notifications from multiple channels at once. One might say, if my house was burning down, I'd like to recieve all the notifications I can. However, if we were to make code that gathers the user wants notifications from all channels, we would have to make a lot of if statements. This is not good code.
//We want to make code that is easy to read and easy to maintain. So, we will use the observer pattern to solve this problem. The observer pattern is a design pattern that allows us to notify multiple objects of a change in state. In this case, we will notify the user of a change in state of the notifications. The user will be able to subscribe to the notifications they want to recieve.
//The user will be able to unsubscribe from the notifications they don't want to recieve. The user will be able to recieve notifications from the notifications they subscribed to. The main purpose is that this solution doesn't bloat the code with if statements and makes it easy to maintain.

//discusses the patterns which could have been applied

//I don't know more than a few patterns so this is the only pattern that would work for the problem at hand. I certainly like this method of solving this particular problem. This is how I would probably solve this problem given the choice.

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
