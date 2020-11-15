import React from 'react';
import ReactDOM from 'react-dom';

class First extends React.Component {
    render() {
        return (<div>
            <h2>{this.props.place} </h2>
            <label>Country</label>
            <select>
                <option >teste</option>
                {/*<option >{{ country }}</option> */}
            </select>
            <label>Team</label>
            <input type="text" />
            <label>Player</label>
            <input type="text" />
            <label>Character 1</label>
            <select>
                <option>teste</option>
                {/*<option >{{ character }}</option> */}
            </select>
            <label>Color</label>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
            </select>
            <label>Character 2</label>
            <select>
                <option>teste</option>
                {/*<option >{{ character }}</option> */}
            </select>
            <label>Character 3</label>
            <select>
                <option>teste</option>
                {/*<option >{{ character }}</option> */}
            </select>
            
        </div>);
    }
}

export default First;