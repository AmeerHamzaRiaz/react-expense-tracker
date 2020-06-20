import React from 'react';
import CountUp from 'react-countup';
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const CountUpText = (props) => {
    return (
        <CountUp
            className="account-balance"
            start={0}
            delay={0}
            end={Number.parseInt(props.amount)}
            duration={2.75}
            separator=","
            decimals={2}
            decimal="."
            prefix="$ "
        >
            {({ countUpRef }) => (
                <div>
                    <Typography 
                        variant="h4" 
                        style={!props.isBalance ? (props.amount < 0 ? { color: red[500] } : (props.amount != 0 ? { color: green[500] } : null)) : null}>
                        <span ref={countUpRef} />
                    </Typography>
                </div>
            )}
        </CountUp>
    )
}

export default CountUpText;