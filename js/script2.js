let factorMeta = [{factorHeading: 'Link Building', factorDesc: "This involves acquiring links from other high-quality websites to your website. The more links you have from authoritative websites, the more likely search engines will view your site as a reputable source of information. Link building is a critical component of off-page SEO. In fact, it is one of the most important factors that search engines use to determine the authority and relevance of a website.", factorImg: "./offpage-img/links.jpg"},

    {factorHeading: 'Guest Blogging', factorDesc: "Writing and publishing guest posts on other websites can help to build your brand's authority, increase backlinks to your website, and drive traffic to your site. Guest blogging is another important off-page SEO tactic that can help to improve your website's authority and visibility in search engine results pages.When you write and publish guest posts on other websites in your industry, you are able to showcase your expertise and knowledge in your field to a wider audience. This can help to increase brand awareness and drive traffic to your website.", factorImg: "./offpage-img/guest.jpg"},

    {factorHeading: 'Influencer Outreach', factorDesc: "Collaborating with influencers and bloggers in your industry can help to increase brand awareness and drive traffic to your website. Influencer outreach involves identifying and collaborating with influential people in your industry, such as bloggers, social media influencers, and thought leaders, to promote your brand and content. By working with these influencers, you can leverage their existing audiences to reach new potential customers and drive traffic to your website.", factorImg: './offpage-img/influencer.jpg'}
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