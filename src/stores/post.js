import { ref, reactive, computed } from "vue"
import { defineStore } from "pinia"


// Store
export default defineStore("post", () => {
    // State
    const posts = reactive([
        {
            id: 1,
            title: "Blog#1 Machine Learning",
            created: "22-09-2022",
            desc: "Blog Descriptions",
            tags: "#Tags",
            content: () => import("@/post/IntroML.vue")
        },
        {
            id: 2,
            title: "Blog#2 Deep Learning",
            created: "22-09-2022",
            desc: "Blog Descriptions",
            tags: "#Tags",
            content: "Content Blog#2"
        },
        {
            id: 3,
            title: "Blog#3 Cross Validation",
            created: "22-09-2022",
            desc: "Blog Descriptions",
            tags: "#Tags",
            content: "Content Blog#3"
        },
        {
            id: 4,
            title: "Blog#4 Model Evaluation",
            created: "22-09-2022",
            desc: "Blog Descriptions",
            tags: "#Tags",
            content: "Content Blog#4"
        },
    ])

    const keywords = ref("")

    // Actions
    function getPostFromId(id) {
        return posts.find((post) => post.id == id)
    }

    // Getters
    function filterPosts() {
        return posts.filter((post) => post.title.toLowerCase().includes(keywords.value.toLowerCase()))
    }
    const filteredPosts = computed(filterPosts)


    return {
        keywords,
        getPostFromId,
        filteredPosts
    }
})