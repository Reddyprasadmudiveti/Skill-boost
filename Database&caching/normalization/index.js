const state = {
    users: [
        {
            id: 1,
            name: "prasad",
            posts: [
                {
                    id: 1,
                    title: "post 1",
                    description: "post description 1",
                    comments: [
                        {
                            id: 1,
                            description: "comment 1",
                        },
                        {
                            id: 2,
                            description: "comment 2",
                        },
                    ]
                },
            ],
        },
        {
            id: 2,
            name: "reddy",
            posts: [
                {
                    id: 1,
                    title: "post 1",
                    description: "post description 1",
                    comments: [
                        {
                            id: 1,
                            description: "comment 1",
                        },
                        {
                            id: 2,
                            description: "comment 2",
                        },
                    ]
                }
            ],
        },
    ],
    allUsers: [
        {
            id: 1,
            name: "prasad",
        },
        {
            id: 2,
            name: "reddy",
        },
    ]
}

// The issue was that in the original code, you had both id:1/name:prasad and id:2/name:reddy
// inside the same object. The second set of properties (id:2, name:reddy) was overriding
// the first set, so state.users[0] was showing "reddy" instead of "prasad".
// I've fixed it by making them separate objects in the users array.
// console.log(state.users[1])




// normalized data

const normalized = {
    users: {
        byIds: {
            1: {
                id: 1,
                name: "prasad",
                postsId: [
                    101

                ]
            },
            2: {
                id: 2,
                name: "reddy",
                postsId: [
                    201
                ]
            },
        },
        allIds: [101, 201],
    },
    posts: {
        byIds: {
            101: {
                title: "post 1",
                description: "post description 1",
                comments: [201, 301]
            },
            201: {
                title: "post 2",
                description: "post description 2",
                comments: [401]
            },
        },
        allIds: [101, , 202],
    },
    comments: {
        byIds: {
            201:{
                id: 201,
                description: "comment 1",
            },
                
            301:{
                id: 301,
                description: "comment 2",
            },
            401:{
                id: 401,
                description: "comment 1",
            }
        },
        allIds: [201, 301, 401]
    },
    tegs:{
        byIds:{
            501:{
                id:501,
                name:"tag 1",
                posts:[
                    101,
                    201
                ]
            },
            502:{
                id:502,
                name:"tag 2",
                posts:[
                    101
                ]
            }
        }
    }
}


console.log("users of 1")
console.log(normalized.users.byIds[1])
console.log("posts of user 1")
console.log(normalized.posts.byIds[101])
console.log("commnents of user 1")
// Iterate through multiple comment IDs
const commentIds = normalized.posts.byIds[201].comments;
commentIds.forEach(id => {
    console.log(normalized.comments.byIds[id])
})
