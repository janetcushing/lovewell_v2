<template>
  <div class="footer">
    <b-row>
      <b-col md="1"></b-col>
       <b-col md="1">
          <b-button variant="outline-warning" style="color: white; padding 5px 5px 5px 5px;" href= "TheLovewellPondAssociationPrivacyPolicy.pdf" target = "_blank">Privacy Policy</b-button>
       </b-col>
      <b-col md="8">
        <p>&copy;Lovewell Pond Association - All rights reserved.</p>
        <p>Property Owners of Lovewell Pond Association</p>
        <p>P.O. Box 617, Fryeburg, ME 04037</p>
        <p>
          <a href="mailto:lovewellpondassoc@gmail.com" target="_blank">Contact Us</a>
        </p>
        <br />
        <p>Website designed by <a href="mailto:lovewellpondassoc@gmail.com" target="_blank">Dawn Sirois</a>, Portsmouth, NH</p> 
      </b-col>
      <b-col md="1">
            <p >
                <a href= "https://www.wunderground.com/?cm_ven=cgi" target = "_blank"><img  style="border-style: solid;" src="http://weathersticker.wunderground.com/weathersticker/infobox_both/language/www/US/ME/Fryeburg.gif" 
                alt="Click for Fryeburg, Maine Forecast" height="108" width="144" ></a>
                </p>
        </b-col>
        <b-col md="1"></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background: #287492;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  font: 14px/10px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
}

.footer a {
  color: #ffffff;
  padding-right: 5px;
}
</style>
