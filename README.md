## Brian's Bloc Chat

A real-time chat application configured with firebase and Angular

### List Chat rooms

Created a angular service to display all rooms.

### Create Chat rooms

Created a angular controller that uses bootstrap's uibModal to popup a window when asked to create a room. This chat room connects back to our angular service that displays rooms.

### List messages

I had the hardest time trying to list the messages for each room. I was running into an issue where I can see the content instantaneously as I type in the message field, but I was not saving the messages to a variable which were not linked to the room id that is unique in firebase. After about 2 weeks of troubleshooting I was finally able to get this going.

Will update with more info on exact troubleshooting.


### Set username

Uses browser cookies and angular cookies to store a username to the cookie.

### Send Messages

When coding this last part of the project, I learned that I am mainly a visual coder. What this means is that I wrote the form and CSS for sending messages first before I wrote the functionality of sending messages.

Sending messages also took awhile to fix, but I finally got it going when collaborating with colleagues.
