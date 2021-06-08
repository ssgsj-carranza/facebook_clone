import React from 'react'
import Header from './Components/Header/Header'
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
    return (
        //BEM naming convention
        <div className='app'>
            <Header />
            <div className='app__body'>
                <Sidebar/>
                {/* Feed */}
                {/* Widgets */}
            </div>
        </div>
    )
}

export default App
