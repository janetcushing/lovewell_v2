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
              <col width="250" />
              <tr v-for="person in officers" :key="person.id">
                <td class="table-heading">{{person.title}}</td>
                <td class="table-row">{{person.name}}</td>
                <!-- <td class="table-row" v-html="person.email"></td> -->
              </tr>
            </table>
          </b-row>
          <br/>
          <b-row>
            <h5 class="splash">We currently have 2 open Director's positions.  Please <a href="mailto:janet.cushing@gmail.com" target="_blank">contact us</a> if you would like to volunteer!</h5>
          </b-row>
        </b-col>
        <b-col md="1">
          <p>
            <a href="https://www.wunderground.com/?cm_ven=cgi" target="_blank">
              <img
                style="border-style: solid;"
                src="http://weathersticker.wunderground.com/weathersticker/infobox_both/language/www/US/ME/Fryeburg.gif"
                alt="Click for Fryeburg, Maine Forecast"
                height="108"
                width="144"
              />
            </a>
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
          name: "Gene Bergoffen",
          email: "dummy.data@gmail.com"
         },
          {
          id: 2,
          title: "Vice President:",
          name: "Peter Wilkins",
          email: "dummy.data@gmail.com"
         },
          {
          id: 3,
          title: "Secretary:",
          name: "Colleen Wilkins",
          email: "dummy.data@gmail.com"
         },
          {
          id: 4,
          title: "Treasurer:",
          name: "Paul Fortin",
          email: "dummy.data@gmail.com"
         },
          {
          id: 5,
          title: "Directors:",
          name: "Peter Bourneuf",
          email: "dummy.data@gmail.com"
         },
         {
          id: 6,
          title: "",
          name: "Debbie Fortin",
          email: "dummy.data@gmail.com"
         },
         {
          id: 7,
          title: "",
          name: "Mike Cherry",
          email: "dummy.data@gmail.com"
         },
         {
          id: 8,
          title: "",
          name: "Frank Goebtz",
          email: "dummy.data@gmail.com"
         },
          {
          id: 1,
          title: "Webmaster of this site",
          name: "Janet Cushing",
          email: "janet.cushing@gmail.com"
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
/* .assoc {
  left: 170px;
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
} */
.events {
  left: 170px;
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}
/* .news {
  left: 170px;
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
} */

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
  font: Regular 20px/20px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: #343638;
}

.splash {
   font: Regular 20px/20px "Open Sans";
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: #cc1717;

}
</style>

