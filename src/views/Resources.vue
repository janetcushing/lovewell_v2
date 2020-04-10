<template>
  <div class="home">
    <Header />
    <hr />
    <b-container class="blurb-container">
      <b-row>
        <b-col md="1"></b-col>
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

