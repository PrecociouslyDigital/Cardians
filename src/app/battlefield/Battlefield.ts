import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

enum Obstruction{
    None, Half, Full
}

export const wall : BattlefieldEntity = {
    cover: Obstruction.Full
};

type BattlefieldEntity = {
    cover:  Obstruction;
} | null;

interface Battlefield {
    width: number;
    height: number;
    grid: BattlefieldEntity[][];
}

const initialState: Battlefield = {
    width: 10,
    height: 10,
    grid: createEmptyGrid(10,10),
};


function createEmptyGrid(width: number, height: number) : BattlefieldEntity[][]{
    return Array(width).fill(Array(height).fill(null));
}


export const battlefieldSlice = createSlice({
    name: 'battlefield',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        resize: (state, action: PayloadAction<{width: number, height: number}>) => ({
            width: action.payload.width,
            height: action.payload.height,
            grid: createEmptyGrid(action.payload.width, action.payload.height),
        }),
        create: ({ grid }, action: PayloadAction<{
            x: number,
            y: number,
            entity: BattlefieldEntity
        }>) => {
            const {x, y, entity} = action.payload;
            grid[x][y] = entity;
        },
    },
});

export const { resize, create } = battlefieldSlice.actions;

export const selectBattlefield = (state: RootState) => state.battlefield.grid;


export default battlefieldSlice.reducer;
