import React from 'react';

import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MusicListItem  from './index';

enzyme.configure({ adapter: new Adapter() });

describe('MusicListItem component', () => {
    test('render MusicListItem', () =>{
        let item = {trackName: "Dinisoku Manavata", artworkUrl100:"https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/70/e7/d8/70e7d805-6e36-cd1e-8f93-7db3b885c1c2/source/100x100bb.jpg"};
        var wrapper = enzyme.shallow(<MusicListItem key={1} item={item}/>);
        expect(wrapper).toHaveLength(1);
    });
})

