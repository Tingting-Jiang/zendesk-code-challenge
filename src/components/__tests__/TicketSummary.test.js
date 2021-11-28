import React , { useEffect }from "react";
import {shallow, mount, render } from"enzyme";
import TicketSummary from '../TicketSummary';
import testData from "../../data/tickets.json";
import { act , waitForElement} from '@testing-library/react'
import App from '../../App'
//import {  } from '@testing-library/react';


describe("<TicketSummary/>", () =>{
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TicketSummary />);
    })
    

    it("render TicketSummary without data", () =>{
        // console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
            const header = wrapper.find("h3");
            expect(header.exists()).toBe(true);
            expect(header.text()).toEqual("0 total tickets, 0 on this page");
    })
})
    
describe("<TicketSummary/>", () => {
    let wrapper;
    
    beforeEach(() => {
        const mockResponseData = testData;
        jest.clearAllMocks();
        global.fetch = jest.fn(async () => ({
            json: async () => mockResponseData,
            ok: true
        }));
    });
    
    it("render TicketSummary with 25 data", async () => {
        await act(async () => {
            wrapper = mount(<TicketSummary/>)
        });
        wrapper.update();                           // <--
        const header = wrapper.find("h3");
        await act(async () => {
            wrapper.find("#change-page").at(1).simulate("click");
        });
        expect(header.exists()).toBe(true);
        expect(header.text()).toEqual("104 total tickets, 25 on this page");
    });
})

describe("<TicketSummary/>", () => {
    let wrapper;
    
    beforeEach(() => {
        const mockResponseData = testData;
        jest.clearAllMocks();
        global.fetch = jest.fn(async () => ({
            json: async () => mockResponseData,
            ok: false,
            status: 401,
        }));
    });
    
    it("render TicketSummary error 401", async () => {
        await act(async () => {
            wrapper = mount(<TicketSummary/>)
        });
        wrapper.update();                           // <--
        const header = wrapper.find("h3");
        expect(wrapper.find("#error").text()).toBe("Error Message: Sorry, we could not Authenticate you");
        expect(header.exists()).toBe(true);
    });
})

describe("<TicketSummary/>", () => {
    let wrapper;
    
    beforeEach(() => {
        const mockResponseData = testData;
        jest.clearAllMocks();
        global.fetch = jest.fn(async () => ({
            json: async () => mockResponseData,
            ok: false,
            status: 404,
        }));
    });
    
    it("render TicketSummary error 404", async () => {
        await act(async () => {
            wrapper = mount(<TicketSummary/>)
        });
        wrapper.update();                           // <--
        const header = wrapper.find("h3");
        expect(wrapper.find("#error").text()).toBe("Error Message: API endpoint seems lost");
        expect(header.exists()).toBe(true);
    });
})

describe("<TicketSummary/>", () => {
    let wrapper;
    
    beforeEach(() => {
        const mockResponseData = testData;
        jest.clearAllMocks();
        global.fetch = jest.fn(async () => ({
            json: async () => mockResponseData,
            ok: false,
            status: 403,
        }));
    });
    
    it("render TicketSummary error 403", async () => {
        await act(async () => {
            wrapper = mount(<TicketSummary/>)
        });
        wrapper.update();                           // <--
        const header = wrapper.find("h3");
        expect(wrapper.find("#error").text()).toBe("Error Message: API website address issue");
        expect(header.exists()).toBe(true);
    });
})

describe("<TicketSummary/>", () => {
    let wrapper;
    
    beforeEach(() => {
        const mockResponseData = testData;
        jest.clearAllMocks();
        global.fetch = jest.fn(async () => ({
            json: async () => mockResponseData,
            ok: false,
            message: "API not responding for some reason"
        }));
    });
    
    it("render TicketSummary other error", async () => {
        await act(async () => {
            wrapper = mount(<TicketSummary/>)
        });
        wrapper.update();                           // <--
        const header = wrapper.find("h3");
        expect(wrapper.find("#error").text()).toBe("Error Message: API not responding for some reason, retry to connect server and refresh");
        expect(header.exists()).toBe(true);
    });
})