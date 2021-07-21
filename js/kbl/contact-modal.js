(() => {
  document.getElementById('modal-send').addEventListener('click', e => {

    const name = document.getElementById('modal-formName').value;
    const email = document.getElementById('modal-formEmail').value;
    const phone = document.getElementById('modal-formPhone').value;
    const noSamples = document.getElementById('modal-formSamples').value;
    const services = document.getElementById('modal-formServices').value;

    const messageBody = `${services} requested on ${noSamples} samples. Contact back at ${email} or ${phone}`;

    const body = {
      password: 'rkU56a%e$',
      subjectLine: `BioinfoCore Request from ${name} for ${noSamples} Samples`,
      recipient: 'itsme@shelbymccowan.com',
      messageBody: messageBody
    }

    axios.post('http://bioinfocore.usu.edu/api/email/send', body)
      .then(res => {
        console.log(res);
        document.getElementById('modal-formName').value = '';
        document.getElementById('modal-formEmail').value = '';
        document.getElementById('modal-formPhone').value = '';
        document.getElementById('modal-formMessage').value = '';
      })
  })
})();