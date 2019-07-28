import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext; 
    render() {
        const textLabel = this.context.language === 'english' ? 'Name' : 'Naam';
        return(
             <div className="ui field">
                <label>{textLabel}</label>
                <input />
            </div>
        );
    }
}

export default Field;