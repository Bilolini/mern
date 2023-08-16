import React from 'react'
import { Accordion } from 'flowbite-react';

function QA() {
    const arrayOfQuestions = [
        {
            q: 'What technologies were used?',
            a: 'NodeJs(Express) for the backend, and React with Redux for frontend'
        },
        {
            q: 'How long did it take?',
            a: 'It take a long time to choose one project. At first I wanted to build an e-commerce website on MERN, but it seems hard to build all models and connect them together. In the future, I may try this building.'
        },
        {
            q: 'Why did you choose MERN stack?',
            a: 'Because, we have previously learned both NodeJs and React, but I didn`t know how to connect them. Also, building and try my hand at backend was interesting. Besides, MERN stack is quite popular.'
        },
        {
            q: 'What interesting things have you learned?',
            a: 'I used to think how to connect frontend and backend, but I learned it is done through a build file. Also, it was interesting how easy it is to connect to the server in frontend just by typing the routes.'
        },
    ];
    return (
        <section className='mt-5'>
            <Accordion>
                {arrayOfQuestions.map(({ a, q }, index) => {
                    return (
                        <Accordion.Panel key={index}>
                            <Accordion.Title className='text-sm'>{q}</Accordion.Title>
                            <Accordion.Content>
                                <div className="mb-2 text-gray-500 dark:text-gray-400">
                                    <p>
                                        {a}
                                    </p>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                    )
                })}
            </Accordion>
        </section>
    )
}

export default QA