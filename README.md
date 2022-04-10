# eventful

eventful is a central portal connecting event attendees and organizers in real-time. The front-end is built using React connecting to the restful API powered by Express and Node Js.

The landing page below summarizes everything about this app.
Access the live React front-end demo [here](https://thunderous-pixie-be41eb.netlify.app/).
Access the back-end API implementation [here](https://github.com/Jerrysuper123/eventfulAPI).

![brand](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/landPage.png?raw=true)

## If no events TODAY

The map page dynamically filters only TODAY's events, so on a given day, there might not be any events from the organizer.

You can click on the "create new event" tab in the navbar to create a new event. Once created, the new event will appear in TODAY's event list.
![emptymap](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/map.png?raw=true)

## Summary

### Project Context

Covid19 has put a standstill to much of the face-to-face interaction with each other. In the early 2022, the world is slowly recovering from the impact of the pandemic. In Singapore, the government has set aside [half a billion dollar](https://www.channelnewsasia.com/singapore/singapore-tourism-recovery-support-stb-covid-19-singaporeimagine-grants-2610691) to rejuvenate the tourism industry. The need arises to design a better event app to jump on the bandwagon.

Events are defined as follows but non-exhaustive:

- tourism events
- school events
- promotional events
- any other public events

### Value proposition

The event apps currently in the market only showcase the events in a list. It does not tell users:

1. Are there any good events today? Are these events near me?
2. Is there a better way to plan my time going to some events? Rather than scanning through pages of listed events.

The users today want instant answers to these questions. This app is designed for this, in a bid to rejuvenate the travel, event and retail industries.

## 1. Strategy

### target market

<em>Event Attendees</em>

- students - currently studying in school and love to go for school events
- shopper - love to go to brands' promotional events
- tourists - like to explore tourist sites and events
- diners - frequent restaurants with good deals

<em>Event Organizers</em>

Below organizers are for the above corresponding event attendees.

- school
- retail shops
- tourism boards
- restaurants

### Needs and pain points

<em>Event Attendees</em>

- students who like to browse through ongoing activities in school in one central portal, but reading event posters/emails is a hassle

- Shoppers who enjoys promotional activities from their favorite brands, but keeping track of the dates is cumbersome

- Tourists like to explore ongoing events onsite, but reading and sorting out info through the information pamphlet is a pain

- Diners like to grab the nearby cuisines with the offers from restaurants, but collecting discount coupons is cumbersome

<em>Event Organizers</em>

Most organizers want crowds to their events instantly. However, this is not possible because planning and publicising events costs time and money. The inflexibility has high opportunity costs such as loss of potential sales and publicity.

- school
- retail shops
- tourism boards
- restaurants

### User stories

- As a student, I like go to school events without reading event posters or school emails, so that I could have instant access to these info.

- As a shopper, I like to instantly access promotional events near me so that I can save the time to collect value coupons or keep track of event dates.

- As a tourist, I would like to plan my days around tourism events easily rather than gathering info piecemeal, so that on the trip I could relax, not to do heavy planning.

- As a diner, I would like to see restaurant offers near me once I stepped out the office, because I had a tiring day at work and I just want quick access to good food at great prices.

- As an organizer, I want quick access to crowds to my events rather than doing heavy planning, so that my marketing and promotional activities could be nimble and efficient (cost & time).

### Key features based on user story

1. Display today's events on a map near the event attendee
2. Display events for the month on a calendar so that the event attendees could easily plan their times
3. Allow event organizers to publish events instantly, displaying the events on the map or calendar with their corporate logos and color for branding purposes
4. QR code for the event organizers to publicise the QR code in the vicinity, so as to allow people to scan the code to explore nearby events

## 2. Scope

### Functional specification

- Users could scan the QR code to explore nearby events on the app

### Content

- Event details published by organizers
- Enable event attendees to filter events by category, date and search string on a map or calendar

### Non-functional

- The app should be mobile responsive for instant access to event info on users' mobiles

## 3. Structure

The left diagram - site map

- User through the landing page could navigate to three main pages

1. events on the calendar
2. events on the map
3. create new event form (organizer could create, update and delete events here)

The right diagram - react component design

- Used as a reference, the final app is more complicated with multitude of components, in order to reuse the components

![site map](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/siteMap.png?raw=true)

### Restful API

A restful API built using express and hosted on Mongo Atlas Database is deployed as the backend.

The detailed implementation can be found [here](https://github.com/Jerrysuper123/eventfulAPI).

<em>Data schema design</em>

![data schema](https://github.com/Jerrysuper123/eventfulAPI/raw/main/images/dataBaseDesign.png)

## 4. Skeleton

The original conceptual design is found below.

Click [wireframe](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/wireframeEvent.pdf) to see the draft design.

## 5. Surface - visual design

### Colors

- The first colour below (orange "#E27D60") is the primary colour used. The bright orange color gives a feel of liveliness, resembling the liveliness of events. Brand logo and icons are designed with this color.

- The fourth colour (purple "#C38D9E) and the fifth colour (dark green "#41B3A3") are cold colours, which are in contrast with the warm. High contrast is used to bring out key information on the app e.g. event listing.

- The rest of the colours are used mostly as the support hues.

![Color](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/colorEvent.png?raw=true)

### Font pair - Roboto and Montserrat

- These two simple sans-serif typefaces offer a clean, modern font pairing, giving a cool feel for the events listed on the app.

- Roboto combines geometric forms with friendly, open curves, designed to facilitate a natural reading rhythm. The Roboto is mostly used in the event description page's text for better reading experience.

![font](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/fontEvent.png?raw=true)

## 6. technology stack

### Stack used:

| Tech                                                                        | Usage                               |
| --------------------------------------------------------------------------- | ----------------------------------- |
| HTML, CSS, React, Bootstrap 5                                               | Build the main frame of the website |
| Express                                                                     | Build restful API                   |
| [Axios](https://axios-http.com/docs/intro)                                  | Call APIs                           |
| Material UI components                                                      | Build front end react components    |
| [Leaflet](https://leafletjs.com/)                                           | Create map and markers              |
| [Leaflet routing machine](https://www.liedman.net/leaflet-routing-machine/) | Draw routes on the map              |
| Fontawesome                                                                 | Use icons throughout the site       |

## 7. testing

Click [here](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/eventfulTestCases.pdf) for the detailed test list.

## 8. deployment

The deployment is done through Netifly with the instructions [here](https://www.youtube.com/watch?v=OPalwvWO63U&t=39s&ab_channel=SanskarTiwari).

## 9. Limitations and future implementations

- Leeflet Routing Machine is an open-source project, not suitable for production use. Its server could be halted without prior notice. To commercialize this project, we might consider paid services.

## 10. Credits

1. [Fontawesome icon](https://fontawesome.com/) - to embelish the website with icons throughout for better UI UX

2. [Google fronts](https://www.google.com/search?q=google+fonts&oq=google+front&aqs=chrome.1.69i57j0i10j0i512l2j0i10l6.4333j0j4&sourceid=chrome&ie=UTF-8) - to set the primary and secondary font types

3. [Unsplash images](https://unsplash.com/) - to use it as the landing page background image

4. [Flaticon icons](https://www.flaticon.com/) - to customize the map markers

5. [spinner](https://loading.io/css/) - to inform users that the app is loading

6. [timeline](https://www.w3schools.com/howto/howto_css_timeline.asp) from W3School - used for the landing page

7. [footer template](https://gist.github.com/Luke-zhang-04/7cb523899ca4044f805f0d0909e4c5c1) - to customize and use for various pages

8. [Material UI](https://mui.com/) - to use the rating form and auto-complete checkboxes

9. [Singapor One Map API](https://www.onemap.gov.sg/docs/) - to return latitude and longitude based on postal code for plotting markers on the map

10. [Kalend - calendar component for React](https://www.npmjs.com/package/kalend) - to use for the display of events on a calendar

## Additional notes for developers

- Due to some prevent default error triggered by Kalend Calendar, went into React Node Modules to remove the preventDefault line from "react-dom.development.js"

```
if (event.preventDefault) {
//remove preventDefaul due to error triggered by calendar clicking
// event.preventDefault(); // $FlowFixMe - flow is not aware of `unknown` in IE
} else if (typeof event.returnValue !== 'unknown') {
event.returnValue = false;
}
```

- In order to fix below error, we have downgrade to React 17, instead of 18, because React 18 could not render the React LeafLet Map properly using createRoot.

```
react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
```
