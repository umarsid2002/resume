let factorMeta = [{factorHeading: 'Meta Tags', factorDesc: "Meta tags are HTML elements that provide information about a web page's content to search engines and website visitors. They are essential for on-page SEO optimization and include tags like the title tag, which specifies the page's title, the description tag, which provides a summary of the page's content, and the keyword tag, which lists relevant keywords. Length of title should be upto 70 chars and meta description upto 300 chars. Meta keywords are optional. All these title and meta tags come under head section.", factorImg: "./onpage-img/meta.jpg"},

    {factorHeading: 'Content With Keywords And Synonyms', factorDesc: "In SEO, keyword research is the process of identifying the most relevant and high-traffic keywords to target for a website or page. Synonyms are words or phrases that have a similar meaning to a target keyword. They are important in SEO because search engines have become more advanced in understanding natural language and synonyms can help a web page rank for related search queries. Using both target keywords and synonyms in a web page's content and meta tags can help improve its relevance to search engine algorithms and increase its visibility in search results.", factorImg: "./onpage-img/content.jpg"},

    {factorHeading: 'Using LSI Keywords', factorDesc: "LSI (Latent Semantic Indexing) keywords are terms and phrases that are related to a target keyword, based on their semantic meaning and context. They are used by search engines to better understand the content of a web page and determine its relevance to a user's search query. Using LSI keywords in a web page's content can help improve its search engine rankings, as it signals to search engines that the page is comprehensive and covers a variety of related topics. LSI keywords can be identified through kw research tools or by analyzing related search terms and synonyms.", factorImg: './onpage-img/lsi.jpg'},

    {factorHeading: 'Sitemap Integration', factorDesc: "A sitemap is a file that provides a list of all the pages on a website that a webmaster wants search engines to crawl and index. It can be submitted to search engines, such as Google, to help them find and understand the structure and content of a website.Sitemaps can be created in XML format and can include additional information about each page, such as the last modified date, priority level, and change frequency. This information can help search engines prioritize crawling and indexing important pages more frequently.Having a sitemap can help improve a website's search engine visibility and ensure that all important pages are indexed, even if they are not linked to from other pages on the site.", factorImg: './onpage-img/sitemap.jpg'},

    {factorHeading: 'Using Robots.txt', factorDesc: "Robots.txt is a file that provides instructions to web crawlers and search engine robots on which pages of a website should be crawled and indexed. It is placed in the root directory of a website and can be used to prevent certain pages or directories from being crawled, or to specify crawl delay and other settings.The robots.txt file can be used to control how search engines access and index a website's pages, which can be helpful for preventing duplicate content issues, preserving bandwidth and server resources, and protecting sensitive information.", factorImg: './onpage-img/robots.jpg'}
]


let myHtml = ''

factorMeta.forEach((elem, index)=>{
    console.log(elem.factorHeading)
    myHtml = `<div class="factor d-flex py-4">
    <div class="factor-heading">
        <h2 class="heading2 font2">${index+1}. ${elem.factorHeading}</h2>
    </div>

    <div class="factor-box d-flex">
        <div class="factor-para">
            <p class="para font3">${elem.factorDesc}</p>
        </div>
        <div class="factor-img">
            <!-- img here -->
            <img src="${elem.factorImg}">
        </div>
    </div>
</div>`
    document.getElementById('factors').innerHTML += myHtml
})