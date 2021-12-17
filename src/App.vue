<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link">
          <a :href="link.href" style="text-decoration: none; color: black">
            {{ link.title }}
          </a>
        </v-tab>
      </v-tabs>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      align="center"
      justify="center"
    >
      <v-divider class="pa-4"></v-divider>

      <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on">Account</v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-responsive class="pa-4" max-width="400">
        <v-text-field
          type="search"
          v-model="searchQuery"
          prepend-icon="mdi-magnify"
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>

      <v-divider></v-divider>
      <a
        v-for="navbar in filter"
        :key="navbar"
        :href="navbar.link"
        target="_blank"
        style="text-decoration: none; color: black"
        class="pa-4"
      >
        <h1>
          {{ navbar.title }}
        </h1>
        
        <p
          v-for="subs in navbar.sub"
          :key="subs"
          :to="subs.to"
          target="_blank"
          style="text-decoration: none"
        >
          {{ subs.title }}
        </p>
      </a>
    </v-navigation-drawer>

    <v-main>
      <Index />
    </v-main>

    <v-divider class="pa-12"></v-divider>

    <v-footer dark padless absolute inset app>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>MyNews</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Index from "./components/index";

export default {
  name: "App",

  components: {
    Index,
  },

  data: () => ({
    drawer: null,
    searchQuery: "",
    items: [{ title: "Sign Up" }, { title: "Login" }],
    navbarDrawer: [
      { title: "Home", link: "https://www.thestar.com.my/" },
      {
        title: "Sport",
        sub: [
          {
            title: "Football",
            link: "https://www.thestar.com.my/sport/football",
          },
          { title: "Golf", link: "https://www.thestar.com.my/sport/golf" },
          {
            title: "Badminton",
            link: "https://www.thestar.com.my/sport/badminton",
          },
          {
            title: "Other Sports",
            link: "https://www.thestar.com.my/sport/other-sport",
          },
        ],
        link: "https://www.thestar.com.my/sport",
      },
      {
        title: "Lifestyle",
        sub: [
          {
            title: "Entertainment & Style",
            link: "https://www.thestar.com.my/lifestyle/entertainment-and-style",
          },
          {
            title: "People & Living",
            link: "https://www.thestar.com.my/lifestyle/people-and-living",
          },
          { title: "Health & Family", link: "" },
        ],
        link: "https://www.thestar.com.my/lifestyle",
      },
      {
        title: "Food",
        sub: [
          { title: "Food News", link: "" },
          { title: "Food for Thought", link: "" },
        ],
        link: "",
      },
    ],
    links: [
      { title: "Home", href: "#home" },
      { title: "Latest Articles", href: "#latestArticles" },
      { title: "Editor's Choice", href: "#editorChoice" },
      { title: "Popular Articles", href: "#popularArticles" },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  computed: {
    filter() {
      return this.navbarDrawer.filter((filter) => {
        return filter.title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
</style>
