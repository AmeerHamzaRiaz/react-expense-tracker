import React from 'react'
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <div>
            <Typography variant="h4" align="center" style={{ marginTop: '16px', color: '#3f51b5' }}>
                EXPENSE TRACKER
            </Typography>
        </div>
    )
}

export default Header;