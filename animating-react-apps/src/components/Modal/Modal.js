import React from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import './Modal.css';

const modal = (props) => {
    const cssClasses = ['Modal',
        props.show === 'entering'
            ? 'ModalOpen'
            : props.show === 'exiting' ? 'ModalClosed' : null
    ];

    const animationTiming = {
        enter: 400,
        exit: 1000
    };


    return (
        <CSSTransition
            timeout={animationTiming}
            classNames='fade-slide'
        >
            <div className={cssClasses.join(' ')}>
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition >
    );
}

export default modal;