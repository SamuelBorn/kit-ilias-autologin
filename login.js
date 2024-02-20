const CHOOSE_LOGIN_METHOD_URL = "https://ilias.studium.kit.edu/login.php";
const SHIBBOLETH_BUTTON_ID = "button_shib_login";

const CREDENTIALS_SITE_URL = "https://idp.scc.kit.edu/idp/profile/SAML2/Redirect/SSO";
const PASSWORD_FIELD_ID = "password";
const SUBMIT_BUTTON_ID = "sbmt";

if (window.location.href.includes(CHOOSE_LOGIN_METHOD_URL)) {
  document.getElementById(SHIBBOLETH_BUTTON_ID).click();
}

if (window.location.href.includes(CREDENTIALS_SITE_URL)) {
  const passwordChecker = setInterval(() => {
    if (document.getElementById(PASSWORD_FIELD_ID).value) {
      document.getElementById(SUBMIT_BUTTON_ID).click();
      clearInterval(passwordChecker);
    }
  }, 50);
}
