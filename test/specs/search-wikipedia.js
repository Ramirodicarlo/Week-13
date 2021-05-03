describe("Search Wikipedia in Google", () =>{
    beforeAll("Open browser" , () => {
        return browser.url("https://google.com");
    });
    it("Go to the google input",() =>{
        let input = $("input");
        input.addValue("wikipedia");
        browser.pause(2000);
        let button = $("input.gNO89b");
        button.click();
        browser.pause(2000);
        let wiki = $("h3.LC20lb.DKV0Md")
        wiki.click();
        expect(browser.getUrl()).toMatch("https://es.wikipedia.org/wiki/Wikipedia:Portada");
    });


})