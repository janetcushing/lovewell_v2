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
            <h5 class="splash">We currently have 2 open Director's positions.  Please <a href="mailto:lovewellpondassoc@gmail.com" target="_blank">contact us</a> if you would like to volunteer!</h5>
          </b-row>
          <br/>
          <b-row>
            <h6><strong>Nominations and Election of Officers – </strong></h6><p>As we have done for the past 14 years, the attendees voted to extend the same board members at our last meeting.  Please consider serving as a board member.&nbsp;&nbsp;Just send us <a href="mailto:lovewellpondassoc@gmail.com" target="_blank">an e-mail</a> and we’ll get you up to speed.  It’s been 15 years for so many of us and time to transition to some new folks, with new plans and new ideas for the LPA.</p>
          </b-row>
           <b-row>
              <h6><strong>Meeting Minutes:</strong></h6>
                <ul style="list-style-type: none;">
                  <b-row>
                  <li><a href="2019LovewellPondAnnualMeetingMinutes.pdf" target="_blank">2019</a></li>
                  </b-row>
                </ul>
          </b-row>
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
          name: "Gene Bergoffen"
         },
          {
          id: 2,
          title: "Vice President:",
          name: "Peter Wilkins"
         },
          {
          id: 3,
          title: "Secretary:",
          name: "Colleen Wilkins"
         },
          {
          id: 4,
          title: "Treasurer:",
          name: "Paul Fortin"
         },
          {
          id: 5,
          title: "Directors:",
          name: "Peter Bourneuf,"
         },
         {
          id: 6,
          title: "",
          name: "Debbie Fortin,"
         },
         {
          id: 7,
          title: "",
          name: "Mike Cherry,"
         },
         {
          id: 8,
          title: "",
          name: "Frank Goebtz"
         },
          {
          id: 9,
          title: "Webmaster of this site",
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

