import {useonOutsideClick} from './useonOutsideClick';
import {useRef, useState} from 'react';

function useonOutsideClickDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);   
    useonOutsideClick(ref, () => setIsOpen(false));

    return (
        <div>
            <h3>useOnOutsideClick Hook Example</h3>
            <div ref={ref} style={{border: '1px solid black', padding: '1rem', display: 'inline-block'}}>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Close' : 'Open'} Menu
                </button>
                {isOpen && (
                    <div style={{marginTop: '1rem', border: '1px solid gray', padding: '0.5rem'}}>
                        <p>This is a dropdown menu. Click outside to close it.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default useonOutsideClickDemo;
