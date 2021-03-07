import { connect } from "react-redux";
import {
} from "../redux/actions"
import {buildTableStyle} from "../tableUtils";

const Table = ({table}) => (
    <div className="table" style={buildTableStyle(table.tableType, table.tableColor)}/>
)

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
})

export default connect(
    mapStateToProps,
    {
    }
)(Table);
