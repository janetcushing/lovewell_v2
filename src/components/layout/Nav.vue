<template>
<div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- variant="faded" type="light" -->
        <b-navbar-brand href="#">Hello!</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav style="background: #cce5ff;">
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/about">Lovewell Pond</b-nav-item>
                <b-nav-item to="/association">The Association</b-nav-item>
                <b-nav-item to="/resources">Resources</b-nav-item>
                <!-- <b-nav-item to="/gallery">Photo Gallery</b-nav-item> -->
                 <b-nav-item to="/lostandfound">Lost and Found</b-nav-item>
                       <!-- <b-nav-item to="/gallery">Photo Gallery</b-nav-item> -->
                <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form> -->

                <!-- <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown> -->

                <!-- <b-nav-item-dropdown right> -->
                    <!-- Using 'button-content' slot -->
                    <!-- <template v-slot:button-content>
                        <em>User</em>
                    </template> -->
                    <!-- <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
                <!-- </b-nav-item-dropdown> -->
                <!-- <a href= "https://www.wunderground.com/?cm_ven=cgi" target = "_blank"><img src="http://weathersticker.wunderground.com/weathersticker/infobox_both/language/www/US/ME/Fryeburg.gif" 
                alt="Click for Fryeburg, Maine Forecast" height="108" width="144" ></a> -->
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
// import { NavbarPlugin, DropdownPlugin, CollapsePlugin } from 'bootstrap-vue'
export default {
    name: 'Nav'
}
</script>

<style scoped>
.navbar {
background-color: #287492;
}
.nav-collapse {
background-color: #287492;
}
#nav {
    /* background: #287492 0% 0% no-repeat padding-box; */
    background-color: #287492;
    color: #ffffff;
    text-align: center;
    padding: 30px;
}

b-navbar-nav {
   /* background: #287492 0% 0% no-repeat padding-box; */
   background-color: #287492;
}

b-nav-item {
  /* background: #287492 0% 0% no-repeat padding-box; */
  background-color: #287492;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
