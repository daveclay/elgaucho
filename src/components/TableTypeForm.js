import {connect} from "react-redux";
import {
  onOpenTableTypeForm,
  onUpdateTableTypeName,
  onCloseTableTypeForm,
  onSaveTableTypeForm
} from "../redux/actions"
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import TableIcon from "./TableIcon";

const tableNameDisplay = (tableType) => {
  if (tableType.isNew) {
    return "New Table Type"
  } else {
    return `Table ${tableType.name}`
  }
}

const TableTypeForm = ({
                     tableTypeForm,
                     onUpdateTableTypeName,
                     onCloseTableTypeForm,
                     onSaveTableTypeForm
}) => (
    <div id="table-form">
      <Modal show={tableTypeForm.visible} onHide={onCloseTableTypeForm}>
        <Modal.Header closeButton>
          <Modal.Title>{tableNameDisplay(tableTypeForm.tableType)}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="table-form-modal">
          <Container>
            <Row>
              <Col>
                <TableIcon table={tableTypeForm.tableType}/>
              </Col>
              <Col>
                <Form>
                  <Form.Control type="text"
                                value={tableTypeForm.tableType.name}
                                onChange={(e) => onUpdateTableTypeName(e.target.value)}/>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseTableTypeForm}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onSaveTableTypeForm}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  tableTypeForm: state.tableTypeForm
})

export default connect(
  mapStateToProps,
  {
    onOpenTableTypeForm,
    onUpdateTableTypeName,
    onCloseTableTypeForm,
    onSaveTableTypeForm
  }
)(TableTypeForm);
