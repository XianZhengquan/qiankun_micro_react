import React, {useState} from 'react';

const About: React.FC = () => {
    //
    const [storage, setStorage] = useState<string>('');

    // 获取 sessionStorage
    function getSessionStorage() {
        setStorage(JSON.stringify(sessionStorage, null, 4));
    }

    return (
        <article className='About'>
            子应用 - 第二个页面
            <button onClick={getSessionStorage}>获取sessionStorage</button>
            <div>
                <pre>
                    {storage}
                </pre>
            </div>
        </article>
    );
};

export default About;
