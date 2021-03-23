import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBattlefield, create, wall } from '../../app/battlefield/Battlefield';

export function Battlefield() {
    const battlefield = useSelector(selectBattlefield);
    const dispatch = useDispatch();

    return <table>{
        battlefield.map((row, x) => (<tr>
        {
            row.map((item, y) => (<td onClick={
                () => dispatch(create({x,y, entity: wall}))
            }> {item == null ? 0 : 1} </td>))
        }
        </tr>))
    }</table>;
}
