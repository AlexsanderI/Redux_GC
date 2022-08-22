import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options';

const mapState = state => {
  return {
    options: selectedOptionsSelector(state),
  };
};

export default connect(mapState)(Options);
