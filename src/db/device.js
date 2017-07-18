import sequelize from './db';

const modbus = sequelize.define('device', {
  id: { type: Sequelize.UUID },
  modbusId: { type: Sequelize.UUID },
  name: { type: Sequelize.STRING },
  desc: { type: Sequelize.STRING },
});

export default modbus;
