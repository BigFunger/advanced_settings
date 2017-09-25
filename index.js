module.exports = function (kibana) {
  return new kibana.Plugin({
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      managementSections: [
        'plugins/advanced_settings',
      ]
    },
    init: (server) => {}
  });
};
