import React from 'react';
import { render } from 'react-dom';
// import '@/styles/scss.scss'
// import Person from './Person'

const App: React.FC = () => {
    // const person = new Person('Tor');
    return(
        <>
            <div className="person">person</div>
            <h1> Its webpack</h1>
        </>
    )
}
const a = <App />;
debugger
render(<App />, document.getElementById('app'))
