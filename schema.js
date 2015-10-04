import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';

import { speakers, findSpeaker, findTalk, findLinks } from './data';


const LinkType = new GraphQLObjectType({
    name: 'Link',
    description: 'A link',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The link id'
        },
        title: {
            type: GraphQLString,
            description: 'The link title'
        },
        url: {
            type: GraphQLString,
            description: 'The URL of the link'
        }
    }
});

const TalkType = new GraphQLObjectType({
    name: 'Talk',
    description: 'Returns a talk object',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The talk id'
        },
        title: {
            type: GraphQLString,
            description: 'The talk title'
        },
        description: {
            type: GraphQLString,
            description: 'A short summary of the talk'
        },
        links: {
            type: new GraphQLList(LinkType),
            description: 'Links to the slides or demo source code',
            resolve(talk) {
                return findLinks(talk.links);
            }
        }
    }
});

const SpeakerType = new GraphQLObjectType({
    name: 'Speaker',
    description: 'Returns a speaker object',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The id of the speaker'
        },
        name: {
            type: GraphQLString,
            description: 'The name of the speaker'
        },
        work: {
            type: GraphQLString,
            description: 'Employer and position of the speaker'
        },
        location: {
            type: GraphQLString,
            description: 'Location of the speaker'
        },
        talk: {
            type: TalkType,
            description: 'The talk of tonight\'s meetup',
            resolve(speaker) {
                return findTalk(speaker);
            }
        },
        links: {
            type: new GraphQLList(LinkType),
            description: 'Links to online profiles of the speaker',
            resolve(speaker) {
                return findLinks(speaker.links);
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            me: {
                type: SpeakerType,
                resolve() {
                    return findSpeaker(1000);
                }
            },
            speaker: {
                type: SpeakerType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve(root, { id }) {
                    return findSpeaker(id);
                }
            },
            speakers: {
                type: new GraphQLList(SpeakerType),
                resolve() {
                    return speakers;
                }
            }
        }
    })
});

export default schema;
