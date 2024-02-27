
const AddDog = ({ add, handleAddChange, handleSubmit }) => {
    const defaultURL = add.image_url || '';
    const defaultType = add.type_id || '';

    return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputURL" className="form-label">Dog URL</label>
            <input 
            value={defaultURL} 
            placeholder="Only valid url from Dog API" 
            type="text" 
            className="form-control" 
            id="exampleInputURL" 
            aria-describedby="emailHelp" 
            onChange={handleAddChange}
            name="image_url"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputId" className="form-label">Type ID</label>
            <input 
            value={defaultType} 
            placeholder="See the list from Breeds" 
            type="id" 
            className="form-control" 
            id="exampleInputId" 
            onChange={handleAddChange}
            name="type_id"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )    
}

export default AddDog;