/// <reference types="react" />
export declare type PropTypes = {
    seconds?: number;
    minutes?: number;
    started?: boolean;
    className?: string;
    beepInterval?: number;
};
export default function Timer(props: PropTypes): JSX.Element;
