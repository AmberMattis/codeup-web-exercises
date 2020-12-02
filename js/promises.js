"use strict"
$(document).ready(function(){
    function extractDateOfLastPushEvent(events) {
        for (let event of events) {
            if (event.type === 'PushEvent') {
                return new Date(event.created_at).toDateString();
            }
        }
        return null;
    }

    function lastPushDate(username) {
        const url = `https://api.github.com/users/${username}/events`;
        const options = {headers: {'Authorization': 'token ' + gitHubToken}};
        return fetch(url, options)
            .then(res => res.json())
            .then(extractDateOfLastPushEvent)
            .catch(console.error);
    }

    lastPushDate("AmberMattis").then(console.log);
})