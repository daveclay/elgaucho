import {connect} from "react-redux";
import {
  onOpenTableTypeForm,
  onUpdateTableTypeName,
  onCloseTableTypeForm,
  onSaveTableTypeForm,
  onAdjustTableSize
} from "../redux/actions"
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import TableIcon from "./TableIcon";

const tableNameDisplay = (tableType) => {
  if (tableType.id) {
    return `Table ${tableType.name}`
  } else {
    return "New Table Type"
  }
}

const TableTypeForm = ({
                         tableTypeForm,
                         onUpdateTableTypeName,
                         onCloseTableTypeForm,
                         onSaveTableTypeForm,
                         onAdjustTableSize
                       }) => (
  <div id="table-form">
    <Modal show={tableTypeForm.visible} onHide={onCloseTableTypeForm}>
      <Modal.Header closeButton>
        <Modal.Title>{tableNameDisplay(tableTypeForm.tableType)}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="table-form-modal">
        <Form>
          <Container>
            <Row>
              <Col>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text"
                                value={tableTypeForm.tableType.name}
                                onChange={(e) =>
                                  onUpdateTableTypeName(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="width">
                  <Form.Label>Width</Form.Label>
                  <Form.Control type="range"
                                value={tableTypeForm.tableType.style.width}
                                min={10}
                                max={200}
                                onChange={(e) =>
                                  onAdjustTableSize(e.target.value, tableTypeForm.tableType.style.height) }/>
                </Form.Group>
                <Form.Group controlId="height">
                  <Form.Label>Height</Form.Label>
                  <Form.Control type="range"
                                value={tableTypeForm.tableType.style.height}
                                min={10}
                                max={200}
                                onChange={(e) =>
                                  onAdjustTableSize(tableTypeForm.tableType.style.width, e.target.value) }/>
                </Form.Group>
              </Col>
              <Col>
                <TableIcon table={{
                  name: "foo",
                  tableType: tableTypeForm.tableType
                }}/>
              </Col>
            </Row>
          </Container>
        </Form>
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
    onSaveTableTypeForm,
    onAdjustTableSize
  }
)(TableTypeForm);
