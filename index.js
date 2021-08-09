module.exports = validateEmail;

function validateEmail(emailAddress) {
  const emailEx = /^[^.](.*[^.])?@[^_.-]([^_.]*[^_.-])?(\.[^_.-]([^_.]*[^_.-])?)*$/;
  if (!emailAddress.match(emailEx)) {
    return false;
  }

  // add further checks here
  return true;
}
