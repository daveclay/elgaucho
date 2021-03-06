import { connect } from "react-redux";
import {
} from "../redux/actions"

const TableLayout = ({tables}) => (
    <div id="container">
        {

        }
    </div>
)

const mapStateToProps = state => ({
    tables: state.tables
})

export default TableLayout