import React from 'react';
import Deposits from './Deposits';

import depositData from '../../../DepositData.json'

const DepositContainer = () => {
    return (
        <>
            <Deposits title="Active Deposits" count={2} data={depositData.active} />
            <Deposits title="Closed Deposits" count={8} data={depositData.closed} />
        </>
    )
}

export default DepositContainer
