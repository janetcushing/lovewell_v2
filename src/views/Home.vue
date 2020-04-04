<template>
  <div class="home">
    <Header />
    <hr />
    <b-container class="blurb-container">
      <b-row>
        <b-col class="margins" md="1"></b-col>
        <b-col class="margins" md="10"></b-col>
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
        </b-row>
        <br />
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
        </b-row>
        <b-col class="margins" md="1"></b-col>
      </b-row>
    </b-container>
    <hr />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";
// import Blurb from "@/components/Blurb.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    // Blurb,
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
          sub_heading: "2020 Annual Meeting, Saturday, July 10",
          detail:
            'The Lovewell Pond Association (a.k.a. Property Owners of Lovewell Pond) will hold its Annual meeting on Saturday, July 10th, from 10:00 AM until noon, at the Rapputak Community Lodge.  Please bring your good ideas and Lake info to share - we look forward to seeing everyone!'
        },
        {
          id: 3,
          title: "Upcoming Events",
          sub_heading: "Loon Count, Saturday, July 18",
          detail:
            "Meet at the Public Boat Ramp at 7 AM, to count the loons on the lake.  Please bring binnoculars.  Last year we counted 7 loons, and unfortunately, no baby chicks."
        },
        {
          id: 4,
          title: "Upcoming Events",
          sub_heading: "First Annual Boat Parade, Saturday, July 18th",
          detail:
            "Meet at Rapputak Harbor at 10 AM for our first annual Boat Parade!  Boats will line up and make 1 (or maybe 2!) laps around the pond.  Feel free to decorate your boat for the parade!"
        },
             {
          id: 5,
          title: "Upcoming Events",
          sub_heading: "Plant Identification Paddle - To be Scheduled",
          detail: "This paddle, starting at the boat ramp, will be scheduled for some time this summer, with Laurie Callahan, a biologist.  Please e-mail the Webmaster if you are interested in participating and we will keep you in the loop when it gets scheduled."
             }
      ],
      News: [
        {
          id: 7,
          title: "News and Announcements",
          sub_heading: "Invasive Plant and Inspection Program",
          detail:
            "Peter Wilkens noted that due to the more than double inspections performed at the boat ramp in 2018, the state approved Lovewell Pond for the full $2000 Courtesy Boat Inspection grant for 2019.  Peter submitted the grant application back in March and noted that Lovewell Pond inspected more than 1500 boats in 2018.  This includes required trailers, canoes and kayaks.  On one very busy day in 2018, Allison, our only inspector at the boat ramp, inspected 90 boats.  That is quite a feat.  This year’s inspections started a little slower due to the weather and the flooding situation however it is definitely picking up.  Only July 4th of this year, 67 boats were inspected.  It seems that the Lovewell Pond boat ramp gets busier every year, particularly with the Saco River access, the media press, and the livery brochures.   Lovewell Pond is definitely on the map.  This increases the risk of invasive plant hitchhikers such as variable leaf milfoil, etc. on boats that are launched in the pond after possibly coming from another infested body of water. It also makes boat, kayaks and canoes and trailer inspections critical.  The key emphasis this year is “Clean, Drain and Dry”.  Boaters are urged to clean off any mud, plants and animals from boats, jet-ski’s, trailers and other equipment.  The boat live well, engine and equipment should be drained well away from surface waters and anything that comes in contact with water should be dried between use at different lakes.  Please also remind your renters of this and that they also need a Milfoil sticker on their boat.  These can now be purchased on line.  With all of the activity at the boat ramp, we could use some help, if not this year maybe next year.  Please let us know if you can lend a hand, it will be so appreciated.  Allison continues to do an amazing job and keeps things calm in a chaotic atmosphere, not to mention keeping her keen eye out for those nasty invasives.   She’s a real pro and we are fortunate to have her as an inspector."
            },
             {
          id: 8,
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
  background: #265730 0% 0% no-repeat padding-box;
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
</style>

