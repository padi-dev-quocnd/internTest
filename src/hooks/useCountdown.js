import React from 'react'

export default function useCountdown(initialize = 0) {
    const [timeLeft, setTimeLeft] = React.useState(initialize);

    React.useEffect(() => {
        if (timeLeft <= 0) {
            setTimeLeft(0)
        }

        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {

            setTimeLeft(timeLeft - 1);
        }, 500);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);

    return [timeLeft, setTimeLeft]
}
