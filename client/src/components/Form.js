import React from 'react'

const Form = props => {
    const { onSubmitHandler , initialData } = props;
    const [form, setForm] = React.useState(initialData);

    return (
        <form onSubmit={e => { onSubmitHandler (e, form ) }} className="pirate-form">
            <div className="form-section-left">
                <div className="form-group">
                    <label>Pirate Name:</label>
                    <input type="text" name="pirateName" value={form.pirateName} onChange = {(e) => setForm({...form,[e.target.name]: e.target.value})}/>
                    {form.pirateName.length < 1 && (
                        <span style={{color:"red"}}>Name is required!</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Image Url:</label>
                    <input type="text" name="image" value={form.image} onChange = {(e) => setForm({...form,[e.target.name]: e.target.value})}/>
                    {form.image.length < 1 && (
                        <span style={{color:"red"}}>Image Url is required!</span>
                    )}
                </div>
                <div className="form-group">
                    <label># of Treasure Chests:</label>
                    <select name="treasures" value={form.treasures} onChange = {(e) => setForm({...form,[e.target.name]: e.target.value})}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {form.treasures < 1 && (
                        <span style={{color:"red"}}>A value greater than 0 is required!</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Pirate Catch Phrase:</label>
                    <textarea name="phrase" cols="30" rows="3" value={form.phrase} onChange = {(e) => setForm({...form,[e.target.name]: e.target.value})}></textarea>
                    {form.phrase.length < 1 && (
                        <span style={{color:"red"}}>Phrase is required!</span>
                    )}
                </div>
            </div>
            <div className="form-section-right">
                <div className="form-group">
                    <label>Crew Position:</label>
                    <select name="position" value={form.position} onChange = {(e) => setForm({...form,[e.target.name] : e.target.value})}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey" selected>Powder Monkey</option>
                    </select>
                </div>
                <div className="form-group">
                    <p><input type="checkbox" name="pegLeg" checked={form.pegLeg} onChange = {(e) => setForm({...form,[e.target.name]: e.target.checked})}/> Peg Leg</p>
                    <p><input type="checkbox" name="eyePatch" checked={form.eyePatch} onChange = {(e) => setForm({...form,[e.target.name]: e.target.checked})} /> Eye Patch</p>
                    <p><input type="checkbox" name="hookHand" checked={form.hookHand} onChange = {(e) => setForm({...form,[e.target.name]: e.target.checked})} /> Hook Hand</p>
                </div>
                <button type="submit" className="newPirate-btn">Submit</button>
            </div>
        </form>     
    )
}

export default Form
