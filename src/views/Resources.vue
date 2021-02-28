<template>
  <div class="home">
    <Header />
    <br />
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
        <br/>
             <b-row>
            <h2 class="events">Town of Fryeburg</h2>
            </b-row>
            <b-row>
               <table >
                <tr v-for="tow in town" :key="tow.id"> 
                  <td class="table-heading" v-html="tow.detail">{{tow.detail}}</td>
                 </tr>
              </table>
        </b-row>
          <br/><br/>
        <b-row>
            <h2 class="events">State of Maine</h2>
            </b-row>
            <b-row>
              <table >
                <tr v-for="sta in state" :key="sta.id"> 
                  <td class="table-heading" v-html="sta.detail">{{sta.detail}}</td>
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
                  <td class="table-heading" v-html="water.detail">{{water.detail}}</td>
                </tr>
              </table>
        </b-row>
         <br/><br/>
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
          id: 1,
          title: "Town of Fryeburg",
          detail: '<a href="https://www.fryeburgmaine.org/" target="_blank">Town of Fryeburg Website</a>'
        }
      ],
       state: [
        {
          id: 2,
          title: "State of Maine",
          sub_heading: "State of Maine",
          detail: '<a href="https://www.maine.gov/portal/index.html" target="_blank">State of Maine Website</a>'   
        },
        {
          id: 4,
          title: "State of Maine",
          sub_heading: "Maine Department of Environmental Protection",
          detail:
           '<a href="http://www.maine.gov/dep" target="_blank">Department of Environmental Protection</a>'
        },
             {
          id: 5,
          title: "State of Maine",
          sub_heading: "Maine Department of Conservation",
          detail: '<a href="http://www.maine.gov/doc" target="_blank">Department of Conservation</a>'
             }
      ],
      lake: [
        // {
          // id: 7,
          // title: "Lake Associations",
          // sub_heading: "Maine Congress of Lake Associations",
          // detail: '<a href="http://www.mainecola.org" target="_blank">Maine Congress of Lake Associations</a>'
          //   },
             {
          id: 8,
          title: "Lake Associations",
          sub_heading: "Lakes Environmental Association",
          detail: '<a href="http://www.mainelakes.org" target="_blank">Maine Lakes Environmental Association</a>'
             },
          //   {
          // id: 9,
          // title: "Lake Associations",
          // sub_heading: "Maine Volunteer Lake Monitoring Program",
          // detail: '<a href="http://www.mainevolunteerlakemonitors.org/" target="_blank">Maine Volunteer Lake Monitoring Program</a>'
          //    },
          //    {
          // id: 10,
          // title: "Lake Associations",
          // sub_heading: "Maine Center for Invasive Aquatic Plants",
          // detail: '<a href="http://www.mainevolunteerlakemonitors.org/mciap" target="_blank">Maine Center for Invasive Aquatic Plants</a>'
          //    },
             {
          id: 11,
          title: "Lake Associations",
          sub_heading: "The Loon Preservation Committee",
          detail: '<a href="http://www.loon.org" target="_blank">The Loon Preservation Committee</a>'
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
  font: Bold 22px/14px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}
.events {
  left: 170px;
  height: 38px;
  font: Bold 22px/14px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}
.news {
  left: 170px;
  height: 38px;
  font: Bold 22px/14px Ubuntu;
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

