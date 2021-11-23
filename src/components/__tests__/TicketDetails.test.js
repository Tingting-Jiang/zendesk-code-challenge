import React from 'react';
import TicketDetails from '../TicketDetails'
import {shallow, mount, render } from"enzyme";
import testData from "../../data/test.json";
import { cleanup } from '@testing-library/react'

describe("<TicketDetails/>", () =>{
    
    afterAll( () => {
        cleanup();
    })
    it("render TicketDetails without data", () =>{
        const wrapper = shallow(<TicketDetails/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h3').text()).toBe("Subject: ");
    });
    
    it("render TicketDetails 1 data", () =>{
        const ticket = testData[0];
        const setList = jest.fn();
        const wrapper = shallow(<TicketDetails setList={setList}
                                                ticket={ticket}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h3').text()).toBe("Subject: My printer is on fire!");
        
    })
})