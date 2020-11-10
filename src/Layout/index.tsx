import React from 'react';
import './index.less';

const ILayout: React.FC = ({children}) => {

    return (
        <article className='i-layout'>
            <section className="container">
                {children}
            </section>
        </article>
    );
};

export default ILayout;
