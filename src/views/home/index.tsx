import React from 'react';
import {useHistory} from 'react-router-dom';

const Home: React.FC = () => {
    const history = useHistory();

    // 跳转
    function pushToLevel2() {
        history.push('/about');
    }

    return (
        <article className='Home'>
            子应用 - 首页
            <button onClick={pushToLevel2}>跳转</button>
        </article>
    );
};

export default Home;
