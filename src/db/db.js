import Sequelize from 'sequelize';

const sequelize = new Sequelize({
  // SQLite only
  storage: '~/corework.sqlite',
});
export default sequelize;
