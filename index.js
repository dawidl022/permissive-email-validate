module.exports = validateEmail;

function validateEmail(emailAddress) {
  emailEx = /^[^.](.*[^.])?@[^.-](.*[^.-])?(\.[^.-](.*[^.-])?)*$/;
  return !!emailAddress.match(emailEx);
}
