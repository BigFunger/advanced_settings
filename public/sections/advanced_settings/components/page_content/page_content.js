import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiLink,
  KuiTitle,
  KuiPageContent,
  KuiPageContentBody,
  KuiPageContentHeader,
  KuiPageContentHeaderSection,
  KuiSpacer
} from 'ui_framework/components';

export class PageContent extends React.Component {
  render = () => {
    return (
      <KuiPageContent>
        <KuiPageContentHeader>
          <KuiPageContentHeaderSection>
            <KuiTitle>
              <h2>Advanced Settings</h2>
            </KuiTitle>
          </KuiPageContentHeaderSection>
        </KuiPageContentHeader>
        <KuiPageContentBody>
          <h1>Why, hello there!</h1>
        </KuiPageContentBody>
      </KuiPageContent>
    );
  }
}