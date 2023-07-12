import React from 'react';
import {useToggle} from "./useToggle";

function DemoPage(props) {

    const [value , toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
    // const [value, toggle] = useToggle(['light', 'dark', 'blue']);
    // const [value, toggle] = useToggle();

    return (
        <div>
            <button onClick={() => toggle()}>
                {value.toString()}
            </button>

            <button onClick={() => toggle('dark')}>
                dark params
            </button>

            <button onClick={() => toggle('orange')}>
                orange params
            </button>
        </div>


    );
}

export default DemoPage;