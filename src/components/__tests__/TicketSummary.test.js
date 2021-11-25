import React , { useEffect }from "react";
import {shallow, mount, render } from"enzyme";
import TicketSummary from '../TicketSummary';
import testData from "../../data/tickets.json";
import { act } from '@testing-library/react'


// describe("<TicketSummary/>", () =>{
//     let wrapper;
//     beforeEach(() => {
//         wrapper = shallow(<TicketSummary />);
//     })
//
//
//
//     it("render TicketSummary without data", () =>{
//         // console.log(wrapper.debug());
//         expect(wrapper).toMatchSnapshot();
//             const header = wrapper.find("h3");
//             expect(header.exists()).toBe(true);
//             expect(header.text()).toEqual("25 total tickets, 25 on this page");
//     })
    
    
describe("<TicketSummary/>", () => {
    let wrapper;
    let tickets;
    
    beforeEach(() => {
        const mockResponseData = testData.tickets;
        tickets = mockResponseData.map(e => ({...e}));
        jest.clearAllMocks();
        global.fetch = jest.fn(async () => ({
            json: async () => mockResponseData
        }));
        
        // useEffect = jest.spyOn(React, "useEffect").mockImplementation(f =>f());
        wrapper = mount(<TicketSummary />);
        console.log(wrapper.debug());
        //
    });
    
    it("render TicketSummary without data", async () => {
       
        await act(() => new Promise(setImmediate)); // <--
        wrapper.update();                           // <--
        const header = wrapper.find("h3");
        wrapper.find("#change-page").at(2).simulate("click");
        expect(header.exists()).toBe(true);
        expect(header.text()).toEqual("25 total tickets, 25 on this page");
    });
    
})