<template>
  <div class="home">
    <Header />
    <br />
    <b-container class="blurb-container">
      <b-row>
        <b-col md="1"></b-col>
        <b-col md="10">
          <b-row>
            <h2 class="assoc">The Lovewell Pond Association</h2>
            <div v-for="association in Associations" :key="association.id">
              <table>
                <th class="table-heading">{{association.sub_heading}}</th>
                <tr class="table-row">{{association.detail}}</tr>
                <!-- <tr><a :href="association.link" target="_blank">{{ association.linkLabel }}</a></tr> -->
                <tr v-if="association.link"><b-button variant="success" style="color: white;" :href="association.link" target = "_blank">{{ association.linkLabel }}</b-button> </tr> 
                <tr class="table-row"></tr>
              </table>
            </div>
        </b-row>
        <!-- <b-row>
        <b-button variant="success" style="color: white;" href= "https://www.surveymonkey.com/r/WK6KSPW" target = "_blank">Lake Survey</b-button> 
        </b-row> -->
        <br /> <br /> 
        <b-row>
         <h2 class="assoc">Join our Facebook Group</h2> 
         <p>To see pics of the lake and neighborhood updates, as well as Lost and Found Items: <a href="https://www.facebook.com/groups/553797096434971" target="_blank">Lovewell Pond Facebook Link</a> </p>
        </b-row>
        <br /> <br /> 
        <b-row>
          <!-- <b-col md="12"> -->
            <h2 class="events">Upcoming Events</h2>
            <div v-for="event in Events" :key="event.id">
              <table>
                <th class="table-heading">{{event.sub_heading}}</th>
                <tr class="table-row">{{event.detail}}</tr>
                <tr v-if="event.link"><a :href="event.link" target="_blank">{{ event.link }}</a></tr>
                 <!-- <tr v-if="events.link"><b-button variant="success" style="color: white;" :href="association.link" target = "_blank">{{ association.linkLabel }}</b-button> </tr>  -->
                <tr class="table-row"></tr>
                 <tr class="table-row"></tr>
              </table>
            </div>
          <!-- </b-col> -->
          <!-- <b-button variant="success" style="color: white;" href= "https://www.surveymonkey.com/r/WK6KSPW" target = "_blank">Lake Survey</b-button>  -->
        </b-row>
        <br /> 
        <b-row>
          <!-- <b-col md="12"> -->
            <div v-if="item in News">
            <h2 class="news">News &amp; Announcements</h2>
          </div>
            <div v-for="item in News" :key="item.id">
              <table>
                <th class="table-heading">{{item.sub_heading}}</th>
                <tr class="table-row">{{item.detail}}</tr>
                 <tr class="table-row"></tr>
              </table>
            </div>
            <!-- </b-col> -->
                <!-- <p><b-button variant="success" style="color: white;" href="https://www.maine.gov/ifw/programs-resources/recreational-opportunities/fryeburg-environmental-assessment.html" target=“_blank”>Fryeburg Shooting Facility Environmental Assessment</b-button></p> -->
        </b-row>
        </b-col>
        <b-col md="1">
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      Associations: [
        {
          id: 1,
          title: "The Lovewell Pond Association",
          sub_heading: null,
          detail:
            "The Lovewell Pond Association is a group dedicated to the care, enhancement, and preservation of Lovewell Pond located in Fryeburg, Maine. The LPA is interested in all aspects of lake preservation including: Lake Uses, Wildlife, Water Quality, Public Access, Shoreline, Maine Regulations & Other Associations.",
          link: null,
          linkLabel: null
          },
        {
          id: 2,
          title: "The Lovewell Pond Association",
          sub_heading: "Please Help us Protect our Loons.",
          detail: 'Did you know that Common Loons are protected by both state and federal laws prohibiting harassment of wildlife?  Last year, our loons were frightened off their nests by boats getting too close, boat wakes, and once, by young campers shaking the floating nests!  Please consider sharing this Loon Poster from the Maine Audubon Society with your friends, family, and renters, to help protect our loons.',
          link: "https://www.maine.gov/ifw/docs/livingwithloons.pdf?fbclid=IwAR1EUtdaFbGhmYBcdFhrrmghQYvEHhoV-TuIvRND6xNlb8KaZyROeMbALxc",
          linkLabel: "Living With Loons Brochure"
        },
         {
          id: 3,
          title: "The Lovewell Pond Association",
          sub_heading: "Lake Survey",
          detail:
            "Please take our 5 question survey on Lovewell Pond",
          link: "https://www.surveymonkey.com/r/WK6KSPW",
          linkLabel: "Lake Survey"
        }
      ],
      Events: [
         {
          id: 1,
          title: "Upcoming Events",
          sub_heading: "2023 Annual Meeting, Saturday, June 24th, 9 AM",
          detail:
            'The Lovewell Pond Association (a.k.a. Property Owners of Lovewell Pond) will hold its Annual meeting on Saturday, June 24, at the Rapputak Community Lodge at 9:00 AM.  From 9 to 10, we will have coffee and donuts and a chance to socialize with your neighbors here on Lovewell.  The business portion of the meeting will begin at 10 AM and go until noon.  Please bring your good ideas to share - we look forward to seeing everyone!'
        },
        {
          id: 2,
          title: "Upcoming Events",
          sub_heading: "Fryeburg Pickleball Pick up Games, Tues/Thurs/Sat/Sun, 9 - 11 AM",
          detail:
            "Pick Up Pickleball Games are played at the Fryeburg Recreation Center, the cost is $3.00 per day.  You must have a change of sneakers to enter the gym. The rec center is located at 59 Recreation Drive, Fryeburg.  Sign up at the rec center website:",
          link: "https://fryeburgrec.com/adult-programs/"
          },
         {
          id: 3,
          title: "Upcoming Events",
          sub_heading: "Saco River Kayak Trip, Saturday, July 1, 11:30 AM",
          detail:
            "Drop in at Walker's Bridge on the Saco between 11:30 and Noon, and paddle down stream to Lovewell Pond to Karen & Mark's house at 3 Wall Street, which is straight across from Indian Point Beach. It is a green cabin with an American flag flying, and American Flag buntings.  Feel free to drop any potluck dishes off at the house beforehand, between 9 and 11 AM.  BYOB and BYO-chair. The house is off of Ruth's Way, on the Rte 5/113 side of the lake."
        },
         {
          id: 4,
          title: "Upcoming Events",
          sub_heading: "Annual Loon Count, Saturday, July 15, 7 AM",
          detail:
            "Meet at Loon Island at 7 AM, to count the loons on the lake.  Please bring binnoculars.  Last year we counted 7 loons, and unfortunately, no baby chicks.  We'd love to get kids involved!"
        },
         {
          id: 5,
          title: "Upcoming Events",
          sub_heading: "Saco River Brewery Meet Up, Saturday, July 29th, 4 PM to Whenever",
          detail: "Meet up at the Saco River Brewery!  Come meet your neighbors and enjoy some great drinks! Look for the sign that says 'Lovewell Pond Association' and come join us!  Saco River Brewery is located just off Route 302 at 10 Jockey Cap Ln, Fryeburg."
        },
        {
          id: 6,
          title: "Upcoming Events",
          sub_heading: "Annual Boat Parade, Saturday, August 19th, 4 PM to Sundown",
          detail:
            "The property owners of the Lovewell Pond Association are sponsoring our third annual Sunset Boat Regatta!  We will meet Saturday, August 19th at Indian Point Beach at 4:00 pm.   Bring chairs, blankets, wine, beer, drinks and snacks. We will leave Indian Point, circle the lake a couple of times, arrive back at the beach and together watch the sun go down.  Part of the fun will be decorating our boats, so go wild and be creative!Anything goes - from holiday themes to pirate boats.  Above all have fun!"
        },
        // {
        //   id: 3,
        //   title: "Upcoming Events",
        //   sub_heading: "Community Pot Luck Dinner, Saturday, August 27th, 5:00 PM",
        //   detail: "Come join your Lovewell Pond friends and neighbors for a community pot luck dinner, which will be held on Saturday, August 27th at 5 PM.  The theme is 'Italy on the Pond'.  If your name begins with A through G, please bring a side dish to share; if your name begins with H through R, please bring a main dish to share; and if your name begins with S through Z, please bring a dessert to share.  Everyone should bring their own drinks, and lawn chairs.  Please park on the road at Rappatuck, and walk down to the Rec Hall.  The parking lot next to the Rec Hall is reserved for those with difficulty walking from the road.  And don't forget to bring your appetite!"
        // },
       
      ],
      News: [
       /* {
          id: 7,
          title: "News and Announcements",
          sub_heading: "Ice-Out 2020",
          detail:
            "Lovewell Pond Ice-Out was on April 6th, 2020, about 12 days earlier than in 2019."
            },*/
          //   {
          // id: 6,
          // title: "News and Announcements",
          // sub_heading: "Provide your feedback on the proposed changes to the gun range by Friday, August 15th",
          // detail: "An environmental study on the proposed changes to the shooting range has been done by the Maine Department of Inland Fisheries and Wildlife and U.S. Fish and Wildlife Service.  A link to the study is below, along with a place to submit your comments.  They are asking for comments to be sent by August 15. "
          //  },
       /*   {
          id: 8,
          title: "News and Announcements",
          sub_heading: "Invasive Plant and Inspection Program",
          detail:
            "Peter Wilkens noted that due to the more than double inspections performed at the boat ramp in 2018, the state approved Lovewell Pond for the full $2000 Courtesy Boat Inspection grant for 2019.  Peter submitted the grant application in March 2019 and noted that Lovewell Pond inspected more than 1500 boats in 2018.  This includes required trailers, canoes and kayaks.  On one very busy day in 2018, Allison, our only inspector at the boat ramp, inspected 90 boats.  That is quite a feat.  This year’s inspections started a little slower due to the weather and the flooding situation however it is definitely picking up.  Only July 4th of this year, 67 boats were inspected.  It seems that the Lovewell Pond boat ramp gets busier every year, particularly with the Saco River access, the media press, and the livery brochures.   Lovewell Pond is definitely on the map.  This increases the risk of invasive plant hitchhikers such as variable leaf milfoil, etc. on boats that are launched in the pond after possibly coming from another infested body of water. It also makes boat, kayaks and canoes and trailer inspections critical.  The key emphasis this year is “Clean, Drain and Dry”.  Boaters are urged to clean off any mud, plants and animals from boats, jet-ski’s, trailers and other equipment.  The boat live well, engine and equipment should be drained well away from surface waters and anything that comes in contact with water should be dried between use at different lakes.  Please also remind your renters of this and that they also need a Milfoil sticker on their boat.  These can now be purchased on line.  With all of the activity at the boat ramp, we could use some help, if not this year maybe next year.  Please let us know if you can lend a hand, it will be so appreciated.  Allison continues to do an amazing job and keeps things calm in a chaotic atmosphere, not to mention keeping her keen eye out for those nasty invasives.   She’s a real pro and we are fortunate to have her as an inspector."
            }, */
         /*    {
          id: 9,
          title: "News and Announcements",
          sub_heading: "Water Quality Testing",
          detail:"Paul Fortin continues to perform seiki disk testing 4 times a year, testing for water clarity.  The results have been good and water has been relatively clear.  Josh Everett has coordinated the more extensive water testing.  This data is collected and then sent off for analysis.  It is also forwarded to the Saco River Corridor Commission for inclusion in their analysis from the Saco River. It’s available at www.srcc.maine.org.  Some folks have noticed that the water seems warmer this year and in some places almost hot.  They are also seeing more algae bloom and weed growth in the lower end of the pond.  A Level 3 plant inspection is slated for this year.  A Plant 3 Survey is the most comprehensive survey performed in the water by divers.  The pond and plant life are examined below the surface.  The last Level 3 Plant survey was completed in 2010.  We now have a good established baseline to compare the findings."
             } */
          //   {
          // id: 10,
          // title: "News and Announcements",
          // sub_heading: "Provide your feedback on the proposed changes to the gun range by Friday, August 15th",
          // detail: "An environmental study on the proposed changes to the shooting range has been done by the Maine Department of Inland Fisheries and Wildlife and U.S. Fish and Wildlife Service.  A link to the study is below, along with a place to submit your comments.  They are asking for comments to be sent by August 15. "
          //  }
      ]
    };
  }
};
</script>
<style scoped>
.margins {
  background: #F6F8F9 0% 0% no-repeat padding-box;
}
.blurb-container {
  text-align: left;
}
.assoc {
  left: 170px;
  /* width: 770px; */
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}
.events {
  left: 170px;
  /* width: 770px; */
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}
.news {
  left: 170px;
  /* width: 770px; */
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}

.table-heading {
  left: 170px;
  /* width: 770px; */
  height: 38px;
  font: Bold 20px/20px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: #287492;
  opacity: 1;
}

.table-row {
  top: 30px;
  left: 0px;
  /* width: 324px; */
  height: 24px;
  font: Regular 18px/30px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: #343638;
}
.survey {
  font: Bold 18px/30px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: #343638;
}
</style>

