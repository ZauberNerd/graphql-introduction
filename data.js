export const speakers = [
    {
        id: 1000,
        name: 'Björn Brauer',
        work: 'Freelance JavaScript developer',
        location: 'Hamburg, Germany',
        talk: 2000,
        links: [3000, 3001]
    }, {
        id: 1001,
        name: 'Daniel Dembach',
        work: 't8y GmbH',
        location: 'Hamburg, Germany',
        talk: 2001,
        links: [3004, 3005]
    }, {
        id: 1002,
        name: 'Robert Kowalski',
        work: 'IBM Cloudant',
        location: 'Hamburg, Germany',
        talk: 2002,
        links: [3007, 3008]
    }
];

export const talks = [
    {
        id: 2000,
        title: 'introduction to GraphQL',
        description: 'A brief introduction to GraphQL',
        links: [3002, 3003]
    }, {
        id: 2001,
        title: 'Relay',
        description: 'n/a',
        links: [3006]
    }, {
        id: 2002,
        title: 'Migrating a legacy codebase to React',
        description: 'n/a',
        links: [3009]
    }
];

export const links = [
    {
        id: 3000,
        title: 'Github',
        url: 'https://github.com/ZauberNerd'
    }, {
        id: 3001,
        title: 'Google+',
        url: 'https://google.com/+BjörnBrauer'
    }, {
        id: 3002,
        title: 'Slides',
        url: 'https://slides.com/...'
    }, {
        id: 3003,
        title: 'Talk source code',
        url: 'https://github.com/ZauberNerd/graphql-introduction'
    }, {
        id: 3004,
        title: 'Github',
        url: 'https://github.com/dmbch'
    }, {
        id: 3005,
        title: 'Twitter',
        url: 'https://twitter.com/dmbch'
    }, {
        id: 3006,
        title: 'Slides',
        url: 'https://slides.com/...'
    }, {
        id: 3007,
        title: 'Github',
        url: 'https://github.com/robertkowalski'
    }, {
        id: 3008,
        title: 'Twitter',
        url: 'https://twitter.com/robinson_k'
    }, {
        id: 3009,
        title: 'Slides',
        url: 'https://slides.com/...'
    }
];

export const findSpeaker = (id) => speakers.find(speaker => speaker.id === id);
export const findTalk = (speaker) => talks.find(talk => talk.id === speaker.talk);
export const findLinks = (ids) => links.filter(link => ids.includes(link.id));