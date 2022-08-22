import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.action';

const mapState = state => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
