import sequelize from './db';

const modbus = sequelize.define('register', {
  id: { type: Sequelize.UUID },
  deviceId: { type: Sequelize.UUID },
  name: { type: Sequelize.STRING },
  addr: { type: Sequelize.INTEGER },
  range: { type: Sequelize.INTEGER },
  type: { type: Sequelize.STRING },
  desc: { type: Sequelize.STRING },
});

export default modbus;
