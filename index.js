module.exports = validateEmail;

function validateEmail(emailAddress) {
  const emailEx = /^[^.](.*[^.])?@[^.-](.*[^.-])?(\.[^.-](.*[^.-])?)*$/;
  return !!emailAddress.match(emailEx);
}
