import { connect } from "react-redux";
import {
} from "../redux/actions"
import Table from "./Table"

const TableLayout = ({tables}) => (
    <div id="container">
        {
            tables.map(table => {
                return <Table key={table.name} table={table}/>
            })
        }
    </div>
)

const mapStateToProps = state => ({
    tables: state.tables
})

export default connect(
    mapStateToProps,
    {
    }
)(TableLayout);