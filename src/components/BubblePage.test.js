import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import mockFetchShow from '../services/fetchColorService'; 
import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

jest.mock('../services/fetchColorService')

const testColor = {
    name: 'test color',
    
    colors: [
        {
            id: 0,
            name: 'Color 1',
            
        },
        {
            id: 1,
            name: 'Color 2',
           
        }
    ]
}

test("Renders without errors", ()=> {
    render(<BubblePage />)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    mockFetchShow.mockResolvedValueOnce(testColor)
    render(<BubblePage />)
    

});