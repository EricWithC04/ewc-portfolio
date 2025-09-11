interface Animation {
    initial: {
        [key: string]: string | number;
    };
    animate: {
        [key: string]: string | number;
    };
}

export interface Animations {
    down: Animation;
    left: Animation;
    right: Animation;
}