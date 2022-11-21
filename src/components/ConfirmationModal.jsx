import React from 'react';

const ConfirmationModal = ({ _id, name, closeModal, handleDeleteDoctor }) => {
    return (
        <>
            <input type="checkbox" id="confirmation_modal" className="modal-toggle" />
            <div className="modal bg-black bg-opacity-30">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-xl">Confirm delete</h3>
                    <h3 className="mt-2 text-lg">Are your sure want to delete <strong>{name}?</strong></h3>
                    <div className="modal-action">
                        <button onClick={() => handleDeleteDoctor(_id)} className='btn bg-red-500 border-0 hover:bg-red-700 text-white'>Delete</button>
                        <label htmlFor="confirmation_modal" onClick={closeModal} className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationModal;