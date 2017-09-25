import { connect } from 'react-redux';
import { PageContent as PresentationComponent } from './page_content';

const mapStateToProps = (state) => {
  const {
    datagenEdit: {
      uiState: {
        selectedTabId
      }
    }
  } = state;
  
  return {
    selectedTabId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const PageContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);