# event-bite

Credit:

1. start rating
   https://www.devwares.com/docs/contrast/react/components/rating/
2. Make elemeent draggable in react
   https://lo-victoria.com/making-draggable-components-in-react

//display real time date and time
https://dev.to/atif_dev/get-real-time-date-and-time-using-javascript-5eep

//summernote editor
https://codesandbox.io/s/d2qev?file=/src/App.js

https://summernote.org/getting-started/#for-bootstrap-5

Credit
https://codepen.io/juliepark/pen/pLMxoP

//draggable elements
https://www.w3schools.com/howto/howto_js_draggable.asp
//draggable and resizeable div
https://codepen.io/jkasun/pen/QrLjXP

//collapse to show and unshow content
https://getbootstrap.com/docs/5.0/components/collapse/

//toast to show event has started
https://getbootstrap.com/docs/5.0/components/toasts/

//convert iso dates
const event = new Date('05 October 2011 14:48 UTC');
console.log(event.toString());
// expected output: Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)
// (note: your timezone may vary)

console.log(event.toISOString());
// expected output: 2011-10-05T14:48:00.000Z

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

Singapore map to return lat and lng by postal code
https://www.onemap.gov.sg/
https://developers.onemap.sg/commonapi/search?searchVal=650230&returnGeom=Y&getAddrDetails=Y&pageNum=1

```
//rating 1/5
<html>
<head>
<!-- Font Awesome Icon Library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.checked {
  color: orange;
}
</style>
</head>
<body>

<h2>Star Rating</h2>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>

</body>
</html>

```

let date = new Date();
console.log("current date GTM", new Date())
//2022-03-21T03:57:51.847Z
//this is ISO date, for Singapore we should plus GMT+8
//add 8 hours for singagpore
date.setHours(date.getHours() + 8);
console.log("Current date Singapore GMT+8",date);
//Current date Singapore GMT+8
//2022-03-21T13:35:13.776Z

document.querySelector("#dateTime").addEventListener("change",function(){
let dateTime = document.querySelector("#dateTime").value;
console.log("datetime picker", dateTime )
})

// <input id="dateTime" type="datetime-local"/>
//datetime picker 2022-03-15T14:10

//test color
// <input id="colorPicker" type="color" value="#ff0000">
document.querySelector("#colorPicker").addEventListener("change",function(){
let colorPicked = document.querySelector("#colorPicker").value;
console.log("color picked", colorPicked )
})

```

# pharmacy-pal

![brand](./READMESources/readMeFrontImg.png)

Access the live demo [here]().

## Summary

### Project Context

xxx

### Value proposition and objective

Pharmacy-pal is designed to aid "self-care through pharmacy" in the pandemic. Not only does it provide the direction for the legitimate nearby pharmacy, it also offers symptom diagnosis & medication recommendation.

## 1. Strategy

This section mainly discusses:

- App creator's objective and users' needs match-fit
- Users' pain points and app features designed to resolve them

### target market

The target market could be segmented into:

1. basic users

Those who only want to find the nearby drugstore.

- aged 18 to 50
- adequate IT literacy

2. super users

Those who wants to get information on the pharmacist's background and require symptom diagnosis & medication search-up.

- aged 18 to 40
- high IT literacy
- poly/degree holders and above

### Needs and pain points

- For people attending event, they do not need know what kind of public events nearby.

- For organizers, it is hard to publizing their events without heavy spending.

- This website will be mostly mobile-friendly. As user enters an area, they could just scan the QR code, they will be able to see the events organized around them

### User stories

Based on the aforementioned pain points, access the user-story list [here]

### Features based on user story

1. Display the route from user's location to the nearest pharmacy
2. Provide pharmacists' names based on locations
3. Offer symptom diagnosis and description of possible conditions
4. Recommend possible medications for the users' conditions
5. Display the drug side-effect statistics to users

## 2. Scope

### Functional specification

It would be based on the aforementioned features.

### Content

The main content are similar as described in the features section.

For more details on info content used, refer to the credits section below for the list of data sources.

### Non-functional

- The app should be mobile responsive, as users might be on the go towards the pharmacy location.
- When in mobile format, the screen should have less buttons/features to prevent accidental press while walking.

## 3. Structure

Opted for a tree information structure, with the map as the home page.

![site map](./READMESources/siteMap.jpeg)

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

For both visual and data-set credits below:

Icons and images:

1. [Fontawesome icon](https://fontawesome.com/) - to embelish the website with icons throughout for better UI UX
2. [Google fronts](https://www.google.com/search?q=google+fonts&oq=google+front&aqs=chrome.1.69i57j0i10j0i512l2j0i10l6.4333j0j4&sourceid=chrome&ie=UTF-8) - to set the primary and secondary font types
3. [Unsplash images](https://unsplash.com/) - to use it as the landing page background image
4. [Flaticon icons](https://www.flaticon.com/) - to customize the map markers

DataSets:

1. [Pharmacy geoJson CSV data from data.gov.sg](https://data.gov.sg/dataset/retail-pharmacy-locations?resource_id=ae46281d-8ee1-4fa3-ab07-03ab409946d8) - to plot the markers on the map and acess the address info

2. [Liscensed pharmacists API from data.gov.sg](https://data.gov.sg/dataset/listing-of-licensed-pharmacies) - to identify the names of the registered pharmacists

3. [Kaggle disease symptom CSV dataset - credit to Pranay Patil](https://www.kaggle.com/itachi9604/disease-symptom-description-dataset) - to predict users' conditions/diseases based on symptoms selected

4. [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) - to retrieve the extract of disease info to display to users

5. [Pexels API](https://www.pexels.com/api/) - to retrieve disease image and display to users

6. [Disease match drug API from Open FDA](https://open.fda.gov/apis/drug/label/) - to match drug for users' conditions

7. [Adverse events data API from Open FDA](https://open.fda.gov/apis/drug/event/) - to plot the trends of drug side effects reported on charts
```
