import React from 'react';

import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBox  from './index';

enzyme.configure({ adapter: new Adapter() });

describe('SearchBox component', () => {
    test('render search', () =>{
        var wrapper = enzyme.mount(<SearchBox />);
        expect(wrapper.find('SearchBox')).toHaveLength(1);
    });
    
    test('render SearchBox & spy on btn click ', () =>{
        var wrapper = enzyme.shallow(<SearchBox fetchMusicList={()=>{}}/>);
        wrapper.find('.search-btn').simulate('click');
    });
    
    test('render SearchBox & spy on search-input change ', () =>{
        let e =  {target: {value: ''}};
        var wrapper = enzyme.mount(<SearchBox fetchMusicList={()=>{}}/>);
        wrapper.find('.search-input').simulate('change');
    });
    
    test('expect form to submit', () =>{
        
        var wrapper = enzyme.mount(<SearchBox fetchMusicList={()=>{}}/>);
        var prevented = false;
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {
                prevented= true;
            },
            fetchMusicList: ()=>{}
        });
        expect(prevented).toBe(true);
        
    });
})  



