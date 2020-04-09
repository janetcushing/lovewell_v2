<template>
  <div class="home">
    <Header />
    <hr />
    <b-container class="blurb-container">
      <b-row>
        <b-col class="margins" md="1"></b-col>
        <b-col md="10">
           <b-row>
            <h2 class="assoc">Resources</h2>
            </b-row>
            <b-row>
                <p class="table-row">A number of agencies and organizations have programs and activities which affect the work of the Lovewell Pond Association, and which influence the uses and environment of the Pond.</p> 
        </b-row> 
        <br/><br/>
             <b-row>
            <h2 class="events">Town of Fryeburg</h2>
            </b-row>
            <b-row>
              <table v-for="tow in town" :key="tow.id">
                <tr class="table-row"  v-html="tow.detail">{{tow.detail}}</tr>
              </table>
        </b-row>
          <br/><br/>
        <b-row>
            <h2 class="events">State of Maine</h2>
            </b-row>
            <b-row>
              <table >
                <tr v-for="sta in state" :key="sta.id"> 
                  <p class="table-heading">{{sta.sub_heading}}</p>
                  <p class="table-row"  v-html="sta.detail">{{sta.detail}}</p>
                 </tr>
              </table>
        </b-row>
          <br/><br/>
        <b-row>
            <h2 class="events">Lake Associations</h2>
            </b-row>
            <b-row>
              <table>
                <tr v-for="water in lake" :key="water.id">
                  <p class="table-heading">{{water.sub_heading}}</p>
                  <p class="table-row" v-html="water.detail">{{water.detail}}</p>
                </tr>
              </table>
        </b-row>
         <br/><br/>
        </b-col>
        <b-col md="1">
            <p >
                <a href= "https://www.wunderground.com/?cm_ven=cgi" target = "_blank"><img  style="border-style: solid;" src="http://weathersticker.wunderground.com/weathersticker/infobox_both/language/www/US/ME/Fryeburg.gif" 
                alt="Click for Fryeburg, Maine Forecast" height="108" width="144" ></a>
                </p>
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
  name: "Resources",
  components: {
    Header,
    Footer
  },
  data() {
    return {
       town: [
        {
          id: 2,
          title: "Town of Fryeburg",
          detail: '<a href="www.fryeburgmaine.org/">www.fryeburgmaine.org/</a>'
        }
      ],
       state: [
        {
          id: 3,
          title: "State of Maine",
          sub_heading: "Department of Inland Fisheries and Wildlife",
          detail: '<a href="http://www.state.me.us/ifw">http://www.state.me.us/ifw</a>'   
        },
        {
          id: 4,
          title: "State of Maine",
          sub_heading: "Department of Environmental Protection",
          detail:
           '<p><a href="http://www.maine.gov/dep">http://www.maine.gov/dep</a></p>'
        },
             {
          id: 5,
          title: "State of Maine",
          sub_heading: "Department of Conservation",
          detail: '<p><a href="http://www.maine.gov/doc">http://www.maine.gov/doc</a></p>'
             }
      ],
      lake: [
        {
          id: 7,
          title: "Lake Associations",
          sub_heading: "Maine Congress of Lake Associations",
          detail: '<p><a href="http://www.mainecola.org">http://www.mainecola.org</a></p>'
            },
             {
          id: 8,
          title: "Lake Associations",
          sub_heading: "Lakes Environmental Association",
          detail: '<p><a href="http://www.mainelakes.org">http://www.mainelakes.org</a></p>'
             },
            {
          id: 9,
          title: "Lake Associations",
          sub_heading: "Maine Volunteer Lake Monitoring Program",
          detail: '<p><a href="http://www.mainevolunteerlakemonitors.org/">http://www.mainevolunteerlakemonitors.org/</a></p>'
             },
             {
          id: 10,
          title: "Lake Associations",
          sub_heading: "Maine Center for Invasive Aquatic Plants",
          detail: '<p><a href="http://www.mainevolunteerlakemonitors.org/mciap">http://www.mainevolunteerlakemonitors.org/mciap</a></p>'
             },
             {
          id: 11,
          title: "Lake Associations",
          sub_heading: "The Loon Preservation Committee",
          detail: '<p><a href="http://www.loon.org">http://www.loon.org</a></p>'
   }
      ],
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
          sub_heading: "Annual Loon Count, Saturday, July 18",
          detail:
            "Meet at the Public Boat Ramp at 7 AM, to count the loons on the lake.  Please bring binnoculars.  Last year we counted 7 loons, and unfortunately, no baby chicks."
        },
        {
          id: 4,
          title: "Upcoming Events",
          sub_heading: "First Annual Boat Parade, Saturday, July 18",
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
  background: #F6F8F9 0% 0% no-repeat padding-box;
}
.blurb-container {
  text-align: left;
}
.assoc {
  left: 170px;
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}
.events {
  left: 170px;
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}
.news {
  left: 170px;
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}

.table-heading {
  left: 170px;
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
  height: 24px;
  font: Regular 18px/30px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: #343638;
}


</style>

