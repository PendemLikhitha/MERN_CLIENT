import React from 'react';
import { render,fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import Button from './button';

test('Render button with Label',()=>{
    const {getByText} = render(<Button label="Click Me!! :)"/>);
    const buttonElement = getByText('Click Me!! :)');
    expect(buttonElement).toBeInTheDocument();

});
test('ClassName btn present',()=>{
    const {container}= render(
        <Button label="Click Me!!"/>
    )
    const buttonElement= container.querySelector('button'); //To select a componenet/tag in the document
    expect(buttonElement).toHaveClass('btn');
})
//FireEVENT to click my button
test('Button is CLicked',()=>{
    const onClickMock=jest.fn();
    const button = render(
        <Button label="Click Me!!" onClick={onClickMock}/>
    )
    const buttonElement = button.getByText('Click Me!!');
    fireEvent.click(buttonElement)//simulate button click
    expect(onClickMock).toHaveBeenCalledTimes(1);
})