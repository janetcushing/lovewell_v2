<template>
  <div class="home">
    <Header />
    <hr />
    <b-container class="blurb-container">
      <b-row>
        <b-col class="margins" md="1"></b-col>
        <b-col md="10">
          <b-row>
          <!-- <b-col md="12"> -->
            <h2 class="assoc">Resources</h2>
        </b-row>
        <br />
        <b-row>
        
       
        </b-row>
        <br />
        <b-row>
   
        </b-row>
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
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
  name: 'Resources',
  components: {
    Header,
    Footer
  }
}
</script>


