import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import Options from './Options';

const mapState = state => {
  return {
    options: availableOptionsSelector(state),
  };
};

export default connect(mapState)(Options);
