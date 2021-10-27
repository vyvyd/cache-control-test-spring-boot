# cache-control-test-spring-boot

## Why 

I needed to check how the `Cache-Control` header works with a simple Spring Boot app in the backend and a React App in the frontend. 

## How to use 

1. Start the backend project 

2. Start the frontend project 

3. Notice the list of bikes in the UI (frontend) 

4. Change the API (in the backend project) to respond with a different list of bikes. 

5. Create a new tab with frontend app running (don't hit refresh, because most browsers will not load from the cache when you manually hit a refresh)

6. Notice that the list of bikes has not been updated to the new list specified in step 4.

7. Do the same thing as the previous step (5) after 2 minutes

8. Notice that the list of bikes has been updated now (the cache was invalidated)
