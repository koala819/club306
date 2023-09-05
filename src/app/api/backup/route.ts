const { backupTable } = require('@/lib/backupSupabase');
const cron = require('node-cron');

cron.schedule('0 0 * * *', async () => {
  await backupTable('car_colors');
  await backupTable('car_finitions');
  await backupTable('car_models');
  await backupTable('cars');
  await backupTable('members');
  await backupTable('museum');
  await backupTable('partners_codePromo');
});
