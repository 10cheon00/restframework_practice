const api_url = 'http://rest-blog.run.goorm.io/api/'

export default {
    data() {
        return {
            
        }
    },
    methods: {
        ArticleAPIUrl(){
            return api_url + 'articles/';
        },
        ArticleListCreateUrl(){
            return this.ArticleAPIUrl();
        },
        ArticleRetrieveUpdateDestroyUrl(articleId){
            return this.ArticleAPIUrl() + articleId;
        },
    }
};

