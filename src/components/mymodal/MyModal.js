import Modal from 'react-bootstrap/Modal';

function MyModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    props?.children
                }
            </Modal.Body>
        </Modal>
    );
}

export default MyModal;