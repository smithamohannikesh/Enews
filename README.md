# Enews
Periodically (every 10 seconds) poll for new posts from  API 
New posts fetched after 10 seconds will be added to old posts.
Increase page count in each subsequent get request.
Implement pagination when the list is scrolled.
The pagination and periodic request both should work mutually exclusive i.e for each request page number will be increased. Request with the same page number should never be made.
Display the title, URL, created_at, and author of each post in a table.
Upon selecting a row in the table, the user is taken to a new page that displays the raw JSON.
