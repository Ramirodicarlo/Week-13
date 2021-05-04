describe("Search Wikipedia in Google", () =>{
    beforeAll("Open browser" , () => {
        return browser.url("https://google.com");
    });
    it("Go to the google input",() =>{
        let input = $("input");
        input.addValue("wikipedia");
        browser.pause(1000);
        browser.keys("Enter");
        browser.pause(1000);
        let wiki = $("h3.LC20lb.DKV0Md")
        wiki.click();
        expect(browser).toHaveUrl("https://es.wikipedia.org/wiki/Wikipedia:Portada");
    });
})