const passport = require('passport');
const authService = require('../services/authService');

exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleAuthCallback = passport.authenticate('google', { failureRedirect: '/' });

exports.authCallbackRedirect = async (req, res) => {
  try {
    await authService.handleAuthCallback(req);
    res.send(`
      <html>
        <body>
          <script>
            window.opener.postMessage('authComplete', '*');
            window.close();
          </script>
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
};

exports.getUser = (req, res) => {
  if (req.isAuthenticated()) {
    const { displayName, profileImageUrl } = req.user;
    res.json({ displayName, profileImageUrl });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

exports.logout = (req, res, next) => {
  req.logout(err => {
    if (err) { return next(err); }
    req.session.destroy(() => {
      res.send(`
        <html>
          <body>
            <script>
              window.location.href = 'https://accounts.google.com/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000/';
            </script>
          </body>
        </html>
      `);
    });
  });
};
