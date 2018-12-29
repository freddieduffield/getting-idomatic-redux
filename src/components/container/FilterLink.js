import { connect } from 'react-redux';
import { Link } from '../presentational/index';
import { setVisibilityFilter } from '../../redux/VisibilityFilter/VisibilityFilter';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.setVisibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
