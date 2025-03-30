import React from 'react';


const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-black'>
            <div className="terminal-loader ">
                <div className="terminal-header">
                    <div className="terminal-title">Status</div>
                    <div className="terminal-controls">
                        <div className="control close" />
                        <div className="control minimize" />
                        <div className="control maximize" />
                    </div>
                </div>
                <div className="text ">Loading...</div>
            </div>
        </div>
            );
}



export default Loader;
