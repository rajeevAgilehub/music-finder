import React from 'react';
import  { App } from './App';

import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });


describe('App', () => {
    
    
    test('should render App', () => {
        let wrapper = enzyme.mount(<App musicList={{loading: true, data: []}}/>);
        expect(wrapper.find('App')).toHaveLength(1);
    });


    test('redner musicCard', () => {
        let wrapper = enzyme.mount(<App musicList={{loading: false, data: [{artworkUrl100: 'sadfas', trackName: 'fasdfas'}]}}/>);
        expect(wrapper.find('index')).toHaveLength(1);
    });

    test('redner loaidng... text while fetching data', () => {
        let wrapper = enzyme.mount(<App musicList={{loading: true, data: []}}/>);
        expect(wrapper.find('.loader-text')).toHaveLength(1);
    });

    
});


