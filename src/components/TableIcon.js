import { connect } from "react-redux";
import {buildTableStyle} from "../tableUtils";

const TableIcon = ({table}) => (
    <div className="table" style={
      buildTableStyle(table.tableType, table.tableColor)
    }/>
)

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
})

export default connect(
    mapStateToProps,
)(TableIcon);
