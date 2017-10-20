import { connect } from 'react-redux'
import SithList from '../components/SithList'
import { findAll, save, remove } from '../../../../actions/sith';

const mapDispatchToProps = {
    findAll,
    save,
    remove,
};

const mapStateToProps = (state) => ({
  items: state.sith,
})

export default connect(mapStateToProps, mapDispatchToProps)(SithList)