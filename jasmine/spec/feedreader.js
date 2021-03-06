$(function() {
    describe('RSS Feeds', function() {
        /* Make sure that the allFeeds variable has been
         * defined and that it is not empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the
         * URL is not empty.
         */
        it('has a URL defined and is not empty', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        /* Loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the
         * name is not empty.
         */
         it('has a name defined and is not empty', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(0);
            };
         });
    });

    describe('The menu', function() {
        // Ensures the menu is hidden by default.
        it('element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
        /* Ensures the menu bar opens and closes everytime
         * the menu icon is clicked.
         */
        it('visibility toggles when the icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function() {
        /* Ensures when the loadFeed function is called and
         * completes its work.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        /* Ensures there is at least a single .entry
         * element within the .feed container. Also 
         * making sure the length of the .entry element
         * is not empty.
         */
        it('there is at least one single entry', function() {
            expect($('.feed').find('.entry').length > 0).toBe(true);
        });
    });

    describe('New Feed Selection', function() {
        /* Ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */
        let start, end;
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function() {
                start = $('.feed').html(); // Compare the actual content
            });
            loadFeed(1, function() {
                end = $('.feed').html(); 
                done();
            });
        });

        it('content actually changes', function() {
            // Ensures the feeds are different
            expect(start).not.toBe(end); 
        });
    });
}());
