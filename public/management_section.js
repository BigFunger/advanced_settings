import { management } from 'ui/management';

management.getSection('elasticsearch').register('advanced_settings', {
  display: 'Advanced Settingz',
  order: 25,
  url: '#/management/kibana/settingz'
});
