const GrabSelected = ({ selected, resetSelected }) => {
    return (
        <div className="pop">
            <div className="url-container">
                <p className="url-text">URL {selected.image_url}</p>
                <p className="url-text">Type ID: {selected.type_id}</p>
            </div>
            <button onClick={resetSelected}>Go Back</button>
        </div>
    );
}

export default GrabSelected;