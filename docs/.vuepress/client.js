import { defineClientConfig } from 'vuepress/client'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Hider from './layouts/Hider.vue'

export default defineClientConfig({
  layouts: {
    Article,
    Category,
    Tag,
    Hider
  },
})
