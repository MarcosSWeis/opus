const bcrypt = require("bcryptjs");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

async function validateResetToken({ token }) {
  const user = await User.findOne({
    where: {
      resetToken: token,
      resetTokenExpires: { [Op.gt]: Date.now() },
    },
  });

  if (!user) throw "Invalid token";

  return user;
}

async function forgotPassword({ email }) {
  const user = await User.findOne({
    where: { email },
  });
  if (!user) return;

  user.resetToken = randomTokenString();
  user.resetTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  await user.save();

  await sendPasswordResetEmail(user, origin);
}

function randomTokenString() {
  return crypto.randomBytes(40).toString("hex");
}

async function sendPasswordResetEmail(user, origin) {
  let message;

  if (origin) {
    const resetUrl = `${origin}/reset-password?tken=${user.resetToken}`;
    message = `<p>Porfavor ve al siguiente link y cambia tu password el link es valido por  1 day:</p>
<p><a href="${resetUrl}">${resetUrl}</a></p>`;
  } else {
    message = `<p>Porfavor use el siguiente token para cambiar su password   <code>/user/reset-password</code> api route:</p>
<p><code>${user.resetToken}</code></p>`;
  }

  await sendEmail({
    to: user.email,
    subject: "Lupo- Reset Password",
    html: `<h4>Reset Password Email</h4>
           ${message}`,
  });
}

async function resetPassword({ token, password }) {
  const user = await validateResetToken({ token });

  user.password = await hash(password);
  user.password = Date.now();
  user.resetToken = null;
  await user.save();
}

const hash = (password) => {
  return bcrypt.hashSync(password, 10);
};

module.exports = {
  resetPassword,
  forgotPassword,
  validateResetToken,
};
