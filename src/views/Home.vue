<template>
  <div class="home">
    <Header />
    <br />
    <b-container class="blurb-container">
      <b-row>
        <b-col md="1"></b-col>
        <b-col md="10">
          <b-row>
          <!-- <b-col md="12"> -->
            <h2 class="assoc">The Lovewell Pond Association</h2>
            <div v-for="association in Associations" :key="association.id">
              <table>
                <tr class="table-row">{{association.detail}}</tr>
              </table>
            </div>
          <!-- </b-col> -->
        </b-row>
        <br />
        <b-row>
          <!-- <b-col md="12"> -->
            <h2 class="events">Upcoming Events</h2>
            <div v-for="event in Events" :key="event.id">
              <table>
                <th class="table-heading">{{event.sub_heading}}</th>
                <tr class="table-row">{{event.detail}}</tr>
                 <tr class="table-row"></tr>
              </table>
            </div>
          <!-- </b-col> -->
          <b-button variant="success" style="color: white;" href= "https://www.surveymonkey.com/r/WK6KSPW" target = "_blank">Lake Survey</b-button> 
        </b-row>
        <br /> <br /> 
        <b-row>
          <!-- <b-col md="12"> -->
            <h2 class="news">News &amp; Announcements</h2>
            <div v-for="item in News" :key="item.id">
              <table>
                <th class="table-heading">{{item.sub_heading}}</th>
                <tr class="table-row">{{item.detail}}</tr>
                 <tr class="table-row"></tr>
              </table>
            </div>
          <!-- </b-col> -->
             <b-button variant="success" style="color: white;" href= "https://www.surveymonkey.com/r/WK6KSPW" target = "_blank">Lake Survey</b-button>
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
            "The Lovewell Pond Association is a group dedicated to the care, enhancement, and preservation of Lovewell Pond located in Fryeburg, Maine. The LPA is interested in all aspects of lake preservation including: Lake Uses, Wildlife, Water Quality, Public Access, Shoreline, Maine Regulations & Other Associations"
        }
      ],
      Events: [
        {
          id: 2,
          title: "Upcoming Events",
          sub_heading: "2021 Annual Meeting, Saturday, July 10th",
          detail:
            'The Lovewell Pond Association (a.k.a. Property Owners of Lovewell Pond) will hold its Annual meeting on Saturday, July 10.  The meeting will go from 10:00 AM until noon, and be held at the Rapputak Community Lodge.  Please bring your good ideas and Lake info to share - we look forward to seeing everyone!'
        },
        {
          id: 3,
          title: "Upcoming Events",
          sub_heading: "Annual Loon Count, Saturday, July 17",
          detail:
            "Meet at the Public Boat Ramp at 7 AM, to count the loons on the lake.  Please bring binnoculars.  Last year we counted 7 loons, and unfortunately, no baby chicks.  We'd love to get kids involved!"
        },
        {
          id: 4,
          title: "Upcoming Events",
          sub_heading: "First Annual Boat Parade, Sunday, Sept 5th, 4:30 PM",
          detail:
            "The property owners of the Lovewell Pond Association are sponsoring our first ever Sunset Boat Regatta!  We will meet Sunday, September 5th at Indian Point Beach at 4:30 pm.  Bring chairs, blankets, wine, beer, drinks and snacks. We will leave Indian Point, circle the lake, arrive back at the beach and together watch the sun go down.  Part of the fun will be decorating our boats, so go wild and be creative! Anything goes- from holiday themes to pirate boats. Above all have fun!"
        },
             {
          id: 5,
          title: "Upcoming Events",
          sub_heading: "Plant Identification Paddle - To be Scheduled",
          detail: "This paddle will not be scheduled for 2021 because our biologist, Laurie Callahan, is not available.  Please email us if you are interested in participating and we will keep you in the loop when the next one is scheduled.   In the meantime, please fill out our 5 question survey to help with plant identification. "
             }
      ],
      News: [
        {
          id: 7,
          title: "News and Announcements",
          sub_heading: "Ice-Out 2020",
          detail:
            "Lovewell Pond Ice-Out was on April 6th, 2020, about 12 days earlier than in 2019."
            },
             {
          id: 8,
          title: "News and Announcements",
          sub_heading: "Invasive Plant and Inspection Program",
          detail:
            "Peter Wilkens noted that due to the more than double inspections performed at the boat ramp in 2018, the state approved Lovewell Pond for the full $2000 Courtesy Boat Inspection grant for 2019.  Peter submitted the grant application in March 2019 and noted that Lovewell Pond inspected more than 1500 boats in 2018.  This includes required trailers, canoes and kayaks.  On one very busy day in 2018, Allison, our only inspector at the boat ramp, inspected 90 boats.  That is quite a feat.  This year’s inspections started a little slower due to the weather and the flooding situation however it is definitely picking up.  Only July 4th of this year, 67 boats were inspected.  It seems that the Lovewell Pond boat ramp gets busier every year, particularly with the Saco River access, the media press, and the livery brochures.   Lovewell Pond is definitely on the map.  This increases the risk of invasive plant hitchhikers such as variable leaf milfoil, etc. on boats that are launched in the pond after possibly coming from another infested body of water. It also makes boat, kayaks and canoes and trailer inspections critical.  The key emphasis this year is “Clean, Drain and Dry”.  Boaters are urged to clean off any mud, plants and animals from boats, jet-ski’s, trailers and other equipment.  The boat live well, engine and equipment should be drained well away from surface waters and anything that comes in contact with water should be dried between use at different lakes.  Please also remind your renters of this and that they also need a Milfoil sticker on their boat.  These can now be purchased on line.  With all of the activity at the boat ramp, we could use some help, if not this year maybe next year.  Please let us know if you can lend a hand, it will be so appreciated.  Allison continues to do an amazing job and keeps things calm in a chaotic atmosphere, not to mention keeping her keen eye out for those nasty invasives.   She’s a real pro and we are fortunate to have her as an inspector."
            },
             {
          id: 9,
          title: "News and Announcements",
          sub_heading: "Water Quality Testing",
          detail:"Paul Fortin continues to perform seiki disk testing 4 times a year, testing for water clarity.  The results have been good and water has been relatively clear.  Josh Everett has coordinated the more extensive water testing.  This data is collected and then sent off for analysis.  It is also forwarded to the Saco River Corridor Commission for inclusion in their analysis from the Saco River. It’s available at www.srcc.maine.org.  Some folks have noticed that the water seems warmer this year and in some places almost hot.  They are also seeing more algae bloom and weed growth in the lower end of the pond.  A Level 3 plant inspection is slated for this year.  A Plant 3 Survey is the most comprehensive survey performed in the water by divers.  The pond and plant life are examined below the surface.  The last Level 3 Plant survey was completed in 2010.  We now have a good established baseline to compare the findings."
             }
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

