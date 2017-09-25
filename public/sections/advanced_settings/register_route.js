import routes from 'ui/routes';
import React from 'react';
import { render } from 'react-dom';
import { Page } from './components/page';
import { Provider } from 'react-redux';
import { createIntegratedStore } from '../../store';

const template = '<div id="pageRoot"></div>';

routes
.when('/management/kibana/settingz', {
  template,
  controller: ($injector) => {
    const store = createIntegratedStore($injector);
  
    render(
      <Provider store={store}>
        <Page />
      </Provider>,
      document.getElementById('pageRoot')
    );
  }
});
