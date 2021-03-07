import { connect } from "react-redux";
import {
} from "../redux/actions"

const Table = ({table}) => (
    <div className="table" style={table.style}/>
)

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
})

export default connect(
    mapStateToProps,
    {
    }
)(Table);
