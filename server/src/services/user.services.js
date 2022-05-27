const bcrypt = require("bcryptjs");
const { User } = require("../db");

async function create(params) {
  if (await User.findOne({ where: { email: params.email } })) {
    throw 'Email" ' + params.email + ' "  se Encuentra Registrado';
  } else if (await User.findOne({ where: { dni: params.dni } })) {
    throw 'Dni  "' + params.dni + ' " se encuentra registrado';
  }
  const user = new User(params);

  user.password = await hash(params.password);

  await user.save();
  return basicDetails(user);
}

async function getById(id) {
  const account = await getAccount(id);
  return basicDetails(account);
}

async function update(id, params) {
  const account = await getAccount(id);

  // validate (if email was changed)
  if (
    params.email &&
    account.email !== params.email &&
    (await db.Account.findOne({ where: { email: params.email } }))
  ) {
    throw 'Email "' + params.email + '" Esta en uso ';
  }

  // hash password if it was entered
  if (params.password) {
    params.password = await hash(params.password);
  }

  // copy params to account and save
  Object.assign(account, params);
  account.updated = Date.now();
  await account.save();

  return basicDetails(account);
}

async function getAccount(id) {
  const account = await User.findByPk(id);
  if (!account) throw "Account not found";
  return account;
}

function basicDetails(user) {
  const { id, firt_name, last_name, email,dni, role, created, updated } = user;
  return { id, firt_name, last_name, email,dni, role, created, updated };
}

const hash = (password) => {
  return bcrypt.hashSync(password, 10);
};

module.exports = {
  create,
  update,
};
