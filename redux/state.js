let store = {
    _state: {
        profilePage: {
            posts: [{
                    id: 1,
                    message: "Hi, How are you?",
                    likesCount: 11
                },
                {
                    id: 2,
                    message: "It`s my first post",
                    likesCount: 11
                },
                {
                    id: 3,
                    message: "Blabla",
                    likesCount: 11
                },
                {
                    id: 4,
                    message: "Dadada",
                    likesCount: 11
                },
                {
                    id: 5,
                    message: "YO",
                    likesCount: 11
                },
                {
                    id: 6,
                    message: "YO",
                    likesCount: 11
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [{
                    id: 1,
                    name: "Dimych"
                },
                {
                    id: 2,
                    name: "Andrew"
                },
                {
                    id: 3,
                    name: "Sveta"
                },
                {
                    id: 4,
                    name: "Sasha"
                },
                {
                    id: 5,
                    name: "Viktor"
                },
                {
                    id: 6,
                    name: "Valera"
                }
            ],
            messages: [{
                    id: 1,
                    message: "Hi"
                },
                {
                    id: 2,
                    message: "How is your Lego"
                },
                {
                    id: 3,
                    message: "YO"
                },
                {
                    id: 4,
                    message: "YO"
                },
                {
                    id: 5,
                    message: "YO"
                },
                {
                    id: 6,
                    message: "YO"
                }
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        debugger;
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(){

    }

}

export default store;
window.store = store;