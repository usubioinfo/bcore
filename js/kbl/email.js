
(() => {
  const sendButton = document.querySelector('#send-button');

  sendButton.addEventListener('click', e => {
    console.log('test');
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const phone = document.getElementById('form-phone').value;
    const body = document.getElementById('form-body').value;

    const messageBody = body + '\n\nEmail - ' + email + '\nPhone - ' + phone;

    const options = {
      messageBody,
      subjectLine: `BioinfoCore - New Message from ${name}`,
      recipient: 'rkaundal@usu.edu',
      password: 'rkU56a%e$',
      user: 'noreply'
    }

    axios.post('http://bioinfocore.usu.edu/api/email/send', options)
      .then((res) => {
        console.log(res);
      });

  });
})();
