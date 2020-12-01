<template>
  <div>
    <v-content>
      <section>
        <v-parallax src="img/land/hero.jpeg" height="600">
          <v-row
            align="center"
            justify="center"
            class="white--text flex-column"
          >
            <img src="img/icons/logo.png" alt="VVA" height="200" />
            <h1 class="white--text mb-2 display-1 text-center">
              {{ info.title }}
            </h1>
            <div class="subheading mb-3 text-center">
              Powered by
              <a class="white--text" href="https://www.gowin.hk">GOWIN</a>
            </div>
            <v-btn class="warning lighten-2 mt-5" dark large to="/singin">
              准备开始
            </v-btn>
          </v-row>
        </v-parallax>
      </section>

      <section>
        <v-row align="center">
          <v-col cols="12" class="text-center">
            <div class="text-center">
              <h2 class="headline">开启数字黄金之路</h2>
              <span class="subheading"
                >首金集團旨在利用區塊鏈技術，實現實物黃金的數字化升級，創建一個全新的數字黃金應用生態系統。</span
              >
            </div>
          </v-col>
          <v-col cols="12">
            <v-container>
              <v-row align="enter">
                <v-col cols="12" md="4">
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">
                        mdi-material-design
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">安全</div>
                    </v-card-title>
                    <v-card-text>
                      {{ lorem }}
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">
                        mdi-flash
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">快捷</div>
                    </v-card-title>
                    <v-card-text>
                      {{ lorem }}
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">
                        mdi-open-source-initiative
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">专业</div>
                    </v-card-title>
                    <v-card-text>
                      {{ lorem }}
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </section>

      <section>
        <v-parallax src="img/land/section.jpg" height="380">
          <v-row align="center" justify="center" class="flex-column">
            <div class="headline white--text mb-3 text-center">
              中国国际资本有限公司
            </div>
            <em class="px-4"
              >中国国际资本有限公司是为高净值个人及机构客户提供全球资产管理和全方位海外服务的集团公司。<br /><br />
              以开放式的全球投资及服务平台，为客户提供资产规划、基金组合配置、家族财富管理等资产服务。<br /><br />
              自1993年成立至今，公司拥有超过20年的国际资产管理经验，是将国内与海外资本市场充分对接的优质平台。</em
            >
            <v-btn class="warning lighten-2 mt-5" dark large to="/singin">
              准备开始
            </v-btn>
          </v-row>
        </v-parallax>
      </section>

      <section>
        <v-container>
          <v-row justify="center" class="my-5">
            <v-col cols="12" sm="4">
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">公司简介</div>
                </v-card-title>
                <v-card-text>
                  {{ lorem }}
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4" offset-sm="1">
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">联系我们</div>
                </v-card-title>
                <v-card-text>
                  {{ lorem.slice(0, 100) }}
                </v-card-text>
                <v-list class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">
                        mdi-cellphone
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ info.phone }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">
                        mdi-map-marker
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ info.adres }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">
                        mdi-email
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ info.email }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-row align="center">
          <v-col cols="12" class="text-center">
            <div class="white--text">
              Copyright 2020 Prime Gold Group. All rights reserved. Powered by
              <a class="white--text" href="https://www.gowin.hk" target="_blank"
                >GOWIN.</a
              >
            </div>
          </v-col>
        </v-row>
      </v-footer>
    </v-content>
  </div>
</template>

<script>
import { lorem, landingInfo } from "@/api/mock";

export default {
  name: "Landing",
  data: () => ({
    info: landingInfo,
    lorem,
  }),
};
</script>
