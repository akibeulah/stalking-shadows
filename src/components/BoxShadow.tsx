import React, { useEffect, useRef } from 'react';

export interface BoxShadowProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    walkX: number;
    walkY: number;
    label: string;
    shadowColor: string;
}

const BoxShadow: React.FunctionComponent<BoxShadowProps> = (props) => {
    const { label, walkX, walkY, shadowColor } = props
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.addEventListener("mousemove", adjustShadow)

        return () => {
            window.removeEventListener("mousemove", adjustShadow)
        }
    }, [])

    const adjustShadow = (e: MouseEvent) => {
        if (!ref.current) return;

        let mouseX = e.pageX
        let mouseY = e.pageY

        if (ref.current !== null) {
            let x = mouseX - window.pageXOffset
            let y = mouseY - window.pageYOffset

            const xCenter = ref.current.offsetLeft
            const yCenter = ref.current.offsetTop + ref.current.offsetLeft / 2
            const xWalk_updated = x - xCenter;
            const yWalk_updated = y - yCenter;
            const xWalk = Math.floor(-1 * xWalk_updated / walkX)
            // const yWalk = Math.floor(y > (node.firstChild.offsetTop + (node.firstChild.offsetHeight / 2)) ? (-1 * yWalk_updated / walk_y) : -1 * yWalk_updated / (walk_y / 10))
            const yWalk = -1 * yWalk_updated / walkY

            const diag = Math.floor(Math.sqrt(
                Math.pow((x - xCenter), 2) -
                Math.pow((y - yCenter), 2)
            ))

            const shadow = diag * 10 / (1000)

            ref.current.style.boxShadow = `${xWalk}px ${yWalk}px ${shadow}px ${shadowColor}`
        }
    }

    return (
        <div {...props} ref={ref}>
            {label}
        </div>
    );
}

export default BoxShadow;