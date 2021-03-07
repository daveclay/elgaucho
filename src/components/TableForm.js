import {connect} from "react-redux";
import {
  onOpenTableForm,
  onCloseTableForm,
} from "../redux/actions"
import TableTypeDropdown from "./TableTypeDropdown";
import TableColorDropdown from "./TableColorDropdown";
import {Button, Modal} from "react-bootstrap";
import TableIcon from "./TableIcon";

const TableForm = ({
                    tableForm,
                    onOpenTableForm,
                    onCloseTableForm,
}) => (
    <div id="table-form">
      <div className="config-option">
        <Button variant="primary" onClick={() => onOpenTableForm()}>Add Table</Button>
      </div>
      <Modal show={tableForm.visible} onHide={onCloseTableForm}>
        <Modal.Header closeButton>
          <Modal.Title>Table Options</Modal.Title>
        </Modal.Header>
        <Modal.Body className="table-form-modal">
          <div>
            <TableTypeDropdown />
            <TableColorDropdown />
          </div>
          <div>
            <TableIcon table={tableForm.table}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseTableForm}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onCloseTableForm}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  tableForm: state.tableForm
})

export default connect(
  mapStateToProps,
  {
    onOpenTableForm,
    onCloseTableForm
  }
)(TableForm);
