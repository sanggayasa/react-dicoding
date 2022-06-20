import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';
import './style/style.css';


class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log('Component created!');

    }

    render() {
        return <div className='conatiner'>

            <p>Halaman, {this.props.name} </p>
        <ContactApp /></div>;
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<div><MyComponent name="Dicoding"/></div>);