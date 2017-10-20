import { connect } from 'react-redux'
import JediList from '../components/JediList'
import { findAll, save, remove } from '../../../../actions/jedi';

const mapDispatchToProps = {
    findAll,
    save,
    remove,
};

const mapStateToProps = (state) => ({
  items: state.jedi,
})

export default connect(mapStateToProps, mapDispatchToProps)(JediList)