<template>
  <v-container id="home">
    <vue-glide
      class="pa-12"
      type="carousel"
      :perView="1"
      :gap="10"
      :autoplay="true"
      :change="true"
      :animationDuration="3000"
    >
      <vue-glide-slide v-for="i in slide" :key="i.img">
        <a :href="i.link" target="_blank"
          ><v-img :src="i.img" height="350"></v-img>
        </a>
        <v-card class="mx-auto">
          <v-card-text class="text-center">
            <div>{{ i.type }}</div>
            <p class="text-h4 text--primary">{{ i.name }}</p>
            <a :href="i.link" target="_blank"
              ><v-btn text color="deep-purple accent-4"> More </v-btn></a
            >
          </v-card-text>
        </v-card>
      </vue-glide-slide>
    </vue-glide>

    <v-divider class="pa-12"></v-divider>

    <v-container class="pa-4 text-center" id="latestArticles">
      <v-row class="fill-height" align="center" justify="center">
        <h1>Latest Articles</h1>
        <template v-for="(item, i) in latestNews">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <a
                  :href="item.link"
                  target="_blank"
                  style="text-decoration: none"
                >
                  <v-img :src="item.img" height="300px">
                    <v-card-title class="text-h6 white--text">
                      <v-row
                        class="fill-height flex-column"
                        justify="space-between"
                      >
                        <p
                          class="mt-4 subheading text-left"
                          style="background-color: rgba(122, 55, 34, 0.5);"
                        >
                          {{ item.title }}
                        </p>

                        <div>
                          <p
                            style="background-color: rgba(122, 55, 34, 0.5);"
                            class="
                              ma-0
                              text-body-1
                              font-weight-bold font-italic
                              text-left
                            "
                          >
                            {{ item.text }}
                          </p>
                        </div>
                      </v-row>
                    </v-card-title>
                    <v-btn elevation="2">Read More</v-btn>
                  </v-img>
                </a>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>

    <v-divider class="pa-12"></v-divider>

    <v-container class="pa-4 text-center" id="editorChoice">
      <v-row class="fill-height" align="center" justify="center">
        <h1>Editor's Choice</h1>
        <template v-for="(item, i) in editorChoice">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <a
                  :href="item.link"
                  target="_blank"
                  style="text-decoration: none"
                >
                  <v-img :src="item.img" height="300px">
                    <v-card-title class="text-h6 white--text">
                      <v-row
                        class="fill-height flex-column"
                        justify="space-between"
                      >
                        <p
                          class="mt-4 subheading text-left"
                          style="background-color: rgba(122, 55, 34, 0.5);"
                        >
                          {{ item.title }}
                        </p>

                        <div>
                          <p
                            style="background-color: rgba(122, 55, 34, 0.5);"
                            class="
                              ma-0
                              text-body-1
                              font-weight-bold font-italic
                              text-left
                            "
                          >
                            {{ item.text }}
                          </p>
                        </div>
                      </v-row>
                    </v-card-title>
                    <v-btn elevation="2">Read More</v-btn>
                  </v-img>
                </a>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>

    <v-divider class="pa-12"></v-divider>

    <h1 class="pa-4 text-center" id="popularArticles">Popular Articles</h1>
    <v-parallax
      src="https://apicms.thestar.com.my/uploads/images/2021/12/16/1408179.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1
            class="text-h4 font-weight-thin mb-4"
            style="background-color: rgba(128, 113, 68, 0.6);"
          >
            StarPicks brings you an insightful, useful and informative read with
            relevant promotional messages across an extensive variety of topics.
            Whatever piques your interest, discover something new regularly on
            StarPicks!
          </h1>
          <a
            href="https://www.thestar.com.my/starpicks"
            style="text-decoration: none"
            ><v-btn elevation="2">Read More</v-btn></a
          >
        </v-col>
      </v-row>
    </v-parallax>

    <v-divider class="pa-12"></v-divider>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    slide: [
      {
        img: "https://apicms.thestar.com.my/uploads/images/2021/12/17/1410924.jpg",
        link: "https://www.thestar.com.my/sport/football/2021/12/17/soccer-spurs-boss-conte-urges-caution-as-players-return-from-covid",
        type: "Sports",
        name: "Soccer-Spurs boss Conte urges caution as players return from COVID",
      },
      {
        img: "https://apicms.thestar.com.my/uploads/images/2021/12/15/1407132.jpg",
        type: "Lifestyle",
        link: "https://www.thestar.com.my/lifestyle/living/2021/12/15/workplace-the-end-note-for-a-sparkling-job-interview",
        name: "Workplace: The end note for a sparkling job interview",
      },
      {
        img: "https://apicms.thestar.com.my/uploads/images/2021/12/16/1408244.jpg",
        type: "Food",
        link: "https://www.thestar.com.my/food/food-news/2021/12/16/feed-a-family-keep-a-child-in-school-this-christmas",
        name: "Feed a family, keep a child in school this Christmas",
      },
    ],
    latestNews: [
      {
        title: "Sport",
        text: `Golf-Woods has close call, Mickelson and Morikawa rise to the occasion`,
        img: "https://apicms.thestar.com.my/uploads/images/2021/12/14/1405508.jpg",
        link: "https://www.thestar.com.my/sport/golf/2021/12/14/golf-woods-has-close-call-mickelson-and-morikawa-rise-to-the-occasion",
      },
      {
        title: "Food",
        text: "Tips for the best, easy-to-make breakfast",
        img: "https://apicms.thestar.com.my/uploads/images/2021/09/24/1306065.jpg",
        link: "https://www.thestar.com.my/lifestyle/health/2021/09/30/tips-for-the-best-easy-to-make-breakfast",
      },
      {
        title: "Lifestyle",
        text: "Is HK celeb couple Vincent Wong and Yoyo Chen's marriage in trouble or not?",
        img: "https://apicms.thestar.com.my/uploads/images/2021/12/17/1409189.jpg",
        link: "https://www.thestar.com.my/lifestyle/entertainment/2021/12/17/is-hk-celeb-couple-vincent-wong-and-yoyo-chen039s-marriage-in-trouble-or-not",
      },
      {
        title: "Lifestyle",
        text: "China celebrity crackdown: Producer questions blacklists before legal system has its say",
        img: "https://apicms.thestar.com.my/uploads/images/2021/12/13/1404378.jpg",
        link: "https://www.thestar.com.my/lifestyle/entertainment/2021/12/14/china-celebrity-crackdown-producer-questions-blacklists-before-legal-system-has-its-say",
      },
    ],
    editorChoice: [
      {
        title: "Sport",
        text: `It's over for Aaron-Wooi Yik in worlds but Zii Jia plods on`,
        img: "https://apicms.thestar.com.my/uploads/images/2021/12/17/1409814.jpg",
        link: "https://www.thestar.com.my/sport/badminton/2021/12/17/it039s-over-for-aaron-wooi-yik-in-worlds-but-zii-jia-plods-on",
      },
      {
        title: "Food",
        text: "Lavish spreads for holiday feasts",
        img: "https://apicms.thestar.com.my/uploads/images/2021/12/17/1409509.jpg",
        link: "https://www.thestar.com.my/food/eating-out/2021/12/17/lavish-spreads-for-holiday-feasts",
      },
      {
        title: "Lifestyle",
        text: "Covid-19 lessens cancer pain in case study",
        img: "https://apicms.thestar.com.my/uploads/images/2021/12/10/1401288.jpg",
        link: "https://www.thestar.com.my/lifestyle/health/2021/12/17/covid-19-lessens-cancer-pain-in-case-study",
      },
      {
        title: "Lifestyle",
        text: "Meet HK's young 'neon nomads' who are reviving a dying trade",
        img: "https://apicms.thestar.com.my/uploads/images/2021/12/16/1409263.jpg",
        link: "https://www.thestar.com.my/lifestyle/culture/2021/12/16/hong-kong039s-young-039neon-nomads039-keep-dying-trade-flickering",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>
<style scoped>
* {
  color: rgb(0, 0, 0);
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
