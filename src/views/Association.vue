<template>
  <div class="home">
    <Header />
    <br />
    <br />
    <b-container class="blurb-container">
      <b-row>
        <b-col md="1"></b-col>
        <b-col md="10">
          <b-row>
            <h2 class="events">Association Officers</h2>
          </b-row>
          <b-row>
            <table>
              <col width="175" />
              <tr v-for="person in officers" :key="person.id">
                <td class="table-heading">{{person.title}}</td>
                <td class="table-row">{{person.name}}</td>
                <!-- <td class="table-row" v-html="person.email"></td> -->
              </tr>
            </table>
          </b-row>
          <br/>
          <b-row>
            <h5 class="splash">We currently have open positions on our board.  Please <a href="mailto:lpa-eboard@googlegroups.com" target="_blank">contact us</a> if you would like to volunteer!</h5>
          </b-row>
          <br/>
          <b-row>
            <h6><strong>A Special <span class="splash">THANK YOU</span> to all of our board, past and present ! </strong></h6>
            <p>Colleen and Peter, our Members at Large, are the folks who know everything about Lovewell Pond, and have been protecting it for many, many years.  We appreciate them for their years of service!</p>
            <p></p>
         </b-row>
         <!-- <b-row>
          <h6><strong>Fryeburg Shooting Facility Environmental Assessment Study </strong></h6>
            <p>An environmental study on the proposed changes to the shooting range has been done by the Maine Department 
              of Inland Fisheries and Wildlife and U.S. Fish and Wildlife Service.  A link to the document, and a place to submit your 
              comments on the plan are <a href="https://www.maine.gov/ifw/programs-resources/recreational-opportunities/fryeburg-environmental-assessment.html" target="_blank">here</a>,  They are asking for comments to be sent to them by August 15th. </p>
          <p></p>
        </b-row> -->
           <!-- <b-row>
              <h6><strong>LPA Annual Meeting Minutes:</strong></h6>
                <ul style="list-style-type: none;">
                  <b-row>
                  <li><a href="2019LovewellPondAnnualMeetingMinutes.pdf" target="_blank">2019</a></li>
                  </b-row>
                </ul>
          </b-row> -->
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
  name: "Association",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      officers: [
        {
          id: 1,
          title: "President:",
          name: "Dori Stern"
         },
          {
          id: 3,
          title: "Treasurer:",
          name: "Paul Fortin"
         },
          {
          id: 4,
          title: "Secretary:",
          name: "Tony Gosselin"
         },
          {
          id: 5,
          title: "Members at Large:",
          name: "Peter Wilkins"
         },
         {
          id: 6,
          title: "",
          name: "Colleen Wilkins"
         },
         {
          id: 7,
          title: "Social Media Specialist",
          name: "Mike Cherry"
         },
        {
          id: 9,
          title: "Webmaster of this site:",
          name: "Janet Cushing"
        }
      ],
      minutes: [
        {
          year: 2019,
          path: "2019LovewellPondAnnualMeetingMinutes.pdf",
         },{
          year: 2020,
          path: "2019LovewellPondAnnualMeetingMinutes.pdf",
         }
      ]
    };
  }
};
</script>
<style scoped>
.margins {
  background: #f6f8f9 0% 0% no-repeat padding-box;
}
.blurb-container {
  text-align: left;
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
.table-heading {
  left: 170px;
  /* height: 38px; */
  font: Bold 14px/14px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: #287492;
  opacity: 1;
}
.table-row {
  top: 30px;
  left: 0px;
  /* height: 24px; */
   font: Bold 14px/14px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: #343638;
}

.containerz {
  display: flex;
  width: 300px;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0 0 0 8px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}
.item {
  margin: 0 4px 4px 0;
  background: aqua;
}
.splash {
   font: Regular 14px/14px "Open Sans";
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: #cc1717;

}
</style>

