import React from 'react';
import Timer from '../timer/components/Timer';

type PropTypes = {

};

export default function Main(props: PropTypes) {

    return (
        <div>
            <Timer seconds={30} minutes={23} />
        </div>
    );
}