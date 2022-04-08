# event-ful

//disable scroll when in other pages, or click to zoom in to user to solve th bugs
load map first (No error)
https://cheery-melomakarona-af8b24.netlify.app/

load landing first
https://tiny-starlight-6da1cc.netlify.app/

priority:

# eventful

![brand](./READMESources/readMeFrontImg.png)

Access the live demo [here]().

Eventful is a central portal connecting event attendees and organizers in real-time. The front-end is built using React connectng to the restful API powered by Express and Node Js.

## Summary

### Project Context

Covid19 has put a standstill to much of the face-to-face interaction with each other. In the early 2022, the world is slowly recovering from the impacts of the pandemic. In Singapore, the government has set aside [half a billion dollar](https://www.channelnewsasia.com/singapore/singapore-tourism-recovery-support-stb-covid-19-singaporeimagine-grants-2610691) to rejuvenate the tourism industry. Hence, there is a need to design a better event app to jump on the bandwagon.

The events are defined as follows but non-exhaustive:

- tourism events
- school events
- promotional events
- any other public events

//stop face to face intreaction, esp events
//recover, this app will reginite the travel and event, and retail
//bring people into
//allow organier to publish events, tantazlied

### Value proposition

The event apps currently in the market only showcase the events in a list. It does not tell users:

1. Are there any good events today? Are these events near me?
2. Is there a better way to plan my time going to some events? Rather than scanning through pages of listed events.

The users today want instant answers to these questions. This app is designed for this.

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

- Diners like to grab the nearby cuisines with the offers from restaurants, but collection coupons is cumbersome

<em>Event Organizers</em>

Most organizers want crowds to their events instantly. However, this is not possible because planning and publicising events costs time and money. The inflexibility has high opportunity costs such as loss of potential sales and publicity.

- school
- retail shops
- tourism boards
- restaurants

### User stories

As a student, I like go to school events without reading event postals or events near me because I want instant acces to these info.

As a shopper, I like to instantly access promotional events near me because I have no time to collect value coupons or keep track of event dates.

As a tourist, I would like to plan my days around tourism events better rather than gathering info piecemeal, because I am on a trip to relax, not to do heavy planning.

As a diner, I would like to see restaurant offers near me once I stepped out the office, because I had a tiring day at work and I just want quick access to good food at great prices.

As a organizer, I want quick acess to crowds to my events rather than doing heavy planning, because I want my marketing and promotional activities to be nimble and efficient (cost & time).

### Key features based on user story

1. Display today's events on a map near the event attendee
2. Display events for the month on a calendar so that the event attendees could easily plan their times
3. Allow event organizers to publish events instantly, displaying the events on the map or calendar with their corporate logos and color for branding purposes

## 2. Scope

### Functional specification

### Content

- Event details published by organizers
- Enable event attendees to filter events by category, date and search string on a map or calendar

### Non-functional

- The app should be mobile responsive for instant access to event info on users' mobiles

## 3. Structure

Opted for a tree information structure, with the map as the home page.

![site map](./READMESources/siteMap.jpeg)

### Restful API

data schema

for more info please

## 4. Skeleton

![wireframe](./READMESources/wireframe.png)

## 5. Surface - visual design

### Colors

As this is a medical app, we have chosen colors resembling hospital or medical theme below.
![Color](./READMESources/color.png)

Using the above color wheel, we have set the colors in the \_constant.scss file to be global variables - to be used consistently through the application.

- ColorPrimary is used the mostly throughout the app, including the app logo design, icon color, and data chart theme (see below)
- ColorAccentThree is mostly used as the background color e.g. the drug advisor page background color.
- The rest of the colors are also widely used, but mostly as supporting hues.

```

/_ color setting _/
$colorPrimary: #ab5e69;
$colorSecondary: #c2fbcd;
$colorAccentOne: #F7c1c9;
$colorAccentTwo: #E0ffe7;
$colorAccentThree: #8fb095;

```

PrimaryColor consistency
![color](./READMESources/primaryColorUsage.png)

### Font pair - Lora and Roboto

Although they are two sans serifs, but the imperfect/perfect pairing of their character sets creates a good balance. This would work really well in giving a youthful and trustworthy vibe.

![font](https://elementor.com/cdn-cgi/image/f=auto,w=720/marketing/wp-content/uploads/sites/9/2020/11/4-Archivo-Black_Roboto.png)

Against, in the \_constant.scss file, we have set below font variables to be used globally.

```

/_ font family and size setting _/
$headerFront: 'Lora', serif;
$bodyTextFront: 'Roboto', sans-serif;

```

## 6. technology stack

### Stack used:

| Tech                                                                        | Usage                                     |
| --------------------------------------------------------------------------- | ----------------------------------------- |
| HTML, CSS, vanilla Javascript, Bootstrap 5                                  | Build the main frame of the website       |
| SASS                                                                        | Organize and structure css                |
| [Axios](https://axios-http.com/docs/intro)                                  | Call APIs                                 |
| [Apexcharts](https://apexcharts.com/)                                       | Plot charts of drug side effects reported |
| [Leaflet](https://leafletjs.com/)                                           | Create map and markers                    |
| [Leaflet routing machine](https://www.liedman.net/leaflet-routing-machine/) | Draw routes on the map                    |
| Fontawesome                                                                 | Use icons throughout the site             |

### Algorithm used:

| Algorithm                                                                                                                               | Usage                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [Check if an array is a subset of another array](https://www.geeksforgeeks.org/find-whether-an-array-is-subset-of-another-array-set-1/) | Match symptoms selected to disease types                                |
| Linear algorithm to calculate the shortest distance between two nodes                                                                   | Display nearest pharmacy to user, but time complexity could be improved |

## 7. testing

Click [here](https://github.com/Jerrysuper123/pharmacy-pal/blob/main/READMESources/testCases.pdf) for the detailed test list.

## 8. deployment

The deployment is done through Github with the instructions [here](https://gist.github.com/TylerFisher/6127328).

## 9. Limitations and future implementations

- [Use passive event listener](https://web.dev/uses-passive-event-listeners/) - not implemented currently, but could significantly improve the mobile scrolling experience especally on a map

- Leeflet Routing Machine is an open-source project, not suitable for production use. Its server could be halted without prior notice. To commercialize this project, we might consider paid services.

- The disease and symptom dataset is rather small - less than 50 disease types currently. To improve the predictive accuracy, we might need a larger dataset or implement a back-end server to collect users' info.

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
