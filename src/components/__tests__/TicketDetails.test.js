import React from 'react';
import TicketDetails from '../TicketDetails'
import {shallow, mount, render } from"enzyme";
import testData from "../../data/test.json";
import { cleanup } from '@testing-library/react';
import tickets from  "../../data/tickets.json";

describe("<TicketDetails/>", () =>{
    
    afterAll( () => {
        cleanup();
    })
    it("render TicketDetails without data", () =>{
        const wrapper = shallow(<TicketDetails/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    it("render TicketDetails with button click", () =>{
        const ticket = testData[0];
        const setList = jest.fn();
        const wrapper = shallow(<TicketDetails setList={setList}
                                               ticket={ticket}/>);
        wrapper.find('#button').simulate('click');
        expect(setList).toHaveBeenCalledTimes(1);
    });
    
    // it("render TicketDetails 1 data", () =>{
    //     const ticket = testData[0];
    //     const setList = jest.fn();
    //     const wrapper = shallow(<TicketDetails setList={setList}
    //                                             ticket={ticket}/>);
    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.find('#header').text()).toBe("Subject: My printer is on fire!");
    //
    // })
    //
    // it("render TicketDetails 1 data", () =>{
    //     const ticket = tickets.tickets[25];
    //     const setList = jest.fn();
    //     const wrapper = shallow(<TicketDetails setList={setList}
    //                                            ticket={ticket}/>);
    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.find('#header').text())
    //         .toBe("Subject: in nostrud occaecat consectetur aliquip");
    //
    // })
})