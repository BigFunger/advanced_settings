import { connect } from 'react-redux';
import { Page as PresentationComponent } from './page';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
}

export const Page = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
