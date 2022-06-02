ev.preventDefault();

const senderEmail = document
  .getElementById('emailInput').value;
const senderMessage = document
  .getElementById('messageInput').value;

const webhookBody = {
  embeds: [{
    title: 'Contact Form Submitted',
    fields: [
      { name: 'Sender', value: senderEmail },
      { name: 'Message', value: senderMessage }
    ]
  }],
};