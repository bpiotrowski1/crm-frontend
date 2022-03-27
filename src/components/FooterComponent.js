import React from 'react';

const FooterComponent = () => {
    return (
        <div id='footer' className='ui inverted vertical footer segment'>
            <div className='ui center aligned container'>
                <div className='ui stackable inverted divided grid'>
                    <div className='sixteen wide column'>
                        <h4 className='ui inverted header'>CRM</h4>
                        <p>© 2022 <a href='https://github.com/bpiotrowski1' style={{color: '#fff'}}>Błażej Piotrowski</a></p>
                    </div>
                </div>
                <div className='ui inverted section divider'></div>
                <div className='ui horizontal inverted small divided link list'>
                    <a href='https://github.com/bpiotrowski1/crm-rest' className='item'>CRM</a>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;