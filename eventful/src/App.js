import React from "react";
import { BASE_API_URL } from "./Utility";
import axios from "axios";
import NavBar from "./NavBar/NavBar";
import FilterBar from "./FilterBar/FilterBar";
import LandingPage from "./LandingPage/LandingPage";
import MapListing from "./MapListing/MapListing";
import CalendarListing from "./CalendarListing/CalendarListing";
import AddEvent from "./AddEvent/AddEvent";
import "./App.css";

class App extends React.Component {
  state = {
    active: "map",
    data: [
      {
        _id: 1,
        /*Basic info */
        title: "recyle day with salvation army",
        organizer: "Salvation Army",
        category: "Promotional",
        hashtags: ["nature"],
        /*location */
        customizedMapMarker: "",
        brandColor: "#FF0000",
        address: "Singapore botanic garden",
        postalCode: 259569,
        // use one map to convert postal code to latlng
        latLng: [1.3138, 103.8159],
        /*date time*/
        startDateTime: "2022-03-21T10:00",
        endDateTime: "2022-03-21T10:22",
        /*main event image */
        eventImage:
          "https://saltandlight.sg/wp-content/uploads/2018/12/fullsizeoutput_265.jpeg",
        /*description */
        descriptionSummary: "get earth cleaned with our own hands",
        description: "this is a description",
        reviews: [
          {
            _id: 111,
            name: "jerry Chen",
            rating: 5,
            feedback: "lousy event",
          },
          {
            _id: 112,
            name: "jerry Chen",
            rating: 5,
            feedback: "lousy event",
          },
        ],
      },
      {
        _id: 2,
        title: "Store-wide 10% discount",
        organizer: "H&M",
        category: "Promotional",
        address: "50 Jurong Gateway Rd, #01 - 01, #02 - 01, #03 - 01",
        postalCode: 608549,
        latLng: [1.3335, 103.7437],
        startDateTime: "2022-03-21T08:00",
        endDateTime: "2022-03-21T09:00",
        eventImage:
          "https://static-cdn.giftano.com/fls/merchants/hm-profile-image_retail-shop-front.png",
        descriptionSummary: "Get all pieces at 10% discount store wide",
        description: "this is a description",
        customizedMapMarker:
          "https://image.winudf.com/v2/image/Y29tLmhtX2ljb25fMTUzMTEzNzU1NV8wNDk/icon.png?fakeurl=1&h=240&type=webp",
        brandColor: "#FF0000",
        hashtags: ["food"],
      },
      {
        _id: 3,
        title: "CNY Lion Dance",
        organizer: "Trent Global College",
        category: "Promotional",
        address: "229 Mountbatten Rd, #01-30 ERCI Campus",
        postalCode: 398007,
        latLng: [1.3076, 103.8808],
        startDateTime: "2022-03-21T08:00",
        endDateTime: "2022-03-21T09:00",
        eventImage:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBUVFRUXGBcZGhkdGRgaGyAYHB0cIBocHBkaHCEgIjkjGhwrHRkZJDUlKC0vMjUyGSM4PTgxPCwxMi8BCwsLDw4PHRERHTEoIygzMzExMTExMTExMTEzPDExNDMzMTEzMjExMTExMTExMTExLzExMTExMS8xMTExMTExMf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABPEAACAQIEAgUGCAoHCAIDAAABAgMAEQQSITEFQQYTIlFhBzJxcoGRFDNCUqGxstEVIzVTVGJzk8HSFjRDgpLh8BckdIOis8LDo/FEY+L/xAAbAQACAwEBAQAAAAAAAAAAAAAAAQIDBgQFB//EADARAAICAAQFAgUEAgMAAAAAAAABAhEDEiExBTRBUXEEEyJhgaHwMjNCsZHhFCPx/9oADAMBAAIRAxEAPwDkmi9BorNG7IfpMfxS+uPstVZuas3Sb4tfXH2WqsVqeFcsvLMjxfmX4R7c0XNeUV6h5Z7c0XNeUUAe3NFzXlFAHtzRc15RQB7c0XNeUUAe3NFzXlFAHtzRc15RQBonkk45kmfBuexKC0d9usUdpf7yC/8Ay/GrTxPC9XIyXAG6+g7fd7KxfCYl43SRDZ42VlPipuPZpW8YrELisLDi49ioJHcDoynxVrj31zT+DEvo/wCwkrj4IBXsbC9ObhudqFB8K7CXqxsoSEc5B2BHhXolU+FethhSqRgf50m0FM9QDlXRtSbRDfX0V0iEch7zUbJBnN9NvGlQgNJshPyiPopVe7WhsEA0oZSdjb2UOLbXPor2PXcW9JpDGrRyBrmQ+j/KnKRk7sffRiZ8guAD7bV7h2Ldq1vTQ26CkDM2wHtNDM52ZRXk2KUCxG/srhUXTIoBPJv4C+tAHRWQas/uApAGMm2dy3+u6n6gsLXy+ixqPfiMcZZWzlgbbX/yoi29gdLccxYUrqGP10STEG2dR4WqLm4pO5yxoV9lz/lXv43+0dg3ddRp6L1PI+pHMuhXzRQaKw59IIfpN8Wvrj7LVWKs/Sb4tfXH2WqsVquFcsvLMjxfmX4QUUUV6h5YUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVpvki4yD1uCkOjAyR390ifUw/v1mVO+FcQfDzRzx+dG4YDvGzL6CpK+2qsSGeLRJOjZsTAY3ZDyPvHI+6kgKluJss0UWJj7SOqm/6rC6n6be2odpFGhIHtqmEsyKpRpigr0Cks99iDSgNt7CpAdiuhSKSg7a171vLS/iaQCoFdAUk06jc2+mj4UneKNQ0Fb+Brwb3y0LIDswrrrQBcm/o1+qkOjkyAbqb9wFzXolY+apX1h9VjTdMU7NYJlXvIP/ANUhKVDhQSzc+1pUkhWM8RhXPalc87Dc7/RXcOJIsqnTwW5+mlMVIbWZMg9NyRSDS9m0QYnm22nharU7WpVST0JgThVA7RPj2TUPjmObMcqX5AEn3ka02iGt2PpuST/nTtpVdsovlB3YAfSToKSjlY3LMhXB8QVQd3J2BsD7O6mLYBmJbKdTfenOMxEY7MeXfUgb+N7bUovCZXAbKuo+cfvpqWXXuL7leNFBorCn0oh+k3xa+uPstVYqz9Jvi19cfZaqxWq4Vyy8syPF+ZfhBRRRXqHlhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBq3ko4sJYZcDIblAXS/5tj2gPVcg/3x3VISw5GZWNypIIOn+hWV9HeLNhMTFOt7I3aA+Uh0dfHsk28QK2fpLAG6vERm6OBcrsdLo3tH1CuWSy4nyf8AY5K1fYiBMTtZPE612ZTax18RYUyKgnmPbXSqe8n21OkU2x3Ayk6aHuvrXbBAbsRmpBIANrn27Vwz2Oob2kVGreg9hVkza3J9ulJTYcAbj2b/AF10jk8j7h91Gc3vb+FNNoKTEsPGPD2m1elgTy9hNOUZm329lMMfxjDw3zXcjcJ1engbtvbW29qUppasag3sPZmFhk19JN6SkifRxty5H2czULJ07iV7CEZObZwWO+qhUKm1huRv7aYYrp8NcqG3LMR7tLWqKxSTwmyyPhHbtEa+J1+mueqcAgXF+QqnYjpk8iqVjy2BF1kbKTqNrfx9Ft6i4sbiJAcsTSC5JH42UeAszkdncHcd5p+++wewaImFe98pPsvTHF8YhD9W8sakbqDsQbEG2gPgazmXiErNcErrplPVgW2AsdhrYbC5ta9J2Zru3VszXPaYFr5gDoeet/QCal7vVoj7fRGwLGgICBS1vlEH6L2rpJtNXlBGllVbD0a1mvBei+Ixas0XUWRrG7KCD39lSbeO1T39BsaNPhEY8A7W+xUfcRP22OzRQaKxZ9CIfpN8Wvrj7LVWKs/Sb4tfXH2WqsVquFcsvLMjxfmX4QUUUV6h5YUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFbB5MeJjE4N8I57cOi/s2uUP91gV9AXvrH6m+h/GvgmLjmJsl8kv7NrZj7CFb+5VOLDNHTcknRo8osSrDUEgg94pNhfaw9lTnSXCAOsg819yNswH8R9RqFFqqjO1YnETVT4UqC3+ta5xOISNGkfRUBLG19B4c6gMV01wqWyB5b32XIB4HNb6AakreyItJbssaoOdLKwqnxdOovlwyKLaWKt7NbWqQwHS3CSFVu6MxAAZdyTYC63HvtQ4y6oFKPRiXTvN1SFJmjF2GRRo+l9SCLWAPhrWfdSLXzEsdzcW9ul7+2r/0+/qyEbiUe4o96oGGGuuo15je/vqqi2NWSnD8LGYp3IzukYkja9k89AQ6nfzu+29NsHIqHMiRl9xILqEtcltBYaa693KpThaf7pjTYD8TGo7tXHd6tQslwMuYKRnJZQMpYK51PziCQNt/CqpR0SJt0yQm4jL1kmdy/ZcXYZyDY5SCRcANY91txV3w2LlbhbNIxY9RKc2moyvYWAt5thWbtKxLdgNfc+dl0tm0vl18dza9aPO2ThrpfbCsP/hNSw4KOqXYU3ZnBdXUBixYi0a5RmD9kKCbiy27xz5206VmeMqGuQRfTKCACbXJ1bziAOSnna/M0EfZuQciEnMcuaxAyDkT2r2HzSOenCkFr3BBFyzC+o07FudyCbbZSbkXpJroLXqXLyYmxxDkgHLGO4byd/qirvI1zfrF/wBe2qZ0JYLFKV0BcDXwX72NTJkPePdVyw71IudEWaKDRWNN+Q/Sb4tfXH2WqsVZ+k3xa+uPstVYrVcK5ZeWZHi/Mvwgooor1DywooooGFFFFAgooooAKKKKACiiigAooooAKKKKACiiigDYeh3EHx3DHgDgYiFcisdeRMLnW9iBlJ/Vas2i4lPGsgWyXIVxlI1Fwb63DaEE3vT7yf8AG/gmMjLG0cn4uTuAY9hvY1te4tUv5TOEtBinlUdiZesXTQSKQJATy3Vh35m7q45f9c66Mck5K0Qp42RA0RHZfNYnWw5oLnv5kneowYh4rsUQ7gE5BztspHuIvbwpGV7xKSAO2w8Dop22HOlJkDGUMDawYZbG3m/Rr9NWRkpaMppiAA0AcbGxC5TewuCxAGXv177Dv6w+JaOSNjbssh0KtcCx5Gx+uuGAS43a4+UAD6QCG2NexlUOYrsbhWGZT6QWFxvpepOVaCotHSri6SpkRH6vrBaRjlv2GBBy3ym5PftVaikQn51tuyF053tzpxxvjMs6xpJYImqIqLGoGouApPf31HwN5xvoB7vdXPvudUWSE3EWSNo1ACS5S+lzlBuALU3d1uSbWYbnMT5pFhYaA6agkac9aTx630B+SNNBz8aTlBEYvoAeTZr2H+ff7KhOtES1tirsuykkWAvbLew0JHPYb+HdV84xJ/ukw/8A0uP+giqBGwN7X0LW77XNvoNWbjfF0+DSIQRIXkiA3DKEjJb9U/jD33tV0ajHUjJW9CsJiSuZ1NyoIDkBuRUWzKCNSDfwIN713ioJNCENmCsc4sFIB+UTbv1OvvpmsiMVBU2GgsbG19MxCktYaaAGl5caCXJVWBOnZIVje+a17glfG+vdXO4tO0h2mtWW3ooexJ6V+o1N5qgejB7EnpX7NS0k6g2La+yu6OxzS3OTRQaKwx9GIfpN8Wvrj7LVWKs/Sb4tfXH2WqsVquFcsvLMjxfmX4R6BfQb04/B835mX92/3V5w9wssTMbBZIyT3AOCT7hW8/064b+lJ7m+6u7FxJQqlZ5qVmD/AIPm/My/u3+6j8HzfmZf3b/dX0Zwni8GKVngkEiq2UkX0awNtR3EH20nxbj2GwpQYiVYy+bLe5vltm2HLMPfVP8AyZXWUeT5nzv+D5vzMv7t/uo/B835mX92/wB1bx/Trhv6Unub7qkeE8dw2KzfB5VkyWzWuLXvbceB91D9RJauIZV3Pnb8HzfmZf3b/dXL4KVRdopQO8owHvIr6G490iw+DVGxDMockLZGe5AufNBtSfBOlODxhKwShmAuUKsjW7wGAJHoo/5EqvLoGVdz52BpfD4KWQExxyOAbEojOAe42GhrXvKL0QhkgkxMSBJowXbKLCRRqwYDQsBqDvpakfIx/VsR+2/9aVZ76yZkGXWjLfwTif0ef90/8tH4JxP6PP8Aun/lr6E4vx/DYUoMRKI898twTe1r7DxHvqO/p5w39KX/AAv/AC1WvUTeqiGVdz5/ItvTwcKxH6PN+6f+Wm2NcFpCNizkegkkV9O4bzF9VfqFW42L7dabhFWfMUsbIxVlZWG6sCpHpB1FcVrXlW6NZ0+GxL24xaUDnHyf0rz/AFfVrJanh4inG0JqheHBSuMyRSuvesbMPRcC1KfgvEfo837p/wCWtk8kn5PH7WT6xU5xPpPg8PJ1U06o9gcpDXsdjoPCqH6hqTilY8uh8/nhWI/R5v3T/wAta7hEfiHCsssbjERArZ1KMzouhGYDz0I1Gl2I5VM/064b+lJ7m+6pfhnE4cQnWQuHS5GYXtcbjWqcXEc18UaHFU9z53meNoW01DqewbgZlawOgNwQQfRXUv8AaDUWijOU67iLQnluOVW7pp0bMMsoQAJLNHLGNRYssgde7R9dOTCoR8E157dr8TFob3YZIdfDnzqiGIoEnByGzIY7SDLGVMQuAGy3iv2jbzb89eVNI2UuGVxck2uABc7kkH+FWmbCdWJQcqgXXQEsMuEc2J5naxvyqvYbhWIY3UoQMwRsmc2Hhc6kd+o17qH6mL3Yey+hGuwMjGU5iCRodwDrbx91Lx2c2Ki1zcWFrX52FqkcD0feyFniYMpYoxeMqbXsxtYMDcEX5GuhNGrGF0VGBKrIfkvyzrbVb6X3567G1ThJNt/nyGlKFUrGU2FF81xfKb2LbEEaWWw3PMg91czQ5ZFjYlAxDICxKWbzDoLFf1t73vrXLTkl8POwU5rIzadXLyB7o2Gh5DRuVLyYeRo3hkQiTDo0iG3ybfjYzy00ceo/fQ8WCeivyQcJy308Dd4H/HAqc8V+sU72Bysb3O3Pw1rv4GWe9rs8fWo1tWtfMPWFj7qd4aS74PFS+Y4aLEnkwVDGzN35oGFu9lNP+G4YQdQsnbfCYvqpLfNlswPgv4pz6GND9U0qSX+AWDHrf+SMm4BIyFo+0RZluLNlILC2lxc5t7ag1BWzE5xlALA5SFObUm4bmT6NNOQFaXwnCNEoW/aiGJjKm7MepnjlU+kxO/j+MFRnlL4D1LpiYlHVyFlk3ssgzLfQ6BlHvjHfrVHGzOqosyJLcrWB4s8QZFVTmUG+twbDW4O1r/fTTG48s1yATYC+v81EMWY3zqmgF2a3d43Pupy+EjJucRr6f/6r0I30OWbSepcjRQaKxJ9EIfpN8Wvrj7LVWKs/Sb4tfXH2WqsVquFcsvLMjxfmX4QUUUV6h5ZsPkY/qmI/4g/9qKovy2efgvUn+uGpTyMf1TEf8Qf+1FUX5bPPwXqT/XDXFH9/87Fn8TMq1TyKbYz0w/VJWV1qnkU2xnph+qSrvUftsUdxTy1MBHhLkD8Y/wBkVV/Jhw2WTGxyqG6qPMXk+TqjKEvsSSRp4VsvFOI4aEKcRJGgYkKZCACRva9OFcFM0WVgVutjZDfUagHQ94BrljiuOHlr6ksutkV0yx6Q4HEuxGsboo72cFVHvNVbyL/1bEftv/WlUfp3xbGS4gx4sCPqz2Yl8wA7OD/aXHyvSLDUVePIx/VsR+2/9aVNwy4L+YruQn5WuFTzthepiklyiXNkUta5S17bbH3Vnf8ARfHfok/7tvurcukHSjDYIoJ2ZTIGK5UZ/NtfzRp5wqI/2l8N/Oyfun+6lh4k1FJK0DSswyVSAwOhFwRX1FhvMT1R9Qr5hxjhmkYbFnI9BJIr6dw3mL6o+oVP1W0RRIXorx1MbAxNs6Fo5U5XFxe3zWGvvHKsc6cdHDgsSUUHqpLtEfC+qelSbegijoz0gbBYxpNTGzssqjmmY6gfOU6j2jnWxdKeCR8QwhVSpJAkhfcBrXU3+awNj4Go/tT+TH+pER5JPyeP2sv1iqJ5WPyi37KP/wAqv/kshaPBFHUqyzSqyncEEAj31QPKx+UW/ZR/+VPC/ef1B/pRTK27ySfk/wD5sn8KxGtu8kn5P/5sn8Ks9T+j6kY7kj08wDy4RmjGaSJhIq3AzZfOW5BA7Nz6QKxrE47GKjhoFF4gshLodDYKVA83zQLa7VsGK431fFkwznsT4ZMoOwkWSYj/ABLcf3VrNulHQqGLETIqlQEMkQBNmDNYKbmwsSVAFvNrzppKmy6Lb2EX4xjS0nWYRGGabOvWAf2YWRDZtQFIN9fCoJHfLJ+IDXLAsz8gVulg1gNdwLi4sTynpuieDjaTN1jBWlFg9jZYetVdtzYm/h41Ew8EDK5MLak5G6xUBGmgz6A2HnXtrtrXMpYfb7f7LEpHMWJxMauIlaPRmLRlY2tmKk9lvA95vfXWlcPx3iYJVJ5QbXIeRGvvY3fb38hvpXuG6OdaDlyoxzFc4uGANwyiPNpyuNLWGt6THRmIMUfGwIwOUhUlku2oNjksNbajbXu1t+Ht9hPN+MsKdJeJ6CVYmsxLEiG5Wym1usA7xe+x90JxLi87YlJcsccwuxylMshFsuYByFBHZYXN7X52D88F4ZG/VvjWeQSZSqwE3JygJYIQTuNOZ773Z8Q4Lh/hPUxSWjjDtNKwW5QC8joo2yrooA3sd21jFwvb7MTUhi3Ej1eIjHZjkK2XMCI8svYy63yhS4tqNQdLU5n4yW+E3sGmihRjcG0idWOsHa5rnBAv57a0m2DjMEs4yqGIECWzN54d72W+ZEABFrdvnpT/ABfCY0OMQWzRLh4YyQO1iGAZ2GlrnqpAANNRVtx7C1F/6WXmZ2C9WzyuY7qfjMP1cig3trIc1xvYi9Sk/TbDyo0OITrI5LK+VgGXsxfjFN9xIsrjn2l10NeDo/AszmwMayYlQlhbLDh1G501kZGv6B32leN8NweBgM8sayMGtFGeyHlCxqL21sGikc+DtptSuN7BqZXxJlAaONlljzAq7IFlFr2uwF/lG4zEaA8qjfgp8PpqXx+eZWkbM0hYWSOPLEBqTtooHZAUDmSTUb1M40ySfT91dMYutEymUtdWjTDRQaKyhvyH6TfFr64+y1VirP0m+LX1x9lqrFarhXLLyzI8X5l+EFFFFeoeWbD5GP6piP8AiD/2oqi/LZ8ZgvUn+uGmHk86YYbBQSxzCQs8pcZFDDL1aLrcjW6mmflF6TQY5sO0IkAjWUNnUL55jItYm/mH6K5FGXvXWhO1lKbWqeRXbGemH6pKyurt5O+lOHwIxHXCQ9YY8uRQ3m573uRbzhVuOm4NIUdyx+Wn4vC+vJ9kUx8k3STKxwUjdlrtCTybd0HgdWHjm76jfKH0sw+OSBYQ4MbOWzqF0IAFrE91UmGVkZXQlWUhlYbgg3BHtquGFeFlkNvWzbvKT0Z+F4frI1vNECVtu6bsnieY8R41G+Rf+rYj9t/60rvh/lSwvVJ1ySiXKM4RAVzcypzbHf20z4N034bhnxBjWcLNJ1hXq1srFQGA7WxIv7TVNTyODQ9LsX8q3BMTiXwxgheQIsubLbS5S17nnY+6qD/Q3iP6JJ/0/wA1aZ/tTwHzZ/8AAP5qP9qeA+bP/gH81ThPEhHKog0n1MxfoZxGx/3OTb9X+avoSAWRQdwo+qqT/tTwHzZ/8A/mo/2pYD5s/wDgH81QxPcxKtDVIxnF+fJ67/aNad5J+k3/AOFI21zAT3btF7NWHhcchWYTuGd2GxZiPaSaMPO8brIjFXQhlYbgg3B99dc4KcaZBOmfTyRquYgAZjc25mwFz42A91Yh5V/yi37KP/yq34LyqYXq062OUSZRnCKpXNzyksDb2Vn3TjjUeMxZmiDhDGi2cAG63voCdNa5sCEoz1RKTTRXq27ySfk//myfwrEa0foJ02wuDwvUyiQv1jt2FDCxtbUsO6rvURcoUhR3EPK3KycQhdDldYY2U9zCWQqfeBVi6TyLj+FrjIwSyx3ZV7syiZD6rITfuB76ovT/AI9FjcSksIcKsSoc4ym4d25E6WYVPeSTi4Dy4KTVZQXQHbMFtIv95ADb9U99VTw7wle6GnqRc3EAqyM7Mo7NlbtLdsOy5RzOpANvGq3hmYsCskgL3uQt1BOpGUDn38r+F6mukOC+C4p8MS6IrIUcqzLkEdkIsbk2OpHMHuqHbELnsSLXNyBdhbZhv/rwrn9iPRA8V9zrDcXmSyySSsEBUIHKAADLpYbAC1qfYfFx+cqkSm9nNuwdiVHNh39+tQzvkc3GcNrc3AOt7ajau0mQdpb2GpFrae01NRUU6j/skvjq2OVi6pXZGDSsLLbQxg+c+v8AaW0Ftrk91eYiPqo1iFzNMq9ZzKxj4uPwZmCsR3InfXM+LYELdiMpOrMRtpca2F7DS241FcNiCh6wdk5jbVs4GluWpHff2U3CDeuhF5ltqSMCLHiIluGjwKO0h5PIAXkA780uWK3cBTrg2IIGDWWzlppMTMTr2UI6tjrp5sp9vjVfV1KsoPZO9rjNbXUmxsD30tiZGjZwwNiTFnGosgUso1uAFZTt8r00P0qauxLFa/iy6cFlYxIHYKCkjSC4ZS004kbfcdVG3skqvdOOPfDZRkzGKLMqZdQzG7O+2tzlA8FPeKhMTxRpFKdZYMdfkrbbUk9wHKmOdVN1CsNR27H22vsQb67HTlrUsGMXa3LM9rUdI7K3ZbKco125XpxJxSQG2ZT45T9w+qn3COExyq7MWzABRYgDVRrtfw9tN+I8JKMBkLaA3B09Hm13xUujOaWV7ot5ooNFYg+iEP0m+LX1x9lqrFWfpN8Wvrj7LVWK1XCuWXlmR4vzL8IKsHD+i7PCuInniwsL3CNISWfxRBqw8b/RVefY1dun+Uz4EsWGGOGiyFLXyX7eS+ma2X/prvm3aSPNRAY/g6JJDHHioZxKwUNHe6ksq9tT5vnbXvoab8a4a2GnkgZgzRkAsNAdAdL+mp/F8Gw0f4OxGGeZlmntaXICMkqDZB335nlTLp9+UsX64/7aUoyt15Bo44T0aeWI4iSaPDwZiokkJOdhuEUatse7Y72NveK9Gmji+ERTR4iDMFaSK4KMeTqdV3HPmNripHpZc8P4SV+LEUgNtusumYH9bR/c1e9ELjAcWLfF9SgHd1nbye25X3ilmlWb57fWgoaw9FE6iGaTGQQiZSyLJmBsDY6jTS499RfHeCS4V1SQowdA6PG2ZHQ7MpsPq++rbxKfBpgOGfCoZZSYpMnVyZLDMua/ffs+41xx7hbYvEcMWM2w88aLDHlytFCmUurdo5mCm+a+th3aqM3eu2v2HRA43oxLHhI8WzqVfITGL50V82R28Gy/TTTC8HaTCz4oOoWFo1K2NyXIAIO2l60k4VcRisZH8LwjRYiIRRRJLmdDGPxRC2tcHOxAPOqjwtCvCeIqwsyzQBh3EOAR7CDRHEbX1X3Cio1L8D6PyYkO4eOKGO3WTSnKi32H6zeH06ioirhPc8DjybDFt1tu+zZL+GqfRVk21VdRIh+LcHjiVXixcOIu2XJGGWQGx1yH5Olr33IqRbogsYUYrGYfDSMAwia7soO3WEaJ9I8ah+jrIMXhS9sonivfu6xd/CnvTpWHEcVnvfPcX+blGT2ZbVH4ry2AljOjk0WJiw0hUGZkEcinNGyuwVXU8xr6aZcXwBw88kLMGMbFSw0BtzF6u8+kXAFf4zrAQDv1Zljyey2W1Vfpp+UMX+1b+FEJtvX81Bob8R4O0MGGmLqRiFdlUA3XIQDfv35Uv0d4AcWJ2M0cSQqru8gJFmLC+m1sv01JdKPyfwn9nP8AbSl+gbxDD8VMqs8YgizqpysVvJcA8jScnkv83CtSC4vwmOIJ1eKixBY2yxhrjuvfe5Nqkm6ICMKMXjMPhpGAIia7uAds4XRPprvg+IwTY/BdRFJGolGfrZA9ySOrt3Wb6xSPGlh/COM+GtMq9ZIbxBS/nDq/P0ydXb6KWaV1/wCgN+G9GzPi2wsc8TWVmEq3dCAA2mlzvb0g0rLgY8JkxMGOw8skToyRx5sx7Qvv8m17+F6tHR3g8eD400CM7osDtd7ZjmVSfNAH0VTeJYnANGBhsPNHJcdqSQOMvMW79qFJyfy0Ci/eUTBR4zBwcQhXNZVzfO6tj5ux7SubW5ZmrL42UMA6EKSLiwLW7wGGUn099aR5KeJLJHPw+XVWVnQfqtpIo7tSG/vNVIxnCupxhw0jkskiISR5ykjKRvupB7tahCNNxfT+ivEvRoOOcOhjSOSCXOHazIyCN1NjoQNCNBqBzqKw25sdxV36a4OJU65Y1V2kF8t0B7DCwA22G1VGJx3ZvHLlAI3AtyOv01Db5l0UJcRY2B5ZR9dJSaIvidQWzcu7l9dTC8PSSCWUFlMOQheRUtaxvta29MnezPfMLA2AO4CkkC+w8QLacr1Cb0RL+TG6EEEi2uY6bakn6rVceM4JPgkwC28+Ynclsq8zsOwNBaqk7Zrk2BsLg9jXS+UfK391+QFX7i0d8HKeRgc//GTVsKcaZGUnF6GaoVFnVM1tTuFU30Cm9zyGt9aez4NbubFs2osUzEk5iyjkLBrWF/DnXHVAswdrXVizKpcDTUt2rgZspuBy0sKSmRX9C2ChQNBsS17E62FzzI76o3ejHsi1dFx2JPSv2amqi+iSExyHlmA9oGv1ipnJXcmc8lqNDRQaKwx9FIfpN8Wvrj7LVWKs/Sb4tfXH2WqsVquFcsvLMjxfmX4QVO8O6UzRxCB44J4lN0SePrAnqEEEfTUFRXpNJ7nmE5xLpNLN1A6uCNIHzxpFGUQHMGNxmN7lR3c6e4nptI7M74PAM7eczQEsdLXJL3JqrUVHJHsO2TPB+kc2HjaHLFLCxuYpk6xM3zgLgqfbaveLdJJp41hyRRQqcwihTq0LfObUlj7bVC0U8iu6FZY8P0ukWKKFsNg5ViUrGZYjIwBNzqXsLm2wGwrz+mWL64znqzJ1bRoMhCxo1r9WoYZTpub1XaKWSPYdsWwWJeKRJENnjZWU+Km4v3jvqdw/TGZGxB6nCuMRIJJEkjZ0zDmql9Lnta31NVyim4J7isk+McYOIyXgw0WS/wARF1ea9vO1N7W09JrrgvH5sLnEeR0kFnikXrEb0rca+gioqijKqoLJXi3GjOioMPhoVVs34mLqyTYjtEsSRrtUgvTKYhBNBhcQyABZJos7gDa7Bhf3VWqKftxCyVxfH55cSmKkYNJGyMgIsi5GzKoUbLfle/jUliumckpYvg8AWe+ZzAS9yN8xe9/GqxRUckewWWPCdLpUhigbD4OVIgQhliMjAE3Ope2vgBsK4wfSyWJ55Egwtp1RZI+rPVWS9gqB9L3N73vVfooyR7BbJTi/G2xAQdRhochJBgj6sn1jmN7W0qRPTKVwvX4fB4hlAAkmhzvYbAkMM3uqtUUZIhZYE6XYkYs4y0RlKZLFTky2A80NfYd9I8T6RGaMxnC4KK5BzxQ9W4sb2DZjoedQtFGSPYLH3BeJPhp4503jYG3zl2dfapI9tbhxeOORY8VGFIdV7YAuVIuhvvzt7RWA1rnko4oJsNJg5DcxXKX/ADbG+nqvf2MtVY8dFPt/Q49iF6fdrDxr3y39gR6oGHWxzHXetM6Z8LxEyhImQZSwkQgXJ2GViDbntbca1n2J4fiY7rJERl+UVa9vA3sV8QKpbolGrJPhUg+DYxRfWBSN73DqNt92qFBLL2W7ZDgll7RBV7lediNDue1ptTrD8R6uOWORLtKoUueyyLmUnKux80b9w2pDD4qMmz9aDfsy3bs73JVL5vZ3VCV1sT0bPJIEBYNe67bWva3oAJOw77CtG8/hbN34R/oiI/hVEKRZ3Y4gMGVwDlfUsCvazKDpe+2tW/BYvDDAtCMVE0nUyruUuWDZVAbTmBRCSengU41sUJ8UzGMWuWGU27Ia5HZGuuuUnUbAaa0RgsxK3OUZexbUZWLFgR2V7N+4ZTa17gaRQuVQj3FtEHZvY5rkFswsRvz5c+it49CzG4N+rbXUAgNbbMEv45edCil0FfzLl0EkEkcwAtZkNgO8Ecj+pU98Fb9b/CfvqD8mOFcHEdlsvYGYj5QLEr6bPV2khkvpt6B91WKdbCcU9ymGiiiseb4h+k3xa+uPstVYoorVcK5ZeWZHi/Mvwgooor1DywooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKlejPGDg8VFOL5VNpAOcbaOPHTUDvUV5RSaTjqM2rj2GBKzpqrgXKi99Lq3tX6qgZ445LCSBJLbZ4g1vQbaV5RXFh6xpino9BM8BwZbP1TDvAL5G3tmXNra5+qmuJ6JYZrt1YAPzQR42N722ooqWVIHJkfiuhUdl6uM7G7GRr31tsCu9vuNQr9C5Buj7nRXViR8nzlUb7m/oFFFNYaY1JjWXoNiCexGLaauyqQDz0JudDcDbSxNRGI4VLG7xtHNpcDKpynXle1xccvCiiiMU0RvUlcNwLiSWWJMUnOyyZB4nsyVJpguLW+Om9srX+s/XRRSpWPOz/2Q==",
        descriptionSummary: "Watch lion dance to bring prosperity",
        description: "this is a description",
        customizedMapMarker:
          "data:image/png;base64,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",
        brandColor: "#4B0082",
        hashtags: ["tech"],
      },
    ],
    userLocationLatLng: [],
    //to selectbox and dropdown
  };

  componentDidMount = async () => {
    try {
      let response = await axios.get(`${BASE_API_URL}/events`);
      console.log("API events", response.data.data);
      this.setState({
        data: [...this.state.data, ...response.data.data],
      });
    } catch (e) {
      console.log(e);
    }
  };

  setActive = (activePage) => {
    this.setState({
      active: activePage,
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar setActive={this.setActive} />
        {this.state.active === "landing" ||
        this.state.active === "addNew" ? null : (
          <FilterBar />
        )}

        <LandingPage
          setActive={this.setActive}
          data={this.state.data}
          display={this.state.active === "landing" ? "block" : "none"}
        />
        <MapListing
          data={this.state.data}
          display={this.state.active === "map" ? "block" : "none"}
        />
        <CalendarListing
          data={this.state.data}
          display={this.state.active === "calendar" ? "block" : "none"}
        />
        <AddEvent
          display={this.state.active === "addNew" ? "block" : "none"}
          data={this.state.data}
        />
      </React.Fragment>
    );
  }
}

export default App;
