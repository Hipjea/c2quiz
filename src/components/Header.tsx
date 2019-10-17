import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <section>
                    <h1 className="title">
                        <NavLink to='/'>
                            C<sup>2</sup> pour l'emploi
                        </NavLink>
                    </h1>
                </section>
            </header>
        );
    }
}