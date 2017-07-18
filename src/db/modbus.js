import sequelize from './db';

const modbus = sequelize.define('modbus', {
  name: { type: Sequelize.STRING },
  host: { type: Sequelize.STRING },
  port: { type: Sequelize.INTEGER },
  timeout: { type: Sequelize.INTEGER },
});

export default modbus;
