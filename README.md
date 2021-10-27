# cache-control-test-spring-boot

## Why 

I needed to check how the `Cache-Control` with `max-age` header works with a simple Spring Boot app in the backend and a React App in the frontend. 

## How to use 

1. Start the backend project 

2. Start the frontend project 

3. Notice the list of bikes in the UI (frontend) 

4. Change the API (in the backend project) to respond with a different list of bikes. 

5. Create a new tab with frontend app running (don't hit refresh, because most browsers will not load from the cache when you manually hit a refresh)

6. Notice that the list of bikes has not been updated to the new list specified in step 4.

7. Do the same thing as the previous step (5) after 2 minutes

8. Notice that the list of bikes has been updated now (the cache was invalidated)

## Technical details

All that needed to be done was to introduce cache-control in the response at the backend. This change is at

https://github.com/vyvyd/cache-control-test-spring-boot/blob/2481cc8/backend/src/main/kotlin/com/caching/example/ListOfBikesController.kt#L26

## What I learnt 

1. This type of caching might be influenced by the browser, and the specific mechanics it has

2. We might be able to get away with this sort of caching in web-apps that don't refresh the page for example, applications designed as [SPA](https://en.wikipedia.org/wiki/Single-page_application) 

3. There might be no way to know if content was loaded from the browser cache or a new server request was made. Need to learn about this, as this will enable showing messages on the UI like "this content could be outdated, click [here]() to refresh" 

# Next steps 

1. Simulate a SPA environment, and see if the caching can work seamlessly. 

2. Understand how different browsers use the `Cache-Control` header. When would they choose to ignore it?

