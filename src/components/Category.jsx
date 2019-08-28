import React, { Component } from 'react';
import Statement from './Statement';

class Category extends Component {    
    render() {
        const data = this.props.category;

        return (
            <div key={data.id} className="mt-5">
                <h4 className="subtitle">{data.name}</h4>
                { data.statements &&
                    data.statements.map((stmt) => {
                        return ( 
                            <Statement key={stmt.id} statement={stmt} />
                        );
                    })
                }
            </div>
        );
    }
}

export default Category;