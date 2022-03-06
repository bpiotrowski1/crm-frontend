import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <div id='footer' className='ui inverted vertical footer segment'>
            <div className='ui center aligned container'>
                <div className='ui stackable inverted divided grid'>
                    <div className='sixteen wide column'>
                        <h4 className='ui inverted header'>CRM</h4>
                        <p>© 2022 <Link to='https://github.com/bpiotrowski1' style={{color: '#fff'}}>Błażej Piotrowski</Link></p>
                    </div>
                </div>
                <div className='ui inverted section divider'></div>
                <div className='ui horizontal inverted small divided link list'>
                    <Link to='http://netproces.pl' className='item'>NETPROCES</Link>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;