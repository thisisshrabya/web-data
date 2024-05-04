/*
  google maps POSITION
  navScroll
  YoutubeBackground v1.0.5
  jQuery OwlCarousel v1.3.3
  jQuery Cycle2 v2.1.6
  newsletter form field
  jquery.countTo
    jquery.appear
  Sticky Plugin v1.0.4
  imagesLoaded PACKAGED v4.1.1
  Fotorama v4.6.4
  device v0.2.7
  Bootstrap v3.3.7
*/


// google maps POSITION
// EDIT the following latitude and longitude coordinates: 34.052235,-118.243683
//
function init() {
    var a = {
            center: new google.maps.LatLng(34.052235, -118.243683),
            zoom: 11,
            zoomControl: !0,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT
            },
            disableDoubleClickZoom: !0,
            mapTypeControl: !0,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
            },
            scaleControl: !1,
            scrollwheel: !1,
            panControl: !0,
            streetViewControl: !1,
            draggable: !0,
            overviewMapControl: !0,
            overviewMapControlOptions: {
                opened: !1
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                featureType: "all",
                elementType: "all",
                stylers: [{
                    lightness: "29"
                }, {
                    invert_lightness: !0
                }, {
                    hue: "#008fff"
                }, {
                    saturation: "-73"
                }]
            }, {
                featureType: "all",
                elementType: "labels",
                stylers: [{
                    saturation: "-72"
                }]
            }, {
                featureType: "administrative",
                elementType: "all",
                stylers: [{
                    lightness: "32"
                }, {
                    weight: "0.42"
                }]
            }, {
                featureType: "administrative",
                elementType: "labels",
                stylers: [{
                    visibility: "on"
                }, {
                    lightness: "-53"
                }, {
                    saturation: "-66"
                }]
            }, {
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                    lightness: "-86"
                }, {
                    gamma: "1.13"
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry.fill",
                stylers: [{
                    hue: "#006dff"
                }, {
                    lightness: "4"
                }, {
                    gamma: "1.44"
                }, {
                    saturation: "-67"
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry.stroke",
                stylers: [{
                    lightness: "5"
                }]
            }, {
                featureType: "landscape",
                elementType: "labels.text.fill",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{
                    weight: "0.84"
                }, {
                    gamma: "0.5"
                }]
            }, {
                featureType: "poi",
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "off"
                }, {
                    weight: "0.79"
                }, {
                    gamma: "0.5"
                }]
            }, {
                featureType: "road",
                elementType: "all",
                stylers: [{
                    visibility: "simplified"
                }, {
                    lightness: "-78"
                }, {
                    saturation: "-91"
                }]
            }, {
                featureType: "road",
                elementType: "labels.text",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: "-69"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    lightness: "5"
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry.fill",
                stylers: [{
                    lightness: "10"
                }, {
                    gamma: "1"
                }]
            }, {
                featureType: "road.local",
                elementType: "geometry.fill",
                stylers: [{
                    lightness: "10"
                }, {
                    saturation: "-100"
                }]
            }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{
                    lightness: "-35"
                }]
            }, {
                featureType: "transit",
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "water",
                elementType: "all",
                stylers: [{
                    saturation: "-97"
                }, {
                    lightness: "-14"
                }]
            }]
        },
        b = document.getElementById("map"),
        c = new google.maps.Map(b, a),
        d = [
            ["EX", "undefined", "undefined", "undefined", "undefined", 34.052235, -118.243683, "img/location-icon.png"],
            ["EX", "undefined", "undefined", "undefined", "undefined", 34.052235, -118.243683, "img/location-icon.png"]
        ];
    for (i = 0; i < d.length; i++) "undefined" == d[i][1] ? description = "" : description = d[i][1], "undefined" == d[i][2] ? telephone = "" : telephone = d[i][2], "undefined" == d[i][3] ? email = "" : email = d[i][3], "undefined" == d[i][4] ? web = "" : web = d[i][4], "undefined" == d[i][7] ? markericon = "" : markericon = d[i][7], marker = new google.maps.Marker({
        icon: markericon,
        position: new google.maps.LatLng(d[i][5], d[i][6]),
        map: c,
        title: d[i][0],
        desc: description,
        tel: telephone,
        email: email,
        web: web
    }), link = ""
}
google.maps.event.addDomListener(window, "load", init);
var map;


// navScroll
! function(a) {
    a(".navscroll").on("click", function() {
        a("nav .navscroll").removeClass("active"), a(this).addClass("active");
        var i = a(this).data("idpage");
        a(this).hasClass("nav-works") ? dif_height = 55 : dif_height = 0, a("html, body").stop().animate({
            scrollTop: a("#" + i).offset().top - dif_height
        }, 1200)
    })
}(jQuery);


/*
 * YoutubeBackground - A wrapper for the Youtube API - Great for fullscreen background videos or just regular videos.
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Version:  1.0.5
 *
 */
"function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    }),
    function(a, b, c) {
        var d = function(d) {
                var f = c.createElement("script"),
                    g = c.getElementsByTagName("head")[0];
                "file://" == b.location.origin ? f.src = "http://www.youtube.com/iframe_api" : f.src = "//www.youtube.com/iframe_api", g.appendChild(f), g = null, f = null, e(d)
            },
            e = function(d) {
                "undefined" == typeof YT && "undefined" == typeof b.loadingPlayer ? (b.loadingPlayer = !0, b.dfd = a.Deferred(), b.onYouTubeIframeAPIReady = function() {
                    b.onYouTubeIframeAPIReady = null, b.dfd.resolve("done"), d()
                }) : "object" == typeof YT ? d() : b.dfd.done(function(a) {
                    d()
                })
            };
        YTPlayer = {
            player: null,
            defaults: {
                ratio: 16 / 9,
                videoId: "LSmgKRx5pBo",
                mute: !0,
                repeat: !0,
                width: a(b).width(),
                playButtonClass: "YTPlayer-play",
                pauseButtonClass: "YTPlayer-pause",
                muteButtonClass: "YTPlayer-mute",
                volumeUpClass: "YTPlayer-volume-up",
                volumeDownClass: "YTPlayer-volume-down",
                start: 0,
                pauseOnScroll: !1,
                fitToBackground: !0,
                playerVars: {
                    iv_load_policy: 3,
                    modestbranding: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    wmode: "opaque",
                    branding: 0,
                    autohide: 0
                },
                events: null
            },
            init: function(e, f) {
                var g = this;
                return g.userOptions = f, g.$body = a("body"), g.$node = a(e), g.$window = a(b), g.defaults.events = {
                    onReady: function(a) {
                        g.onPlayerReady(a), g.options.pauseOnScroll && g.pauseOnScroll(), "function" == typeof g.options.callback && g.options.callback.call(this)
                    },
                    onStateChange: function(a) {
                        1 === a.data ? (g.$node.find("img").fadeOut(400), g.$node.addClass("loaded")) : 0 === a.data && g.options.repeat && g.player.seekTo(g.options.start)
                    }
                }, g.options = a.extend(!0, {}, g.defaults, g.userOptions), g.options.height = Math.ceil(g.options.width / g.options.ratio), g.ID = (new Date).getTime(), g.holderID = "YTPlayer-ID-" + g.ID, g.options.fitToBackground ? g.createBackgroundVideo() : g.createContainerVideo(), g.$window.on("resize.YTplayer" + g.ID, function() {
                    g.resize(g)
                }), d(g.onYouTubeIframeAPIReady.bind(g)), g.resize(g), g
            },
            pauseOnScroll: function() {
                var b = this;
                b.$window.on("scroll.YTplayer" + b.ID, function() {
                    var a = b.player.getPlayerState();
                    1 === a && b.player.pauseVideo()
                }), b.$window.scrollStopped(function() {
                    var a = b.player.getPlayerState();
                    2 === a && b.player.playVideo()
                })
            },
            createContainerVideo: function() {
                var c = this,
                    d = a('<div id="ytplayer-container' + c.ID + '" ><div id="' + c.holderID + '" class="ytplayer-player-inline"></div></div><div id="ytplayer-shield" class="ytplayer-shield"></div>');
                c.$node.append(d), c.$YTPlayerString = d, d = null
            },
            createBackgroundVideo: function() {
                var c = this,
                    d = a('<div id="ytplayer-container' + c.ID + '" class="ytplayer-container background"><div id="' + c.holderID + '" class="ytplayer-player"></div></div><div id="ytplayer-shield" class="ytplayer-shield"></div>');
                c.$node.append(d), c.$YTPlayerString = d, d = null
            },
            resize: function(d) {
                var e = a(b);
                d.options.fitToBackground || (e = d.$node);
                var g, i, f = e.width(),
                    h = e.height(),
                    j = a("#" + d.holderID);
                f / d.options.ratio < h ? (g = Math.ceil(h * d.options.ratio), j.width(g).height(h).css({
                    left: (f - g) / 2,
                    top: 0
                })) : (i = Math.ceil(f / d.options.ratio), j.width(f).height(i).css({
                    left: 0,
                    top: (h - i) / 2
                })), j = null, e = null
            },
            onYouTubeIframeAPIReady: function() {
                var c = this;
                c.player = new b.YT.Player(c.holderID, c.options)
            },
            onPlayerReady: function(b) {
                this.options.mute && b.target.mute(), b.target.playVideo()
            },
            getPlayer: function() {
                return this.player
            },
            destroy: function() {
                var d = this;
                d.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"), d.$YTPlayerString.remove(), a(b).off("resize.YTplayer" + d.ID), a(b).off("scroll.YTplayer" + d.ID), d.$body = null, d.$node = null, d.$YTPlayerString = null, d.player.destroy(), d.player = null
            }
        }, a.fn.scrollStopped = function(b) {
            var c = a(this),
                d = this;
            c.scroll(function() {
                c.data("scrollTimeout") && clearTimeout(c.data("scrollTimeout")), c.data("scrollTimeout", setTimeout(b, 250, d))
            })
        }, a.fn.YTPlayer = function(b) {
            return this.each(function() {
                var c = this;
                a(c).data("yt-init", !0);
                var d = Object.create(YTPlayer);
                d.init(c, b), a.data(c, "ytPlayer", d)
            })
        }
    }(jQuery, window, document);


/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */
"function" !== typeof Object.create && (Object.create = function(f) {
    function g() {}
    g.prototype = f;
    return new g
});
(function(f, g, k) {
    var l = {
        init: function(a, b) {
            this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function() {
            function a(a) {
                var d, e = "";
                if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
                else {
                    for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e)
                }
                b.logIn()
            }
            var b = this,
                e;
            "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath ?
                (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay &&
                (this.options.autoPlay = 5E3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var a = this;
            g.setTimeout(function() {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var a = this;
            if (!1 === a.$elem.is(":visible")) a.$elem.css({
                    opacity: 0
                }),
                g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
            else return !1;
            a.checkVisible = g.setInterval(function() {
                a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                    opacity: 1
                }, 200), g.clearInterval(a.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var a, b;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(a, b) {
                        return a[0] - b[0]
                    }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
            else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
                a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount &&
                !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var a = this,
                b, e;
            if (!0 !== a.options.responsive) return !1;
            e = f(g).width();
            a.resizer = function() {
                f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
                    e = f(g).width();
                    a.updateVars()
                }, a.options.responsiveRefreshRate))
            };
            f(g).resize(a.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var a =
                this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function(c) {
                var d = f(this);
                d.css({
                    width: a.itemWidth
                }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e) c > e || (b += 1);
                d.data("owl-roundPages", b)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() /
                this.options.items)
        },
        max: function() {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
            return a
        },
        min: function() {
            return 0
        },
        loops: function() {
            var a = 0,
                b = 0,
                e, c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
                c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev =
                f("<div/>", {
                    "class": "owl-prev",
                    html: a.options.navigationText[0] || ""
                });
            a.buttonNext = f("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                a.preventDefault()
            });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
                b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function() {
            var a = this;
            a.paginationWrapper =
                f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
                b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items &&
                (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
                    "class": "owl-page"
                }), g = f("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? a : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
            this.checkPagination()
        },
        checkPagination: function() {
            var a = this;
            if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function() {
                f(this).data("owl-roundPages") ===
                    f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
                this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
            if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, a)
        },
        prev: function(a) {
            if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
                this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, a)
        },
        goTo: function(a, b, e) {
            var c = this;
            if (c.isTransition) return !1;
            "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
            a = c.positionsInArray[a];
            !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() {
                    c.isCss3Finish = !0
                },
                c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo()
        },
        jumpTo: function(a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem =
                this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay) return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function() {
                a.next(!0)
            }, a.options.autoPlay)
        },
        swapSpeed: function(a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" +
                    a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function(a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function(a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || e.options.slideSpeed,
                complete: function() {
                    e.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        },
        eventTypes: function() {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
                !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(a) {
                return f(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function a(a) {
                if (void 0 !== a.touches) return {
                    x: a.touches[0].pageX,
                    y: a.touches[0].pageY
                };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) return {
                        x: a.pageX,
                        y: a.pageY
                    };
                    if (void 0 === a.pageX) return {
                        x: a.clientX,
                        y: a.clientY
                    }
                }
            }

            function b(a) {
                "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
            }

            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
                !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
            }

            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
                        a.stopImmediatePropagation();
                        a.stopPropagation();
                        a.preventDefault();
                        f(a.target).off("click.disable")
                    }),
                    a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
                b("off")
            }
            var d = this,
                h = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which) return !1;
                if (!(d.itemsAmount <= d.options.items)) {
                    if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
                    !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function() {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
                a = 0);
            return a
        },
        closestItem: function() {
            var a = this,
                b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function(d, g) {
                e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
                    (c = b[d + 1], a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function() {
            var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
            return a
        },
        customEvents: function() {
            var a = this;
            a.$elem.on("owl.next", function() {
                a.next()
            });
            a.$elem.on("owl.prev", function() {
                a.prev()
            });
            a.$elem.on("owl.play", function(b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function() {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function(b, e) {
                a.goTo(e)
            });
            a.$elem.on("owl.jumpTo", function(b, e) {
                a.jumpTo(e)
            })
        },
        stopOnHover: function() {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                a.stop()
            }), a.$elem.on("mouseout", function() {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function() {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad) return !1;
            for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
                b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
        },
        lazyPreload: function(a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem])
            }

            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
            }
            var d = this,
                f = 0,
                k;
            "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
            c()
        },
        autoHeight: function() {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function b() {
                d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
                    100) : e.wrapperOuter.css("height", "")
            }
            var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? (d = 0, b()) : a()
        },
        completeImg: function(a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
            var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g +
                    "px",
                "perspective-origin": g + "px"
            });
            d.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b)
            });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e)
            })
        },
        clearTransStyle: function(a,
            b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(a) {
            a = f.extend({}, this.userOptions,
                a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function(a, b) {
            var e;
            if (!a) return !1;
            if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars()
        },
        removeItem: function(a) {
            if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    f.fn.owlCarousel = function(a) {
        return this.each(function() {
            if (!0 ===
                f(this).data("owl-init")) return !1;
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b)
        })
    };
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1E3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);


/*!
 * jQuery Cycle2; version: 2.1.6 build: 20141007
 * http://jquery.malsup.com/cycle2/
 * Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
 */
! function(a) {
    "use strict";

    function b(a) {
        return (a || "").toLowerCase()
    }
    var c = "2.1.6";
    a.fn.cycle = function(c) {
        var d;
        return 0 !== this.length || a.isReady ? this.each(function() {
            var d, e, f, g, h = a(this),
                i = a.fn.cycle.log;
            if (!h.data("cycle.opts")) {
                (h.data("cycle-log") === !1 || c && c.log === !1 || e && e.log === !1) && (i = a.noop), i("--c2 init--"), d = h.data();
                for (var j in d) d.hasOwnProperty(j) && /^cycle[A-Z]+/.test(j) && (g = d[j], f = j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b), i(f + ":", g, "(" + typeof g + ")"), d[f] = g);
                e = a.extend({}, a.fn.cycle.defaults, d, c || {}), e.timeoutId = 0, e.paused = e.paused || !1, e.container = h, e._maxZ = e.maxZ, e.API = a.extend({
                    _container: h
                }, a.fn.cycle.API), e.API.log = i, e.API.trigger = function(a, b) {
                    return e.container.trigger(a, b), e.API
                }, h.data("cycle.opts", e), h.data("cycle.API", e.API), e.API.trigger("cycle-bootstrap", [e, e.API]), e.API.addInitialSlides(), e.API.preInitSlideshow(), e.slides.length && e.API.initSlideshow()
            }
        }) : (d = {
            s: this.selector,
            c: this.context
        }, a.fn.cycle.log("requeuing slideshow (dom not ready)"), a(function() {
            a(d.s, d.c).cycle(c)
        }), this)
    }, a.fn.cycle.API = {
        opts: function() {
            return this._container.data("cycle.opts")
        },
        addInitialSlides: function() {
            var b = this.opts(),
                c = b.slides;
            b.slideCount = 0, b.slides = a(), c = c.jquery ? c : b.container.find(c), b.random && c.sort(function() {
                return Math.random() - .5
            }), b.API.add(c)
        },
        preInitSlideshow: function() {
            var b = this.opts();
            b.API.trigger("cycle-pre-initialize", [b]);
            var c = a.fn.cycle.transitions[b.fx];
            c && a.isFunction(c.preInit) && c.preInit(b), b._preInitialized = !0
        },
        postInitSlideshow: function() {
            var b = this.opts();
            b.API.trigger("cycle-post-initialize", [b]);
            var c = a.fn.cycle.transitions[b.fx];
            c && a.isFunction(c.postInit) && c.postInit(b)
        },
        initSlideshow: function() {
            var b, c = this.opts(),
                d = c.container;
            c.API.calcFirstSlide(), "static" == c.container.css("position") && c.container.css("position", "relative"), a(c.slides[c.currSlide]).css({
                opacity: 1,
                display: "block",
                visibility: "visible"
            }), c.API.stackSlides(c.slides[c.currSlide], c.slides[c.nextSlide], !c.reverse), c.pauseOnHover && (c.pauseOnHover !== !0 && (d = a(c.pauseOnHover)), d.hover(function() {
                c.API.pause(!0)
            }, function() {
                c.API.resume(!0)
            })), c.timeout && (b = c.API.getSlideOpts(c.currSlide), c.API.queueTransition(b, b.timeout + c.delay)), c._initialized = !0, c.API.updateView(!0), c.API.trigger("cycle-initialized", [c]), c.API.postInitSlideshow()
        },
        pause: function(b) {
            var c = this.opts(),
                d = c.API.getSlideOpts(),
                e = c.hoverPaused || c.paused;
            b ? c.hoverPaused = !0 : c.paused = !0, e || (c.container.addClass("cycle-paused"), c.API.trigger("cycle-paused", [c]).log("cycle-paused"), d.timeout && (clearTimeout(c.timeoutId), c.timeoutId = 0, c._remainingTimeout -= a.now() - c._lastQueue, (c._remainingTimeout < 0 || isNaN(c._remainingTimeout)) && (c._remainingTimeout = void 0)))
        },
        resume: function(a) {
            var b = this.opts(),
                c = !b.hoverPaused && !b.paused;
            a ? b.hoverPaused = !1 : b.paused = !1, c || (b.container.removeClass("cycle-paused"), 0 === b.slides.filter(":animated").length && b.API.queueTransition(b.API.getSlideOpts(), b._remainingTimeout), b.API.trigger("cycle-resumed", [b, b._remainingTimeout]).log("cycle-resumed"))
        },
        add: function(b, c) {
            var d, e = this.opts(),
                f = e.slideCount,
                g = !1;
            "string" == a.type(b) && (b = a.trim(b)), a(b).each(function() {
                var b, d = a(this);
                c ? e.container.prepend(d) : e.container.append(d), e.slideCount++, b = e.API.buildSlideOpts(d), e.slides = c ? a(d).add(e.slides) : e.slides.add(d), e.API.initSlide(b, d, --e._maxZ), d.data("cycle.opts", b), e.API.trigger("cycle-slide-added", [e, b, d])
            }), e.API.updateView(!0), g = e._preInitialized && 2 > f && e.slideCount >= 1, g && (e._initialized ? e.timeout && (d = e.slides.length, e.nextSlide = e.reverse ? d - 1 : 1, e.timeoutId || e.API.queueTransition(e)) : e.API.initSlideshow())
        },
        calcFirstSlide: function() {
            var a, b = this.opts();
            a = parseInt(b.startingSlide || 0, 10), (a >= b.slides.length || 0 > a) && (a = 0), b.currSlide = a, b.reverse ? (b.nextSlide = a - 1, b.nextSlide < 0 && (b.nextSlide = b.slides.length - 1)) : (b.nextSlide = a + 1, b.nextSlide == b.slides.length && (b.nextSlide = 0))
        },
        calcNextSlide: function() {
            var a, b = this.opts();
            b.reverse ? (a = b.nextSlide - 1 < 0, b.nextSlide = a ? b.slideCount - 1 : b.nextSlide - 1, b.currSlide = a ? 0 : b.nextSlide + 1) : (a = b.nextSlide + 1 == b.slides.length, b.nextSlide = a ? 0 : b.nextSlide + 1, b.currSlide = a ? b.slides.length - 1 : b.nextSlide - 1)
        },
        calcTx: function(b, c) {
            var d, e = b;
            return e._tempFx ? d = a.fn.cycle.transitions[e._tempFx] : c && e.manualFx && (d = a.fn.cycle.transitions[e.manualFx]), d || (d = a.fn.cycle.transitions[e.fx]), e._tempFx = null, this.opts()._tempFx = null, d || (d = a.fn.cycle.transitions.fade, e.API.log('Transition "' + e.fx + '" not found.  Using fade.')), d
        },
        prepareTx: function(a, b) {
            var c, d, e, f, g, h = this.opts();
            return h.slideCount < 2 ? void(h.timeoutId = 0) : (!a || h.busy && !h.manualTrump || (h.API.stopTransition(), h.busy = !1, clearTimeout(h.timeoutId), h.timeoutId = 0), void(h.busy || (0 !== h.timeoutId || a) && (d = h.slides[h.currSlide], e = h.slides[h.nextSlide], f = h.API.getSlideOpts(h.nextSlide), g = h.API.calcTx(f, a), h._tx = g, a && void 0 !== f.manualSpeed && (f.speed = f.manualSpeed), h.nextSlide != h.currSlide && (a || !h.paused && !h.hoverPaused && h.timeout) ? (h.API.trigger("cycle-before", [f, d, e, b]), g.before && g.before(f, d, e, b), c = function() {
                h.busy = !1, h.container.data("cycle.opts") && (g.after && g.after(f, d, e, b), h.API.trigger("cycle-after", [f, d, e, b]), h.API.queueTransition(f), h.API.updateView(!0))
            }, h.busy = !0, g.transition ? g.transition(f, d, e, b, c) : h.API.doTransition(f, d, e, b, c), h.API.calcNextSlide(), h.API.updateView()) : h.API.queueTransition(f))))
        },
        doTransition: function(b, c, d, e, f) {
            var g = b,
                h = a(c),
                i = a(d),
                j = function() {
                    i.animate(g.animIn || {
                        opacity: 1
                    }, g.speed, g.easeIn || g.easing, f)
                };
            i.css(g.cssBefore || {}), h.animate(g.animOut || {}, g.speed, g.easeOut || g.easing, function() {
                h.css(g.cssAfter || {}), g.sync || j()
            }), g.sync && j()
        },
        queueTransition: function(b, c) {
            var d = this.opts(),
                e = void 0 !== c ? c : b.timeout;
            return 0 === d.nextSlide && 0 === --d.loop ? (d.API.log("terminating; loop=0"), d.timeout = 0, e ? setTimeout(function() {
                d.API.trigger("cycle-finished", [d])
            }, e) : d.API.trigger("cycle-finished", [d]), void(d.nextSlide = d.currSlide)) : void 0 !== d.continueAuto && (d.continueAuto === !1 || a.isFunction(d.continueAuto) && d.continueAuto() === !1) ? (d.API.log("terminating automatic transitions"), d.timeout = 0, void(d.timeoutId && clearTimeout(d.timeoutId))) : void(e && (d._lastQueue = a.now(), void 0 === c && (d._remainingTimeout = b.timeout), d.paused || d.hoverPaused || (d.timeoutId = setTimeout(function() {
                d.API.prepareTx(!1, !d.reverse)
            }, e))))
        },
        stopTransition: function() {
            var a = this.opts();
            a.slides.filter(":animated").length && (a.slides.stop(!1, !0), a.API.trigger("cycle-transition-stopped", [a])), a._tx && a._tx.stopTransition && a._tx.stopTransition(a)
        },
        advanceSlide: function(a) {
            var b = this.opts();
            return clearTimeout(b.timeoutId), b.timeoutId = 0, b.nextSlide = b.currSlide + a, b.nextSlide < 0 ? b.nextSlide = b.slides.length - 1 : b.nextSlide >= b.slides.length && (b.nextSlide = 0), b.API.prepareTx(!0, a >= 0), !1
        },
        buildSlideOpts: function(c) {
            var d, e, f = this.opts(),
                g = c.data() || {};
            for (var h in g) g.hasOwnProperty(h) && /^cycle[A-Z]+/.test(h) && (d = g[h], e = h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b), f.API.log("[" + (f.slideCount - 1) + "]", e + ":", d, "(" + typeof d + ")"), g[e] = d);
            g = a.extend({}, a.fn.cycle.defaults, f, g), g.slideNum = f.slideCount;
            try {
                delete g.API, delete g.slideCount, delete g.currSlide, delete g.nextSlide, delete g.slides
            } catch (i) {}
            return g
        },
        getSlideOpts: function(b) {
            var c = this.opts();
            void 0 === b && (b = c.currSlide);
            var d = c.slides[b],
                e = a(d).data("cycle.opts");
            return a.extend({}, c, e)
        },
        initSlide: function(b, c, d) {
            var e = this.opts();
            c.css(b.slideCss || {}), d > 0 && c.css("zIndex", d), isNaN(b.speed) && (b.speed = a.fx.speeds[b.speed] || a.fx.speeds._default), b.sync || (b.speed = b.speed / 2), c.addClass(e.slideClass)
        },
        updateView: function(a, b) {
            var c = this.opts();
            if (c._initialized) {
                var d = c.API.getSlideOpts(),
                    e = c.slides[c.currSlide];
                !a && b !== !0 && (c.API.trigger("cycle-update-view-before", [c, d, e]), c.updateView < 0) || (c.slideActiveClass && c.slides.removeClass(c.slideActiveClass).eq(c.currSlide).addClass(c.slideActiveClass), a && c.hideNonActive && c.slides.filter(":not(." + c.slideActiveClass + ")").css("visibility", "hidden"), 0 === c.updateView && setTimeout(function() {
                    c.API.trigger("cycle-update-view", [c, d, e, a])
                }, d.speed / (c.sync ? 2 : 1)), 0 !== c.updateView && c.API.trigger("cycle-update-view", [c, d, e, a]), a && c.API.trigger("cycle-update-view-after", [c, d, e]))
            }
        },
        getComponent: function(b) {
            var c = this.opts(),
                d = c[b];
            return "string" == typeof d ? /^\s*[\>|\+|~]/.test(d) ? c.container.find(d) : a(d) : d.jquery ? d : a(d)
        },
        stackSlides: function(b, c, d) {
            var e = this.opts();
            b || (b = e.slides[e.currSlide], c = e.slides[e.nextSlide], d = !e.reverse), a(b).css("zIndex", e.maxZ);
            var f, g = e.maxZ - 2,
                h = e.slideCount;
            if (d) {
                for (f = e.currSlide + 1; h > f; f++) a(e.slides[f]).css("zIndex", g--);
                for (f = 0; f < e.currSlide; f++) a(e.slides[f]).css("zIndex", g--)
            } else {
                for (f = e.currSlide - 1; f >= 0; f--) a(e.slides[f]).css("zIndex", g--);
                for (f = h - 1; f > e.currSlide; f--) a(e.slides[f]).css("zIndex", g--)
            }
            a(c).css("zIndex", e.maxZ - 1)
        },
        getSlideIndex: function(a) {
            return this.opts().slides.index(a)
        }
    }, a.fn.cycle.log = function() {
        window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
    }, a.fn.cycle.version = function() {
        return "Cycle2: " + c
    }, a.fn.cycle.transitions = {
        custom: {},
        none: {
            before: function(a, b, c, d) {
                a.API.stackSlides(c, b, d), a.cssBefore = {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }
            }
        },
        fade: {
            before: function(b, c, d, e) {
                var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
                b.API.stackSlides(c, d, e), b.cssBefore = a.extend(f, {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                }), b.animIn = {
                    opacity: 1
                }, b.animOut = {
                    opacity: 0
                }
            }
        },
        fadeout: {
            before: function(b, c, d, e) {
                var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
                b.API.stackSlides(c, d, e), b.cssBefore = a.extend(f, {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }), b.animOut = {
                    opacity: 0
                }
            }
        },
        scrollHorz: {
            before: function(a, b, c, d) {
                a.API.stackSlides(b, c, d);
                var e = a.container.css("overflow", "hidden").width();
                a.cssBefore = {
                    left: d ? e : -e,
                    top: 0,
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }, a.cssAfter = {
                    zIndex: a._maxZ - 2,
                    left: 0
                }, a.animIn = {
                    left: 0
                }, a.animOut = {
                    left: d ? -e : e
                }
            }
        }
    }, a.fn.cycle.defaults = {
        allowWrap: !0,
        autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
        delay: 0,
        easing: null,
        fx: "fade",
        hideNonActive: !0,
        loop: 0,
        manualFx: void 0,
        manualSpeed: void 0,
        manualTrump: !0,
        maxZ: 100,
        pauseOnHover: !1,
        reverse: !1,
        slideActiveClass: "cycle-slide-active",
        slideClass: "cycle-slide",
        slideCss: {
            position: "absolute",
            top: 0,
            left: 0
        },
        slides: "> img",
        speed: 500,
        startingSlide: 0,
        sync: !0,
        timeout: 4e3,
        updateView: 0
    }, a(document).ready(function() {
        a(a.fn.cycle.defaults.autoSelector).cycle()
    })
}(jQuery), /*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(a) {
    "use strict";

    function b(b, d) {
        var e, f, g, h = d.autoHeight;
        if ("container" == h) f = a(d.slides[d.currSlide]).outerHeight(), d.container.height(f);
        else if (d._autoHeightRatio) d.container.height(d.container.width() / d._autoHeightRatio);
        else if ("calc" === h || "number" == a.type(h) && h >= 0) {
            if (g = "calc" === h ? c(b, d) : h >= d.slides.length ? 0 : h, g == d._sentinelIndex) return;
            d._sentinelIndex = g, d._sentinel && d._sentinel.remove(), e = a(d.slides[g].cloneNode(!0)), e.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), e.css({
                position: "static",
                visibility: "hidden",
                display: "block"
            }).prependTo(d.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), e.find("*").css("visibility", "hidden"), d._sentinel = e
        }
    }

    function c(b, c) {
        var d = 0,
            e = -1;
        return c.slides.each(function(b) {
            var c = a(this).height();
            c > e && (e = c, d = b)
        }), d
    }

    function d(b, c, d, e) {
        var f = a(e).outerHeight();
        c.container.animate({
            height: f
        }, c.autoHeightSpeed, c.autoHeightEasing)
    }

    function e(c, f) {
        f._autoHeightOnResize && (a(window).off("resize orientationchange", f._autoHeightOnResize), f._autoHeightOnResize = null), f.container.off("cycle-slide-added cycle-slide-removed", b), f.container.off("cycle-destroyed", e), f.container.off("cycle-before", d), f._sentinel && (f._sentinel.remove(), f._sentinel = null)
    }
    a.extend(a.fn.cycle.defaults, {
        autoHeight: 0,
        autoHeightSpeed: 250,
        autoHeightEasing: null
    }), a(document).on("cycle-initialized", function(c, f) {
        function g() {
            b(c, f)
        }
        var h, i = f.autoHeight,
            j = a.type(i),
            k = null;
        ("string" === j || "number" === j) && (f.container.on("cycle-slide-added cycle-slide-removed", b), f.container.on("cycle-destroyed", e), "container" == i ? f.container.on("cycle-before", d) : "string" === j && /\d+\:\d+/.test(i) && (h = i.match(/(\d+)\:(\d+)/), h = h[1] / h[2], f._autoHeightRatio = h), "number" !== j && (f._autoHeightOnResize = function() {
            clearTimeout(k), k = setTimeout(g, 50)
        }, a(window).on("resize orientationchange", f._autoHeightOnResize)), setTimeout(g, 30))
    })
}(jQuery), /*! caption plugin for Cycle2;  version: 20130306 */
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        caption: "> .cycle-caption",
        captionTemplate: "{{slideNum}} / {{slideCount}}",
        overlay: "> .cycle-overlay",
        overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
        captionModule: "caption"
    }), a(document).on("cycle-update-view", function(b, c, d, e) {
        if ("caption" === c.captionModule) {
            a.each(["caption", "overlay"], function() {
                var a = this,
                    b = d[a + "Template"],
                    f = c.API.getComponent(a);
                f.length && b ? (f.html(c.API.tmpl(b, d, c, e)), f.show()) : f.hide()
            })
        }
    }), a(document).on("cycle-destroyed", function(b, c) {
        var d;
        a.each(["caption", "overlay"], function() {
            var a = this,
                b = c[a + "Template"];
            c[a] && b && (d = c.API.getComponent("caption"), d.empty())
        })
    })
}(jQuery), /*! command plugin for Cycle2;  version: 20140415 */
function(a) {
    "use strict";
    var b = a.fn.cycle;
    a.fn.cycle = function(c) {
        var d, e, f, g = a.makeArray(arguments);
        return "number" == a.type(c) ? this.cycle("goto", c) : "string" == a.type(c) ? this.each(function() {
            var h;
            return d = c, f = a(this).data("cycle.opts"), void 0 === f ? void b.log('slideshow must be initialized before sending commands; "' + d + '" ignored') : (d = "goto" == d ? "jump" : d, e = f.API[d], a.isFunction(e) ? (h = a.makeArray(g), h.shift(), e.apply(f.API, h)) : void b.log("unknown command: ", d))
        }) : b.apply(this, arguments)
    }, a.extend(a.fn.cycle, b), a.extend(b.API, {
        next: function() {
            var a = this.opts();
            if (!a.busy || a.manualTrump) {
                var b = a.reverse ? -1 : 1;
                a.allowWrap === !1 && a.currSlide + b >= a.slideCount || (a.API.advanceSlide(b), a.API.trigger("cycle-next", [a]).log("cycle-next"))
            }
        },
        prev: function() {
            var a = this.opts();
            if (!a.busy || a.manualTrump) {
                var b = a.reverse ? 1 : -1;
                a.allowWrap === !1 && a.currSlide + b < 0 || (a.API.advanceSlide(b), a.API.trigger("cycle-prev", [a]).log("cycle-prev"))
            }
        },
        destroy: function() {
            this.stop();
            var b = this.opts(),
                c = a.isFunction(a._data) ? a._data : a.noop;
            clearTimeout(b.timeoutId), b.timeoutId = 0, b.API.stop(), b.API.trigger("cycle-destroyed", [b]).log("cycle-destroyed"), b.container.removeData(), c(b.container[0], "parsedAttrs", !1), b.retainStylesOnDestroy || (b.container.removeAttr("style"), b.slides.removeAttr("style"), b.slides.removeClass(b.slideActiveClass)), b.slides.each(function() {
                var d = a(this);
                d.removeData(), d.removeClass(b.slideClass), c(this, "parsedAttrs", !1)
            })
        },
        jump: function(a, b) {
            var c, d = this.opts();
            if (!d.busy || d.manualTrump) {
                var e = parseInt(a, 10);
                if (isNaN(e) || 0 > e || e >= d.slides.length) return void d.API.log("goto: invalid slide index: " + e);
                if (e == d.currSlide) return void d.API.log("goto: skipping, already on slide", e);
                d.nextSlide = e, clearTimeout(d.timeoutId), d.timeoutId = 0, d.API.log("goto: ", e, " (zero-index)"), c = d.currSlide < d.nextSlide, d._tempFx = b, d.API.prepareTx(!0, c)
            }
        },
        stop: function() {
            var b = this.opts(),
                c = b.container;
            clearTimeout(b.timeoutId), b.timeoutId = 0, b.API.stopTransition(), b.pauseOnHover && (b.pauseOnHover !== !0 && (c = a(b.pauseOnHover)), c.off("mouseenter mouseleave")), b.API.trigger("cycle-stopped", [b]).log("cycle-stopped")
        },
        reinit: function() {
            var a = this.opts();
            a.API.destroy(), a.container.cycle()
        },
        remove: function(b) {
            for (var c, d, e = this.opts(), f = [], g = 1, h = 0; h < e.slides.length; h++) c = e.slides[h], h == b ? d = c : (f.push(c), a(c).data("cycle.opts").slideNum = g, g++);
            d && (e.slides = a(f), e.slideCount--, a(d).remove(), b == e.currSlide ? e.API.advanceSlide(1) : b < e.currSlide ? e.currSlide-- : e.currSlide++, e.API.trigger("cycle-slide-removed", [e, b, d]).log("cycle-slide-removed"), e.API.updateView())
        }
    }), a(document).on("click.cycle", "[data-cycle-cmd]", function(b) {
        b.preventDefault();
        var c = a(this),
            d = c.data("cycle-cmd"),
            e = c.data("cycle-context") || ".cycle-slideshow";
        a(e).cycle(d, c.data("cycle-arg"))
    })
}(jQuery), /*! hash plugin for Cycle2;  version: 20130905 */
function(a) {
    "use strict";

    function b(b, c) {
        var d;
        return b._hashFence ? void(b._hashFence = !1) : (d = window.location.hash.substring(1), void b.slides.each(function(e) {
            if (a(this).data("cycle-hash") == d) {
                if (c === !0) b.startingSlide = e;
                else {
                    var f = b.currSlide < e;
                    b.nextSlide = e, b.API.prepareTx(!0, f)
                }
                return !1
            }
        }))
    }
    a(document).on("cycle-pre-initialize", function(c, d) {
        b(d, !0), d._onHashChange = function() {
            b(d, !1)
        }, a(window).on("hashchange", d._onHashChange)
    }), a(document).on("cycle-update-view", function(a, b, c) {
        c.hash && "#" + c.hash != window.location.hash && (b._hashFence = !0, window.location.hash = c.hash)
    }), a(document).on("cycle-destroyed", function(b, c) {
        c._onHashChange && a(window).off("hashchange", c._onHashChange)
    })
}(jQuery), /*! loader plugin for Cycle2;  version: 20131121 */
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        loader: !1
    }), a(document).on("cycle-bootstrap", function(b, c) {
        function d(b, d) {
            function f(b) {
                var f;
                "wait" == c.loader ? (h.push(b), 0 === j && (h.sort(g), e.apply(c.API, [h, d]), c.container.removeClass("cycle-loading"))) : (f = a(c.slides[c.currSlide]), e.apply(c.API, [b, d]), f.show(), c.container.removeClass("cycle-loading"))
            }

            function g(a, b) {
                return a.data("index") - b.data("index")
            }
            var h = [];
            if ("string" == a.type(b)) b = a.trim(b);
            else if ("array" === a.type(b))
                for (var i = 0; i < b.length; i++) b[i] = a(b[i])[0];
            b = a(b);
            var j = b.length;
            j && (b.css("visibility", "hidden").appendTo("body").each(function(b) {
                function g() {
                    0 === --i && (--j, f(k))
                }
                var i = 0,
                    k = a(this),
                    l = k.is("img") ? k : k.find("img");
                return k.data("index", b), l = l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'), l.length ? (i = l.length, void l.each(function() {
                    this.complete ? g() : a(this).load(function() {
                        g()
                    }).on("error", function() {
                        0 === --i && (c.API.log("slide skipped; img not loaded:", this.src), 0 === --j && "wait" == c.loader && e.apply(c.API, [h, d]))
                    })
                })) : (--j, void h.push(k))
            }), j && c.container.addClass("cycle-loading"))
        }
        var e;
        c.loader && (e = c.API.add, c.API.add = d)
    })
}(jQuery), /*! pager plugin for Cycle2;  version: 20140415 */
function(a) {
    "use strict";

    function b(b, c, d) {
        var e, f = b.API.getComponent("pager");
        f.each(function() {
            var f = a(this);
            if (c.pagerTemplate) {
                var g = b.API.tmpl(c.pagerTemplate, c, b, d[0]);
                e = a(g).appendTo(f)
            } else e = f.children().eq(b.slideCount - 1);
            e.on(b.pagerEvent, function(a) {
                b.pagerEventBubble || a.preventDefault(), b.API.page(f, a.currentTarget)
            })
        })
    }

    function c(a, b) {
        var c = this.opts();
        if (!c.busy || c.manualTrump) {
            var d = a.children().index(b),
                e = d,
                f = c.currSlide < e;
            c.currSlide != e && (c.nextSlide = e, c._tempFx = c.pagerFx, c.API.prepareTx(!0, f), c.API.trigger("cycle-pager-activated", [c, a, b]))
        }
    }
    a.extend(a.fn.cycle.defaults, {
        pager: "> .cycle-pager",
        pagerActiveClass: "cycle-pager-active",
        pagerEvent: "click.cycle",
        pagerEventBubble: void 0,
        pagerTemplate: "<span>&bull;</span>"
    }), a(document).on("cycle-bootstrap", function(a, c, d) {
        d.buildPagerLink = b
    }), a(document).on("cycle-slide-added", function(a, b, d, e) {
        b.pager && (b.API.buildPagerLink(b, d, e), b.API.page = c)
    }), a(document).on("cycle-slide-removed", function(b, c, d) {
        if (c.pager) {
            var e = c.API.getComponent("pager");
            e.each(function() {
                var b = a(this);
                a(b.children()[d]).remove()
            })
        }
    }), a(document).on("cycle-update-view", function(b, c) {
        var d;
        c.pager && (d = c.API.getComponent("pager"), d.each(function() {
            a(this).children().removeClass(c.pagerActiveClass).eq(c.currSlide).addClass(c.pagerActiveClass)
        }))
    }), a(document).on("cycle-destroyed", function(a, b) {
        var c = b.API.getComponent("pager");
        c && (c.children().off(b.pagerEvent), b.pagerTemplate && c.empty())
    })
}(jQuery), /*! prevnext plugin for Cycle2;  version: 20140408 */
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        next: "> .cycle-next",
        nextEvent: "click.cycle",
        disabledClass: "disabled",
        prev: "> .cycle-prev",
        prevEvent: "click.cycle",
        swipe: !1
    }), a(document).on("cycle-initialized", function(a, b) {
        if (b.API.getComponent("next").on(b.nextEvent, function(a) {
                a.preventDefault(), b.API.next()
            }), b.API.getComponent("prev").on(b.prevEvent, function(a) {
                a.preventDefault(), b.API.prev()
            }), b.swipe) {
            var c = b.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
                d = b.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
            b.container.on(c, function() {
                b._tempFx = b.swipeFx, b.API.next()
            }), b.container.on(d, function() {
                b._tempFx = b.swipeFx, b.API.prev()
            })
        }
    }), a(document).on("cycle-update-view", function(a, b) {
        if (!b.allowWrap) {
            var c = b.disabledClass,
                d = b.API.getComponent("next"),
                e = b.API.getComponent("prev"),
                f = b._prevBoundry || 0,
                g = void 0 !== b._nextBoundry ? b._nextBoundry : b.slideCount - 1;
            b.currSlide == g ? d.addClass(c).prop("disabled", !0) : d.removeClass(c).prop("disabled", !1), b.currSlide === f ? e.addClass(c).prop("disabled", !0) : e.removeClass(c).prop("disabled", !1)
        }
    }), a(document).on("cycle-destroyed", function(a, b) {
        b.API.getComponent("prev").off(b.nextEvent), b.API.getComponent("next").off(b.prevEvent), b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
    })
}(jQuery), /*! progressive loader plugin for Cycle2;  version: 20130315 */
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        progressive: !1
    }), a(document).on("cycle-pre-initialize", function(b, c) {
        if (c.progressive) {
            var d, e, f = c.API,
                g = f.next,
                h = f.prev,
                i = f.prepareTx,
                j = a.type(c.progressive);
            if ("array" == j) d = c.progressive;
            else if (a.isFunction(c.progressive)) d = c.progressive(c);
            else if ("string" == j) {
                if (e = a(c.progressive), d = a.trim(e.html()), !d) return;
                if (/^(\[)/.test(d)) try {
                    d = a.parseJSON(d)
                } catch (k) {
                    return void f.log("error parsing progressive slides", k)
                } else d = d.split(new RegExp(e.data("cycle-split") || "\n")), d[d.length - 1] || d.pop()
            }
            i && (f.prepareTx = function(a, b) {
                var e, f;
                return a || 0 === d.length ? void i.apply(c.API, [a, b]) : void(b && c.currSlide == c.slideCount - 1 ? (f = d[0], d = d.slice(1), c.container.one("cycle-slide-added", function(a, b) {
                    setTimeout(function() {
                        b.API.advanceSlide(1)
                    }, 50)
                }), c.API.add(f)) : b || 0 !== c.currSlide ? i.apply(c.API, [a, b]) : (e = d.length - 1, f = d[e], d = d.slice(0, e), c.container.one("cycle-slide-added", function(a, b) {
                    setTimeout(function() {
                        b.currSlide = 1, b.API.advanceSlide(-1)
                    }, 50)
                }), c.API.add(f, !0)))
            }), g && (f.next = function() {
                var a = this.opts();
                if (d.length && a.currSlide == a.slideCount - 1) {
                    var b = d[0];
                    d = d.slice(1), a.container.one("cycle-slide-added", function(a, b) {
                        g.apply(b.API), b.container.removeClass("cycle-loading")
                    }), a.container.addClass("cycle-loading"), a.API.add(b)
                } else g.apply(a.API)
            }), h && (f.prev = function() {
                var a = this.opts();
                if (d.length && 0 === a.currSlide) {
                    var b = d.length - 1,
                        c = d[b];
                    d = d.slice(0, b), a.container.one("cycle-slide-added", function(a, b) {
                        b.currSlide = 1, b.API.advanceSlide(-1), b.container.removeClass("cycle-loading")
                    }), a.container.addClass("cycle-loading"), a.API.add(c, !0)
                } else h.apply(a.API)
            })
        }
    })
}(jQuery), /*! tmpl plugin for Cycle2;  version: 20121227 */
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        tmplRegex: "{{((.)?.*?)}}"
    }), a.extend(a.fn.cycle.API, {
        tmpl: function(b, c) {
            var d = new RegExp(c.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g"),
                e = a.makeArray(arguments);
            return e.shift(), b.replace(d, function(b, c) {
                var d, f, g, h, i = c.split(".");
                for (d = 0; d < e.length; d++)
                    if (g = e[d]) {
                        if (i.length > 1)
                            for (h = g, f = 0; f < i.length; f++) g = h, h = h[i[f]] || c;
                        else h = g[c];
                        if (a.isFunction(h)) return h.apply(g, e);
                        if (void 0 !== h && null !== h && h != c) return h
                    }
                return c
            })
        }
    })
}(jQuery);
//# sourceMappingURL=jquery.cycle2.js.map


/* newsletter form field */
(function(window) {
    'use strict';

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)")
    }
    var hasClass, addClass, removeClass;
    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c)
        };
        addClass = function(elem, c) {
            elem.classList.add(c)
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c)
        }
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className)
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ')
        }
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c)
    }
    var classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    if (typeof define === 'function' && define.amd) {
        define(classie)
    } else {
        window.classie = classie
    }
})(window);
(function() {
    if (!String.prototype.trim) {
        (function() {
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '')
            }
        })()
    }[].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl) {
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled')
        }
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur)
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled')
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled')
        }
    }
})();


// jquery.countTo
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    function c(a, b) {
        return a.toFixed(b.decimals)
    }
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, this.dataOptions(), d), this.init()
    };
    b.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: c,
        onUpdate: null,
        onComplete: null
    }, b.prototype.init = function() {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, b.prototype.dataOptions = function() {
        var a = {
                from: this.$element.data("from"),
                to: this.$element.data("to"),
                speed: this.$element.data("speed"),
                refreshInterval: this.$element.data("refresh-interval"),
                decimals: this.$element.data("decimals")
            },
            b = Object.keys(a);
        for (var c in b) {
            var d = b[c];
            "undefined" == typeof a[d] && delete a[d]
        }
        return a
    }, b.prototype.update = function() {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, b.prototype.render = function() {
        var a = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(a)
    }, b.prototype.restart = function() {
        this.stop(), this.init(), this.start()
    }, b.prototype.start = function() {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, b.prototype.stop = function() {
        this.interval && clearInterval(this.interval)
    }, b.prototype.toggle = function() {
        this.interval ? this.stop() : this.start()
    }, a.fn.countTo = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("countTo"),
                f = !e || "object" == typeof c,
                g = "object" == typeof c ? c : {},
                h = "string" == typeof c ? c : "start";
            f && (e && e.stop(), d.data("countTo", e = new b(this, g))), e[h].call(e)
        })
    }
});


// jquery.appear
! function(a) {
    a.fn.appear = function(b, c) {
        var d = a.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, c);
        return this.each(function() {
            var c = a(this);
            if (c.appeared = !1, !b) return void c.trigger("appear", d.data);
            var e = a(window),
                f = function() {
                    if (!c.is(":visible")) return void(c.appeared = !1);
                    var a = e.scrollLeft(),
                        b = e.scrollTop(),
                        f = c.offset(),
                        g = f.left,
                        h = f.top,
                        i = d.accX,
                        j = d.accY,
                        k = c.height(),
                        l = e.height(),
                        m = c.width(),
                        n = e.width();
                    h + k + j >= b && h <= b + l + j && g + m + i >= a && g <= a + n + i ? c.appeared || c.trigger("appear", d.data) : c.appeared = !1
                },
                g = function() {
                    if (c.appeared = !0, d.one) {
                        e.unbind("scroll", f);
                        var g = a.inArray(f, a.fn.appear.checks);
                        g >= 0 && a.fn.appear.checks.splice(g, 1)
                    }
                    b.apply(this, arguments)
                };
            d.one ? c.one("appear", d.data, g) : c.bind("appear", d.data, g), e.scroll(f), a.fn.appear.checks.push(f), f()
        })
    }, a.extend(a.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var b = a.fn.appear.checks.length;
            if (b > 0)
                for (; b--;) a.fn.appear.checks[b]()
        },
        run: function() {
            a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout), a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20)
        }
    }), a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(b, c) {
        var d = a.fn[c];
        d && (a.fn[c] = function() {
            var b = d.apply(this, arguments);
            return a.fn.appear.run(), b
        })
    })
}(jQuery);


// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    var b = Array.prototype.slice,
        c = Array.prototype.splice,
        d = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: !1,
            getWidthFrom: "",
            widthFromWrapper: !0,
            responsiveWidth: !1,
            zIndex: "auto"
        },
        e = a(window),
        f = a(document),
        g = [],
        h = e.height(),
        i = function() {
            for (var b = e.scrollTop(), c = f.height(), d = c - h, i = b > d ? d - b : 0, j = 0, k = g.length; j < k; j++) {
                var l = g[j],
                    m = l.stickyWrapper.offset().top,
                    n = m - l.topSpacing - i;
                if (l.stickyWrapper.css("height", l.stickyElement.outerHeight()), b <= n) null !== l.currentTop && (l.stickyElement.css({
                    width: "",
                    position: "",
                    top: "",
                    "z-index": ""
                }), l.stickyElement.parent().removeClass(l.className), l.stickyElement.trigger("sticky-end", [l]), l.currentTop = null);
                else {
                    var o = c - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - b - i;
                    if (o < 0 ? o += l.topSpacing : o = l.topSpacing, l.currentTop !== o) {
                        var p;
                        l.getWidthFrom ? p = a(l.getWidthFrom).width() || null : l.widthFromWrapper && (p = l.stickyWrapper.width()), null == p && (p = l.stickyElement.width()), l.stickyElement.css("width", p).css("position", "fixed").css("top", o).css("z-index", l.zIndex), l.stickyElement.parent().addClass(l.className), null === l.currentTop ? l.stickyElement.trigger("sticky-start", [l]) : l.stickyElement.trigger("sticky-update", [l]), l.currentTop === l.topSpacing && l.currentTop > o || null === l.currentTop && o < l.topSpacing ? l.stickyElement.trigger("sticky-bottom-reached", [l]) : null !== l.currentTop && o === l.topSpacing && l.currentTop < o && l.stickyElement.trigger("sticky-bottom-unreached", [l]), l.currentTop = o
                    }
                    var q = l.stickyWrapper.parent(),
                        r = l.stickyElement.offset().top + l.stickyElement.outerHeight() >= q.offset().top + q.outerHeight() && l.stickyElement.offset().top <= l.topSpacing;
                    r ? l.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : l.stickyElement.css("position", "fixed").css("top", o).css("bottom", "").css("z-index", l.zIndex)
                }
            }
        },
        j = function() {
            h = e.height();
            for (var b = 0, c = g.length; b < c; b++) {
                var d = g[b],
                    f = null;
                d.getWidthFrom ? d.responsiveWidth && (f = a(d.getWidthFrom).width()) : d.widthFromWrapper && (f = d.stickyWrapper.width()), null != f && d.stickyElement.css("width", f)
            }
        },
        k = {
            init: function(b) {
                return this.each(function() {
                    var c = a.extend({}, d, b),
                        e = a(this),
                        f = e.attr("id"),
                        h = f ? f + "-" + d.wrapperClassName : d.wrapperClassName,
                        i = a("<div></div>").attr("id", h).addClass(c.wrapperClassName);
                    e.wrapAll(function() {
                        if (0 == a(this).parent("#" + h).length) return i
                    });
                    var j = e.parent();
                    c.center && j.css({
                        width: e.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    }), "right" === e.css("float") && e.css({
                        float: "none"
                    }).parent().css({
                        float: "right"
                    }), c.stickyElement = e, c.stickyWrapper = j, c.currentTop = null, g.push(c), k.setWrapperHeight(this), k.setupChangeListeners(this)
                })
            },
            setWrapperHeight: function(b) {
                var c = a(b),
                    d = c.parent();
                d && d.css("height", c.outerHeight())
            },
            setupChangeListeners: function(a) {
                if (window.MutationObserver) {
                    var b = new window.MutationObserver(function(b) {
                        (b[0].addedNodes.length || b[0].removedNodes.length) && k.setWrapperHeight(a)
                    });
                    b.observe(a, {
                        subtree: !0,
                        childList: !0
                    })
                } else window.addEventListener ? (a.addEventListener("DOMNodeInserted", function() {
                    k.setWrapperHeight(a)
                }, !1), a.addEventListener("DOMNodeRemoved", function() {
                    k.setWrapperHeight(a)
                }, !1)) : window.attachEvent && (a.attachEvent("onDOMNodeInserted", function() {
                    k.setWrapperHeight(a)
                }), a.attachEvent("onDOMNodeRemoved", function() {
                    k.setWrapperHeight(a)
                }))
            },
            update: i,
            unstick: function(b) {
                return this.each(function() {
                    for (var b = this, d = a(b), e = -1, f = g.length; f-- > 0;) g[f].stickyElement.get(0) === b && (c.call(g, f, 1), e = f);
                    e !== -1 && (d.unwrap(), d.css({
                        width: "",
                        position: "",
                        top: "",
                        float: "",
                        "z-index": ""
                    }))
                })
            }
        };
    window.addEventListener ? (window.addEventListener("scroll", i, !1), window.addEventListener("resize", j, !1)) : window.attachEvent && (window.attachEvent("onscroll", i), window.attachEvent("onresize", j)), a.fn.sticky = function(c) {
        return k[c] ? k[c].apply(this, b.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.sticky") : k.init.apply(this, arguments)
    }, a.fn.unstick = function(c) {
        return k[c] ? k[c].apply(this, b.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.sticky") : k.unstick.apply(this, arguments)
    }, a(function() {
        setTimeout(i, 0)
    })
});


/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function n(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }

    function o(t, e, r) {
        return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new o(t, e, r)
    }

    function r(t) {
        this.img = t
    }

    function s(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    var h = t.jQuery,
        a = t.console;
    o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
            }
    }, o.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }, o.prototype.addBackground = function(t, e) {
        var i = new s(t, e);
        this.images.push(i)
    }, o.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, o.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
    }, o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, r.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, o.makeJQueryPlugin = function(e) {
        e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function(t, e) {
            var i = new o(this, t, e);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});


/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
fotoramaVersion = "4.6.4",
    function(a, b, c, d, e) {
        "use strict";

        function f(a) {
            var b = "bez_" + d.makeArray(arguments).join("_").replace(".", "p");
            if ("function" != typeof d.easing[b]) {
                var c = function(a, b) {
                    var c = [null, null],
                        d = [null, null],
                        e = [null, null],
                        f = function(f, g) {
                            return e[g] = 3 * a[g], d[g] = 3 * (b[g] - a[g]) - e[g], c[g] = 1 - e[g] - d[g], f * (e[g] + f * (d[g] + f * c[g]))
                        },
                        g = function(a) {
                            return e[0] + a * (2 * d[0] + 3 * c[0] * a)
                        },
                        h = function(a) {
                            for (var b, c = a, d = 0; ++d < 14 && (b = f(c, 0) - a, !(Math.abs(b) < .001));) c -= b / g(c);
                            return c
                        };
                    return function(a) {
                        return f(h(a), 1)
                    }
                };
                d.easing[b] = function(b, d, e, f, g) {
                    return f * c([a[0], a[1]], [a[2], a[3]])(d / g) + e
                }
            }
            return b
        }

        function g() {}

        function h(a, b, c) {
            return Math.max(isNaN(b) ? -1 / 0 : b, Math.min(isNaN(c) ? 1 / 0 : c, a))
        }

        function i(a) {
            return a.match(/ma/) && a.match(/-?\d+(?!d)/g)[a.match(/3d/) ? 12 : 4]
        }

        function j(a) {
            return Ic ? +i(a.css("transform")) : +a.css("left").replace("px", "")
        }

        function k(a) {
            var b = {};
            return Ic ? b.transform = "translate3d(" + a + "px,0,0)" : b.left = a, b
        }

        function l(a) {
            return {
                "transition-duration": a + "ms"
            }
        }

        function m(a, b) {
            return isNaN(a) ? b : a
        }

        function n(a, b) {
            return m(+String(a).replace(b || "px", ""))
        }

        function o(a) {
            return /%$/.test(a) ? n(a, "%") : e
        }

        function p(a, b) {
            return m(o(a) / 100 * b, n(a))
        }

        function q(a) {
            return (!isNaN(n(a)) || !isNaN(n(a, "%"))) && a
        }

        function r(a, b, c, d) {
            return (a - (d || 0)) * (b + (c || 0))
        }

        function s(a, b, c, d) {
            return -Math.round(a / (b + (c || 0)) - (d || 0))
        }

        function t(a) {
            var b = a.data();
            if (!b.tEnd) {
                var c = a[0],
                    d = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        msTransition: "MSTransitionEnd",
                        transition: "transitionend"
                    };
                T(c, d[uc.prefixed("transition")], function(a) {
                    b.tProp && a.propertyName.match(b.tProp) && b.onEndFn()
                }), b.tEnd = !0
            }
        }

        function u(a, b, c, d) {
            var e, f = a.data();
            f && (f.onEndFn = function() {
                e || (e = !0, clearTimeout(f.tT), c())
            }, f.tProp = b, clearTimeout(f.tT), f.tT = setTimeout(function() {
                f.onEndFn()
            }, 1.5 * d), t(a))
        }

        function v(a, b) {
            if (a.length) {
                var c = a.data();
                Ic ? (a.css(l(0)), c.onEndFn = g, clearTimeout(c.tT)) : a.stop();
                var d = w(b, function() {
                    return j(a)
                });
                return a.css(k(d)), d
            }
        }

        function w() {
            for (var a, b = 0, c = arguments.length; c > b && (a = b ? arguments[b]() : arguments[b], "number" != typeof a); b++);
            return a
        }

        function x(a, b) {
            return Math.round(a + (b - a) / 1.5)
        }

        function y() {
            return y.p = y.p || ("https:" === c.protocol ? "https://" : "http://"), y.p
        }

        function z(a) {
            var c = b.createElement("a");
            return c.href = a, c
        }

        function A(a, b) {
            if ("string" != typeof a) return a;
            a = z(a);
            var c, d;
            if (a.host.match(/youtube\.com/) && a.search) {
                if (c = a.search.split("v=")[1]) {
                    var e = c.indexOf("&"); - 1 !== e && (c = c.substring(0, e)), d = "youtube"
                }
            } else a.host.match(/youtube\.com|youtu\.be/) ? (c = a.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), d = "youtube") : a.host.match(/vimeo\.com/) && (d = "vimeo", c = a.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
            return c && d || !b || (c = a.href, d = "custom"), c ? {
                id: c,
                type: d,
                s: a.search.replace(/^\?/, ""),
                p: y()
            } : !1
        }

        function B(a, b, c) {
            var e, f, g = a.video;
            return "youtube" === g.type ? (f = y() + "img.youtube.com/vi/" + g.id + "/default.jpg", e = f.replace(/\/default.jpg$/, "/hqdefault.jpg"), a.thumbsReady = !0) : "vimeo" === g.type ? d.ajax({
                url: y() + "vimeo.com/api/v2/video/" + g.id + ".json",
                dataType: "jsonp",
                success: function(d) {
                    a.thumbsReady = !0, C(b, {
                        img: d[0].thumbnail_large,
                        thumb: d[0].thumbnail_small
                    }, a.i, c)
                }
            }) : a.thumbsReady = !0, {
                img: e,
                thumb: f
            }
        }

        function C(a, b, c, e) {
            for (var f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (h.i === c && h.thumbsReady) {
                    var i = {
                        videoReady: !0
                    };
                    i[Xc] = i[Zc] = i[Yc] = !1, e.splice(f, 1, d.extend({}, h, i, b));
                    break
                }
            }
        }

        function D(a) {
            function b(a, b, e) {
                var f = a.children("img").eq(0),
                    g = a.attr("href"),
                    h = a.attr("src"),
                    i = f.attr("src"),
                    j = b.video,
                    k = e ? A(g, j === !0) : !1;
                k ? g = !1 : k = j, c(a, f, d.extend(b, {
                    video: k,
                    img: b.img || g || h || i,
                    thumb: b.thumb || i || h || g
                }))
            }

            function c(a, b, c) {
                var e = c.thumb && c.img !== c.thumb,
                    f = n(c.width || a.attr("width")),
                    g = n(c.height || a.attr("height"));
                d.extend(c, {
                    width: f,
                    height: g,
                    thumbratio: S(c.thumbratio || n(c.thumbwidth || b && b.attr("width") || e || f) / n(c.thumbheight || b && b.attr("height") || e || g))
                })
            }
            var e = [];
            return a.children().each(function() {
                var a = d(this),
                    f = R(d.extend(a.data(), {
                        id: a.attr("id")
                    }));
                if (a.is("a, img")) b(a, f, !0);
                else {
                    if (a.is(":empty")) return;
                    c(a, null, d.extend(f, {
                        html: this,
                        _html: a.html()
                    }))
                }
                e.push(f)
            }), e
        }

        function E(a) {
            return 0 === a.offsetWidth && 0 === a.offsetHeight
        }

        function F(a) {
            return !d.contains(b.documentElement, a)
        }

        function G(a, b, c, d) {
            return G.i || (G.i = 1, G.ii = [!0]), d = d || G.i, "undefined" == typeof G.ii[d] && (G.ii[d] = !0), a() ? b() : G.ii[d] && setTimeout(function() {
                G.ii[d] && G(a, b, c, d)
            }, c || 100), G.i++
        }

        function H(a) {
            c.replace(c.protocol + "//" + c.host + c.pathname.replace(/^\/?/, "/") + c.search + "#" + a)
        }

        function I(a, b, c, d) {
            var e = a.data(),
                f = e.measures;
            if (f && (!e.l || e.l.W !== f.width || e.l.H !== f.height || e.l.r !== f.ratio || e.l.w !== b.w || e.l.h !== b.h || e.l.m !== c || e.l.p !== d)) {
                var g = f.width,
                    i = f.height,
                    j = b.w / b.h,
                    k = f.ratio >= j,
                    l = "scaledown" === c,
                    m = "contain" === c,
                    n = "cover" === c,
                    o = $(d);
                k && (l || m) || !k && n ? (g = h(b.w, 0, l ? g : 1 / 0), i = g / f.ratio) : (k && n || !k && (l || m)) && (i = h(b.h, 0, l ? i : 1 / 0), g = i * f.ratio), a.css({
                    width: g,
                    height: i,
                    left: p(o.x, b.w - g),
                    top: p(o.y, b.h - i)
                }), e.l = {
                    W: f.width,
                    H: f.height,
                    r: f.ratio,
                    w: b.w,
                    h: b.h,
                    m: c,
                    p: d
                }
            }
            return !0
        }

        function J(a, b) {
            var c = a[0];
            c.styleSheet ? c.styleSheet.cssText = b : a.html(b)
        }

        function K(a, b, c) {
            return b === c ? !1 : b >= a ? "left" : a >= c ? "right" : "left right"
        }

        function L(a, b, c, d) {
            if (!c) return !1;
            if (!isNaN(a)) return a - (d ? 0 : 1);
            for (var e, f = 0, g = b.length; g > f; f++) {
                var h = b[f];
                if (h.id === a) {
                    e = f;
                    break
                }
            }
            return e
        }

        function M(a, b, c) {
            c = c || {}, a.each(function() {
                var a, e = d(this),
                    f = e.data();
                f.clickOn || (f.clickOn = !0, d.extend(cb(e, {
                    onStart: function(b) {
                        a = b, (c.onStart || g).call(this, b)
                    },
                    onMove: c.onMove || g,
                    onTouchEnd: c.onTouchEnd || g,
                    onEnd: function(c) {
                        c.moved || b.call(this, a)
                    }
                }), {
                    noMove: !0
                }))
            })
        }

        function N(a, b) {
            return '<div class="' + a + '">' + (b || "") + "</div>"
        }

        function O(a) {
            for (var b = a.length; b;) {
                var c = Math.floor(Math.random() * b--),
                    d = a[b];
                a[b] = a[c], a[c] = d
            }
            return a
        }

        function P(a) {
            return "[object Array]" == Object.prototype.toString.call(a) && d.map(a, function(a) {
                return d.extend({}, a)
            })
        }

        function Q(a, b, c) {
            a.scrollLeft(b || 0).scrollTop(c || 0)
        }

        function R(a) {
            if (a) {
                var b = {};
                return d.each(a, function(a, c) {
                    b[a.toLowerCase()] = c
                }), b
            }
        }

        function S(a) {
            if (a) {
                var b = +a;
                return isNaN(b) ? (b = a.split("/"), +b[0] / +b[1] || e) : b
            }
        }

        function T(a, b, c, d) {
            b && (a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent("on" + b, c))
        }

        function U(a) {
            return !!a.getAttribute("disabled")
        }

        function V(a) {
            return {
                tabindex: -1 * a + "",
                disabled: a
            }
        }

        function W(a, b) {
            T(a, "keyup", function(c) {
                U(a) || 13 == c.keyCode && b.call(a, c)
            })
        }

        function X(a, b) {
            T(a, "focus", a.onfocusin = function(c) {
                b.call(a, c)
            }, !0)
        }

        function Y(a, b) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1, b && a.stopPropagation && a.stopPropagation()
        }

        function Z(a) {
            return a ? ">" : "<"
        }

        function $(a) {
            return a = (a + "").split(/\s+/), {
                x: q(a[0]) || bd,
                y: q(a[1]) || bd
            }
        }

        function _(a, b) {
            var c = a.data(),
                e = Math.round(b.pos),
                f = function() {
                    c.sliding = !1, (b.onEnd || g)()
                };
            "undefined" != typeof b.overPos && b.overPos !== b.pos && (e = b.overPos, f = function() {
                _(a, d.extend({}, b, {
                    overPos: b.pos,
                    time: Math.max(Qc, b.time / 2)
                }))
            });
            var h = d.extend(k(e), b.width && {
                width: b.width
            });
            c.sliding = !0, Ic ? (a.css(d.extend(l(b.time), h)), b.time > 10 ? u(a, "transform", f, b.time) : f()) : a.stop().animate(h, b.time, _c, f)
        }

        function ab(a, b, c, e, f, h) {
            var i = "undefined" != typeof h;
            if (i || (f.push(arguments), Array.prototype.push.call(arguments, f.length), !(f.length > 1))) {
                a = a || d(a), b = b || d(b);
                var j = a[0],
                    k = b[0],
                    l = "crossfade" === e.method,
                    m = function() {
                        if (!m.done) {
                            m.done = !0;
                            var a = (i || f.shift()) && f.shift();
                            a && ab.apply(this, a), (e.onEnd || g)(!!a)
                        }
                    },
                    n = e.time / (h || 1);
                c.removeClass(Rb + " " + Qb), a.stop().addClass(Rb), b.stop().addClass(Qb), l && k && a.fadeTo(0, 0), a.fadeTo(l ? n : 0, 1, l && m), b.fadeTo(n, 0, m), j && l || k || m()
            }
        }

        function bb(a) {
            var b = (a.touches || [])[0] || a;
            a._x = b.pageX, a._y = b.clientY, a._now = d.now()
        }

        function cb(a, c) {
            function e(a) {
                return m = d(a.target), u.checked = p = q = s = !1, k || u.flow || a.touches && a.touches.length > 1 || a.which > 1 || ed && ed.type !== a.type && gd || (p = c.select && m.is(c.select, t)) ? p : (o = "touchstart" === a.type, q = m.is("a, a *", t), n = u.control, r = u.noMove || u.noSwipe || n ? 16 : u.snap ? 0 : 4, bb(a), l = ed = a, fd = a.type.replace(/down|start/, "move").replace(/Down/, "Move"), (c.onStart || g).call(t, a, {
                    control: n,
                    $target: m
                }), k = u.flow = !0, void((!o || u.go) && Y(a)))
            }

            function f(a) {
                if (a.touches && a.touches.length > 1 || Nc && !a.isPrimary || fd !== a.type || !k) return k && h(), void(c.onTouchEnd || g)();
                bb(a);
                var b = Math.abs(a._x - l._x),
                    d = Math.abs(a._y - l._y),
                    e = b - d,
                    f = (u.go || u.x || e >= 0) && !u.noSwipe,
                    i = 0 > e;
                o && !u.checked ? (k = f) && Y(a) : (Y(a), (c.onMove || g).call(t, a, {
                    touch: o
                })), !s && Math.sqrt(Math.pow(b, 2) + Math.pow(d, 2)) > r && (s = !0), u.checked = u.checked || f || i
            }

            function h(a) {
                (c.onTouchEnd || g)();
                var b = k;
                u.control = k = !1, b && (u.flow = !1), !b || q && !u.checked || (a && Y(a), gd = !0, clearTimeout(hd), hd = setTimeout(function() {
                    gd = !1
                }, 1e3), (c.onEnd || g).call(t, {
                    moved: s,
                    $target: m,
                    control: n,
                    touch: o,
                    startEvent: l,
                    aborted: !a || "MSPointerCancel" === a.type
                }))
            }

            function i() {
                u.flow || setTimeout(function() {
                    u.flow = !0
                }, 10)
            }

            function j() {
                u.flow && setTimeout(function() {
                    u.flow = !1
                }, Pc)
            }
            var k, l, m, n, o, p, q, r, s, t = a[0],
                u = {};
            return Nc ? (T(t, "MSPointerDown", e), T(b, "MSPointerMove", f), T(b, "MSPointerCancel", h), T(b, "MSPointerUp", h)) : (T(t, "touchstart", e), T(t, "touchmove", f), T(t, "touchend", h), T(b, "touchstart", i), T(b, "touchend", j), T(b, "touchcancel", j), Ec.on("scroll", j), a.on("mousedown", e), Fc.on("mousemove", f).on("mouseup", h)), a.on("click", "a", function(a) {
                u.checked && Y(a)
            }), u
        }

        function db(a, b) {
            function c(c, d) {
                A = !0, j = l = c._x, q = c._now, p = [
                    [q, j]
                ], m = n = D.noMove || d ? 0 : v(a, (b.getPos || g)()), (b.onStart || g).call(B, c)
            }

            function e(a, b) {
                s = D.min, t = D.max, u = D.snap, w = a.altKey, A = z = !1, y = b.control, y || C.sliding || c(a)
            }

            function f(d, e) {
                D.noSwipe || (A || c(d), l = d._x, p.push([d._now, l]), n = m - (j - l), o = K(n, s, t), s >= n ? n = x(n, s) : n >= t && (n = x(n, t)), D.noMove || (a.css(k(n)), z || (z = !0, e.touch || Nc || a.addClass(ec)), (b.onMove || g).call(B, d, {
                    pos: n,
                    edge: o
                })))
            }

            function i(e) {
                if (!D.noSwipe || !e.moved) {
                    A || c(e.startEvent, !0), e.touch || Nc || a.removeClass(ec), r = d.now();
                    for (var f, i, j, k, o, q, v, x, y, z = r - Pc, C = null, E = Qc, F = b.friction, G = p.length - 1; G >= 0; G--) {
                        if (f = p[G][0], i = Math.abs(f - z), null === C || j > i) C = f, k = p[G][1];
                        else if (C === z || i > j) break;
                        j = i
                    }
                    v = h(n, s, t);
                    var H = k - l,
                        I = H >= 0,
                        J = r - C,
                        K = J > Pc,
                        L = !K && n !== m && v === n;
                    u && (v = h(Math[L ? I ? "floor" : "ceil" : "round"](n / u) * u, s, t), s = t = v), L && (u || v === n) && (y = -(H / J), E *= h(Math.abs(y), b.timeLow, b.timeHigh), o = Math.round(n + y * E / F), u || (v = o), (!I && o > t || I && s > o) && (q = I ? s : t, x = o - q, u || (v = q), x = h(v + .03 * x, q - 50, q + 50), E = Math.abs((n - x) / (y / F)))), E *= w ? 10 : 1, (b.onEnd || g).call(B, d.extend(e, {
                        moved: e.moved || K && u,
                        pos: n,
                        newPos: v,
                        overPos: x,
                        time: E
                    }))
                }
            }
            var j, l, m, n, o, p, q, r, s, t, u, w, y, z, A, B = a[0],
                C = a.data(),
                D = {};
            return D = d.extend(cb(b.$wrap, d.extend({}, b, {
                onStart: e,
                onMove: f,
                onEnd: i
            })), D)
        }

        function eb(a, b) {
            var c, e, f, h = a[0],
                i = {
                    prevent: {}
                };
            return T(h, Oc, function(a) {
                var h = a.wheelDeltaY || -1 * a.deltaY || 0,
                    j = a.wheelDeltaX || -1 * a.deltaX || 0,
                    k = Math.abs(j) && !Math.abs(h),
                    l = Z(0 > j),
                    m = e === l,
                    n = d.now(),
                    o = Pc > n - f;
                e = l, f = n, k && i.ok && (!i.prevent[l] || c) && (Y(a, !0), c && m && o || (b.shift && (c = !0, clearTimeout(i.t), i.t = setTimeout(function() {
                    c = !1
                }, Rc)), (b.onEnd || g)(a, b.shift ? l : j)))
            }), i
        }

        function fb() {
            d.each(d.Fotorama.instances, function(a, b) {
                b.index = a
            })
        }

        function gb(a) {
            d.Fotorama.instances.push(a), fb()
        }

        function hb(a) {
            d.Fotorama.instances.splice(a.index, 1), fb()
        }
        var ib = "fotorama",
            jb = "fullscreen",
            kb = ib + "__wrap",
            lb = kb + "--css2",
            mb = kb + "--css3",
            nb = kb + "--video",
            ob = kb + "--fade",
            pb = kb + "--slide",
            qb = kb + "--no-controls",
            rb = kb + "--no-shadows",
            sb = kb + "--pan-y",
            tb = kb + "--rtl",
            ub = kb + "--only-active",
            vb = kb + "--no-captions",
            wb = kb + "--toggle-arrows",
            xb = ib + "__stage",
            yb = xb + "__frame",
            zb = yb + "--video",
            Ab = xb + "__shaft",
            Bb = ib + "__grab",
            Cb = ib + "__pointer",
            Db = ib + "__arr",
            Eb = Db + "--disabled",
            Fb = Db + "--prev",
            Gb = Db + "--next",
            Hb = ib + "__nav",
            Ib = Hb + "-wrap",
            Jb = Hb + "__shaft",
            Kb = Hb + "--dots",
            Lb = Hb + "--thumbs",
            Mb = Hb + "__frame",
            Nb = Mb + "--dot",
            Ob = Mb + "--thumb",
            Pb = ib + "__fade",
            Qb = Pb + "-front",
            Rb = Pb + "-rear",
            Sb = ib + "__shadow",
            Tb = Sb + "s",
            Ub = Tb + "--left",
            Vb = Tb + "--right",
            Wb = ib + "__active",
            Xb = ib + "__select",
            Yb = ib + "--hidden",
            Zb = ib + "--fullscreen",
            $b = ib + "__fullscreen-icon",
            _b = ib + "__error",
            ac = ib + "__loading",
            bc = ib + "__loaded",
            cc = bc + "--full",
            dc = bc + "--img",
            ec = ib + "__grabbing",
            fc = ib + "__img",
            gc = fc + "--full",
            hc = ib + "__dot",
            ic = ib + "__thumb",
            jc = ic + "-border",
            kc = ib + "__html",
            lc = ib + "__video",
            mc = lc + "-play",
            nc = lc + "-close",
            oc = ib + "__caption",
            pc = ib + "__caption__wrap",
            qc = ib + "__spinner",
            rc = '" tabindex="0" role="button',
            sc = d && d.fn.jquery.split(".");
        if (!sc || sc[0] < 1 || 1 == sc[0] && sc[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
        var tc = {},
            uc = function(a, b, c) {
                function d(a) {
                    r.cssText = a
                }

                function e(a, b) {
                    return typeof a === b
                }

                function f(a, b) {
                    return !!~("" + a).indexOf(b)
                }

                function g(a, b) {
                    for (var d in a) {
                        var e = a[d];
                        if (!f(e, "-") && r[e] !== c) return "pfx" == b ? e : !0
                    }
                    return !1
                }

                function h(a, b, d) {
                    for (var f in a) {
                        var g = b[a[f]];
                        if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
                    }
                    return !1
                }

                function i(a, b, c) {
                    var d = a.charAt(0).toUpperCase() + a.slice(1),
                        f = (a + " " + u.join(d + " ") + d).split(" ");
                    return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
                }
                var j, k, l, m = "2.6.2",
                    n = {},
                    o = b.documentElement,
                    p = "modernizr",
                    q = b.createElement(p),
                    r = q.style,
                    s = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
                    t = "Webkit Moz O ms",
                    u = t.split(" "),
                    v = t.toLowerCase().split(" "),
                    w = {},
                    x = [],
                    y = x.slice,
                    z = function(a, c, d, e) {
                        var f, g, h, i, j = b.createElement("div"),
                            k = b.body,
                            l = k || b.createElement("body");
                        if (parseInt(d, 10))
                            for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : p + (d + 1), j.appendChild(h);
                        return f = ["&#173;", '<style id="s', p, '">', a, "</style>"].join(""), j.id = p, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = o.style.overflow, o.style.overflow = "hidden", o.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), o.style.overflow = i), !!g
                    },
                    A = {}.hasOwnProperty;
                l = e(A, "undefined") || e(A.call, "undefined") ? function(a, b) {
                    return b in a && e(a.constructor.prototype[b], "undefined")
                } : function(a, b) {
                    return A.call(a, b)
                }, Function.prototype.bind || (Function.prototype.bind = function(a) {
                    var b = this;
                    if ("function" != typeof b) throw new TypeError;
                    var c = y.call(arguments, 1),
                        d = function() {
                            if (this instanceof d) {
                                var e = function() {};
                                e.prototype = b.prototype;
                                var f = new e,
                                    g = b.apply(f, c.concat(y.call(arguments)));
                                return Object(g) === g ? g : f
                            }
                            return b.apply(a, c.concat(y.call(arguments)))
                        };
                    return d
                }), w.csstransforms3d = function() {
                    var a = !!i("perspective");
                    return a
                };
                for (var B in w) l(w, B) && (k = B.toLowerCase(), n[k] = w[B](), x.push((n[k] ? "" : "no-") + k));
                return n.addTest = function(a, b) {
                    if ("object" == typeof a)
                        for (var d in a) l(a, d) && n.addTest(d, a[d]);
                    else {
                        if (a = a.toLowerCase(), n[a] !== c) return n;
                        b = "function" == typeof b ? b() : b, "undefined" != typeof enableClasses && enableClasses && (o.className += " " + (b ? "" : "no-") + a), n[a] = b
                    }
                    return n
                }, d(""), q = j = null, n._version = m, n._prefixes = s, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function(a) {
                    return g([a])
                }, n.testAllProps = i, n.testStyles = z, n.prefixed = function(a, b, c) {
                    return b ? i(a, b, c) : i(a, "pfx")
                }, n
            }(a, b),
            vc = {
                ok: !1,
                is: function() {
                    return !1
                },
                request: function() {},
                cancel: function() {},
                event: "",
                prefix: ""
            },
            wc = "webkit moz o ms khtml".split(" ");
        if ("undefined" != typeof b.cancelFullScreen) vc.ok = !0;
        else
            for (var xc = 0, yc = wc.length; yc > xc; xc++)
                if (vc.prefix = wc[xc], "undefined" != typeof b[vc.prefix + "CancelFullScreen"]) {
                    vc.ok = !0;
                    break
                }
        vc.ok && (vc.event = vc.prefix + "fullscreenchange", vc.is = function() {
            switch (this.prefix) {
                case "":
                    return b.fullScreen;
                case "webkit":
                    return b.webkitIsFullScreen;
                default:
                    return b[this.prefix + "FullScreen"]
            }
        }, vc.request = function(a) {
            return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
        }, vc.cancel = function() {
            return "" === this.prefix ? b.cancelFullScreen() : b[this.prefix + "CancelFullScreen"]()
        });
        var zc, Ac = {
                lines: 12,
                length: 5,
                width: 2,
                radius: 7,
                corners: 1,
                rotate: 15,
                color: "rgba(128, 128, 128, .75)",
                hwaccel: !0
            },
            Bc = {
                top: "auto",
                left: "auto",
                className: ""
            };
        ! function(a, b) {
            zc = b()
        }(this, function() {
            function a(a, c) {
                var d, e = b.createElement(a || "div");
                for (d in c) e[d] = c[d];
                return e
            }

            function c(a) {
                for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
                return a
            }

            function d(a, b, c, d) {
                var e = ["opacity", b, ~~(100 * a), c, d].join("-"),
                    f = .01 + c / d * 100,
                    g = Math.max(1 - (1 - a) / b * (100 - f), a),
                    h = m.substring(0, m.indexOf("Animation")).toLowerCase(),
                    i = h && "-" + h + "-" || "";
                return o[e] || (p.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", p.cssRules.length), o[e] = 1), e
            }

            function f(a, b) {
                var c, d, f = a.style;
                for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < n.length; d++)
                    if (c = n[d] + b, f[c] !== e) return c;
                return f[b] !== e ? b : void 0
            }

            function g(a, b) {
                for (var c in b) a.style[f(a, c) || c] = b[c];
                return a
            }

            function h(a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b];
                    for (var d in c) a[d] === e && (a[d] = c[d])
                }
                return a
            }

            function i(a) {
                for (var b = {
                        x: a.offsetLeft,
                        y: a.offsetTop
                    }; a = a.offsetParent;) b.x += a.offsetLeft, b.y += a.offsetTop;
                return b
            }

            function j(a, b) {
                return "string" == typeof a ? a : a[b % a.length]
            }

            function k(a) {
                return "undefined" == typeof this ? new k(a) : void(this.opts = h(a || {}, k.defaults, q))
            }

            function l() {
                function b(b, c) {
                    return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
                }
                p.addRule(".spin-vml", "behavior:url(#default#VML)"), k.prototype.lines = function(a, d) {
                    function e() {
                        return g(b("group", {
                            coordsize: k + " " + k,
                            coordorigin: -i + " " + -i
                        }), {
                            width: k,
                            height: k
                        })
                    }

                    function f(a, f, h) {
                        c(m, c(g(e(), {
                            rotation: 360 / d.lines * a + "deg",
                            left: ~~f
                        }), c(g(b("roundrect", {
                            arcsize: d.corners
                        }), {
                            width: i,
                            height: d.width,
                            left: d.radius,
                            top: -d.width >> 1,
                            filter: h
                        }), b("fill", {
                            color: j(d.color, a),
                            opacity: d.opacity
                        }), b("stroke", {
                            opacity: 0
                        }))))
                    }
                    var h, i = d.length + d.width,
                        k = 2 * i,
                        l = 2 * -(d.width + d.length) + "px",
                        m = g(e(), {
                            position: "absolute",
                            top: l,
                            left: l
                        });
                    if (d.shadow)
                        for (h = 1; h <= d.lines; h++) f(h, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                    for (h = 1; h <= d.lines; h++) f(h);
                    return c(a, m)
                }, k.prototype.opacity = function(a, b, c, d) {
                    var e = a.firstChild;
                    d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
                }
            }
            var m, n = ["webkit", "Moz", "ms", "O"],
                o = {},
                p = function() {
                    var d = a("style", {
                        type: "text/css"
                    });
                    return c(b.getElementsByTagName("head")[0], d), d.sheet || d.styleSheet
                }(),
                q = {
                    lines: 12,
                    length: 7,
                    width: 5,
                    radius: 10,
                    rotate: 0,
                    corners: 1,
                    color: "#000",
                    direction: 1,
                    speed: 1,
                    trail: 100,
                    opacity: .25,
                    fps: 20,
                    zIndex: 2e9,
                    className: "spinner",
                    top: "auto",
                    left: "auto",
                    position: "relative"
                };
            k.defaults = {}, h(k.prototype, {
                spin: function(b) {
                    this.stop();
                    var c, d, e = this,
                        f = e.opts,
                        h = e.el = g(a(0, {
                            className: f.className
                        }), {
                            position: f.position,
                            width: 0,
                            zIndex: f.zIndex
                        }),
                        j = f.radius + f.length + f.width;
                    if (b && (b.insertBefore(h, b.firstChild || null), d = i(b), c = i(h), g(h, {
                            left: ("auto" == f.left ? d.x - c.x + (b.offsetWidth >> 1) : parseInt(f.left, 10) + j) + "px",
                            top: ("auto" == f.top ? d.y - c.y + (b.offsetHeight >> 1) : parseInt(f.top, 10) + j) + "px"
                        })), h.setAttribute("role", "progressbar"), e.lines(h, e.opts), !m) {
                        var k, l = 0,
                            n = (f.lines - 1) * (1 - f.direction) / 2,
                            o = f.fps,
                            p = o / f.speed,
                            q = (1 - f.opacity) / (p * f.trail / 100),
                            r = p / f.lines;
                        ! function s() {
                            l++;
                            for (var a = 0; a < f.lines; a++) k = Math.max(1 - (l + (f.lines - a) * r) % p * q, f.opacity), e.opacity(h, a * f.direction + n, k, f);
                            e.timeout = e.el && setTimeout(s, ~~(1e3 / o))
                        }()
                    }
                    return e
                },
                stop: function() {
                    var a = this.el;
                    return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = e), this
                },
                lines: function(b, e) {
                    function f(b, c) {
                        return g(a(), {
                            position: "absolute",
                            width: e.length + e.width + "px",
                            height: e.width + "px",
                            background: b,
                            boxShadow: c,
                            transformOrigin: "left",
                            transform: "rotate(" + ~~(360 / e.lines * i + e.rotate) + "deg) translate(" + e.radius + "px,0)",
                            borderRadius: (e.corners * e.width >> 1) + "px"
                        })
                    }
                    for (var h, i = 0, k = (e.lines - 1) * (1 - e.direction) / 2; i < e.lines; i++) h = g(a(), {
                        position: "absolute",
                        top: 1 + ~(e.width / 2) + "px",
                        transform: e.hwaccel ? "translate3d(0,0,0)" : "",
                        opacity: e.opacity,
                        animation: m && d(e.opacity, e.trail, k + i * e.direction, e.lines) + " " + 1 / e.speed + "s linear infinite"
                    }), e.shadow && c(h, g(f("#000", "0 0 4px #000"), {
                        top: "2px"
                    })), c(b, c(h, f(j(e.color, i), "0 0 1px rgba(0,0,0,.1)")));
                    return b
                },
                opacity: function(a, b, c) {
                    b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
                }
            });
            var r = g(a("group"), {
                behavior: "url(#default#VML)"
            });
            return !f(r, "transform") && r.adj ? l() : m = f(r, "animation"), k
        });
        var Cc, Dc, Ec = d(a),
            Fc = d(b),
            Gc = "quirks" === c.hash.replace("#", ""),
            Hc = uc.csstransforms3d,
            Ic = Hc && !Gc,
            Jc = Hc || "CSS1Compat" === b.compatMode,
            Kc = vc.ok,
            Lc = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
            Mc = !Ic || Lc,
            Nc = navigator.msPointerEnabled,
            Oc = "onwheel" in b.createElement("div") ? "wheel" : b.onmousewheel !== e ? "mousewheel" : "DOMMouseScroll",
            Pc = 250,
            Qc = 300,
            Rc = 1400,
            Sc = 5e3,
            Tc = 2,
            Uc = 64,
            Vc = 500,
            Wc = 333,
            Xc = "$stageFrame",
            Yc = "$navDotFrame",
            Zc = "$navThumbFrame",
            $c = "auto",
            _c = f([.1, 0, .25, 1]),
            ad = 99999,
            bd = "50%",
            cd = {
                width: null,
                minwidth: null,
                maxwidth: "100%",
                height: null,
                minheight: null,
                maxheight: null,
                ratio: null,
                margin: Tc,
                glimpse: 0,
                fit: "contain",
                position: bd,
                thumbposition: bd,
                nav: "dots",
                navposition: "bottom",
                navwidth: null,
                thumbwidth: Uc,
                thumbheight: Uc,
                thumbmargin: Tc,
                thumbborderwidth: Tc,
                thumbfit: "cover",
                allowfullscreen: !1,
                transition: "slide",
                clicktransition: null,
                transitionduration: Qc,
                captions: !0,
                hash: !1,
                startindex: 0,
                loop: !1,
                autoplay: !1,
                stopautoplayontouch: !0,
                keyboard: !1,
                arrows: !0,
                click: !0,
                swipe: !0,
                trackpad: !1,
                enableifsingleframe: !1,
                controlsonstart: !0,
                shuffle: !1,
                direction: "ltr",
                shadows: !0,
                spinner: null
            },
            dd = {
                left: !0,
                right: !0,
                down: !1,
                up: !1,
                space: !1,
                home: !1,
                end: !1
            };
        G.stop = function(a) {
            G.ii[a] = !1
        };
        var ed, fd, gd, hd;
        jQuery.Fotorama = function(a, e) {
            function f() {
                d.each(yd, function(a, b) {
                    if (!b.i) {
                        b.i = me++;
                        var c = A(b.video, !0);
                        if (c) {
                            var d = {};
                            b.video = c, b.img || b.thumb ? b.thumbsReady = !0 : d = B(b, yd, ie), C(yd, {
                                img: d.img,
                                thumb: d.thumb
                            }, b.i, ie)
                        }
                    }
                })
            }

            function g(a) {
                return Zd[a] || ie.fullScreen
            }

            function i(a) {
                var b = "keydown." + ib,
                    c = ib + je,
                    d = "keydown." + c,
                    f = "resize." + c + " orientationchange." + c;
                a ? (Fc.on(d, function(a) {
                    var b, c;
                    Cd && 27 === a.keyCode ? (b = !0, md(Cd, !0, !0)) : (ie.fullScreen || e.keyboard && !ie.index) && (27 === a.keyCode ? (b = !0, ie.cancelFullScreen()) : a.shiftKey && 32 === a.keyCode && g("space") || 37 === a.keyCode && g("left") || 38 === a.keyCode && g("up") ? c = "<" : 32 === a.keyCode && g("space") || 39 === a.keyCode && g("right") || 40 === a.keyCode && g("down") ? c = ">" : 36 === a.keyCode && g("home") ? c = "<<" : 35 === a.keyCode && g("end") && (c = ">>")), (b || c) && Y(a), c && ie.show({
                        index: c,
                        slow: a.altKey,
                        user: !0
                    })
                }), ie.index || Fc.off(b).on(b, "textarea, input, select", function(a) {
                    !Dc.hasClass(jb) && a.stopPropagation()
                }), Ec.on(f, ie.resize)) : (Fc.off(d), Ec.off(f))
            }

            function j(b) {
                b !== j.f && (b ? (a.html("").addClass(ib + " " + ke).append(qe).before(oe).before(pe), gb(ie)) : (qe.detach(), oe.detach(), pe.detach(), a.html(ne.urtext).removeClass(ke), hb(ie)), i(b), j.f = b)
            }

            function m() {
                yd = ie.data = yd || P(e.data) || D(a), zd = ie.size = yd.length, !xd.ok && e.shuffle && O(yd), f(), Je = y(Je), zd && j(!0)
            }

            function o() {
                var a = 2 > zd && !e.enableifsingleframe || Cd;
                Me.noMove = a || Sd, Me.noSwipe = a || !e.swipe, !Wd && se.toggleClass(Bb, !e.click && !Me.noMove && !Me.noSwipe), Nc && qe.toggleClass(sb, !Me.noSwipe)
            }

            function t(a) {
                a === !0 && (a = ""), e.autoplay = Math.max(+a || Sc, 1.5 * Vd)
            }

            function u() {
                function a(a, c) {
                    b[a ? "add" : "remove"].push(c)
                }
                ie.options = e = R(e), Sd = "crossfade" === e.transition || "dissolve" === e.transition, Md = e.loop && (zd > 2 || Sd && (!Wd || "slide" !== Wd)), Vd = +e.transitionduration || Qc, Yd = "rtl" === e.direction, Zd = d.extend({}, e.keyboard && dd, e.keyboard);
                var b = {
                    add: [],
                    remove: []
                };
                zd > 1 || e.enableifsingleframe ? (Nd = e.nav, Pd = "top" === e.navposition, b.remove.push(Xb), we.toggle(!!e.arrows)) : (Nd = !1, we.hide()), Rb(), Bd = new zc(d.extend(Ac, e.spinner, Bc, {
                    direction: Yd ? -1 : 1
                })), Gc(), Hc(), e.autoplay && t(e.autoplay), Td = n(e.thumbwidth) || Uc, Ud = n(e.thumbheight) || Uc, Ne.ok = Pe.ok = e.trackpad && !Mc, o(), ed(e, [Le]), Od = "thumbs" === Nd, Od ? (lc(zd, "navThumb"), Ad = Be, he = Zc, J(oe, d.Fotorama.jst.style({
                    w: Td,
                    h: Ud,
                    b: e.thumbborderwidth,
                    m: e.thumbmargin,
                    s: je,
                    q: !Jc
                })), ye.addClass(Lb).removeClass(Kb)) : "dots" === Nd ? (lc(zd, "navDot"), Ad = Ae, he = Yc, ye.addClass(Kb).removeClass(Lb)) : (Nd = !1, ye.removeClass(Lb + " " + Kb)), Nd && (Pd ? xe.insertBefore(re) : xe.insertAfter(re), wc.nav = !1, wc(Ad, ze, "nav")), Qd = e.allowfullscreen, Qd ? (De.prependTo(re), Rd = Kc && "native" === Qd) : (De.detach(), Rd = !1), a(Sd, ob), a(!Sd, pb), a(!e.captions, vb), a(Yd, tb), a("always" !== e.arrows, wb), Xd = e.shadows && !Mc, a(!Xd, rb), qe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")), Ke = d.extend({}, e)
            }

            function x(a) {
                return 0 > a ? (zd + a % zd) % zd : a >= zd ? a % zd : a
            }

            function y(a) {
                return h(a, 0, zd - 1)
            }

            function z(a) {
                return Md ? x(a) : y(a)
            }

            function E(a) {
                return a > 0 || Md ? a - 1 : !1
            }

            function U(a) {
                return zd - 1 > a || Md ? a + 1 : !1
            }

            function $() {
                Me.min = Md ? -1 / 0 : -r(zd - 1, Le.w, e.margin, Fd), Me.max = Md ? 1 / 0 : -r(0, Le.w, e.margin, Fd), Me.snap = Le.w + e.margin
            }

            function bb() {
                Oe.min = Math.min(0, Le.nw - ze.width()), Oe.max = 0, ze.toggleClass(Bb, !(Oe.noMove = Oe.min === Oe.max))
            }

            function cb(a, b, c) {
                if ("number" == typeof a) {
                    a = new Array(a);
                    var e = !0
                }
                return d.each(a, function(a, d) {
                    if (e && (d = a), "number" == typeof d) {
                        var f = yd[x(d)];
                        if (f) {
                            var g = "$" + b + "Frame",
                                h = f[g];
                            c.call(this, a, d, f, h, g, h && h.data())
                        }
                    }
                })
            }

            function fb(a, b, c, d) {
                (!$d || "*" === $d && d === Ld) && (a = q(e.width) || q(a) || Vc, b = q(e.height) || q(b) || Wc, ie.resize({
                    width: a,
                    ratio: e.ratio || c || a / b
                }, 0, d !== Ld && "*"))
            }

            function Pb(a, b, c, f, g, h) {
                cb(a, b, function(a, i, j, k, l, m) {
                    function n(a) {
                        var b = x(i);
                        fd(a, {
                            index: b,
                            src: w,
                            frame: yd[b]
                        })
                    }

                    function o() {
                        t.remove(), d.Fotorama.cache[w] = "error", j.html && "stage" === b || !y || y === w ? (!w || j.html || r ? "stage" === b && (k.trigger("f:load").removeClass(ac + " " + _b).addClass(bc), n("load"), fb()) : (k.trigger("f:error").removeClass(ac).addClass(_b), n("error")), m.state = "error", !(zd > 1 && yd[i] === j) || j.html || j.deleted || j.video || r || (j.deleted = !0, ie.splice(i, 1))) : (j[v] = w = y, Pb([i], b, c, f, g, !0))
                    }

                    function p() {
                        d.Fotorama.measures[w] = u.measures = d.Fotorama.measures[w] || {
                            width: s.width,
                            height: s.height,
                            ratio: s.width / s.height
                        }, fb(u.measures.width, u.measures.height, u.measures.ratio, i), t.off("load error").addClass(fc + (r ? " " + gc : "")).prependTo(k), I(t, (d.isFunction(c) ? c() : c) || Le, f || j.fit || e.fit, g || j.position || e.position), d.Fotorama.cache[w] = m.state = "loaded", setTimeout(function() {
                            k.trigger("f:load").removeClass(ac + " " + _b).addClass(bc + " " + (r ? cc : dc)), "stage" === b ? n("load") : (j.thumbratio === $c || !j.thumbratio && e.thumbratio === $c) && (j.thumbratio = u.measures.ratio, vd())
                        }, 0)
                    }

                    function q() {
                        var a = 10;
                        G(function() {
                            return !fe || !a-- && !Mc
                        }, function() {
                            p()
                        })
                    }
                    if (k) {
                        var r = ie.fullScreen && j.full && j.full !== j.img && !m.$full && "stage" === b;
                        if (!m.$img || h || r) {
                            var s = new Image,
                                t = d(s),
                                u = t.data();
                            m[r ? "$full" : "$img"] = t;
                            var v = "stage" === b ? r ? "full" : "img" : "thumb",
                                w = j[v],
                                y = r ? null : j["stage" === b ? "thumb" : "img"];
                            if ("navThumb" === b && (k = m.$wrap), !w) return void o();
                            d.Fotorama.cache[w] ? ! function z() {
                                "error" === d.Fotorama.cache[w] ? o() : "loaded" === d.Fotorama.cache[w] ? setTimeout(q, 0) : setTimeout(z, 100)
                            }() : (d.Fotorama.cache[w] = "*", t.on("load", q).on("error", o)), m.state = "", s.src = w
                        }
                    }
                })
            }

            function Qb(a) {
                Ie.append(Bd.spin().el).appendTo(a)
            }

            function Rb() {
                Ie.detach(), Bd && Bd.stop()
            }

            function Sb() {
                var a = Dd[Xc];
                a && !a.data().state && (Qb(a), a.on("f:load f:error", function() {
                    a.off("f:load f:error"), Rb()
                }))
            }

            function ec(a) {
                W(a, sd), X(a, function() {
                    setTimeout(function() {
                        Q(ye)
                    }, 0), Rc({
                        time: Vd,
                        guessIndex: d(this).data().eq,
                        minMax: Oe
                    })
                })
            }

            function lc(a, b) {
                cb(a, b, function(a, c, e, f, g, h) {
                    if (!f) {
                        f = e[g] = qe[g].clone(), h = f.data(), h.data = e;
                        var i = f[0];
                        "stage" === b ? (e.html && d('<div class="' + kc + '"></div>').append(e._html ? d(e.html).removeAttr("id").html(e._html) : e.html).appendTo(f), e.caption && d(N(oc, N(pc, e.caption))).appendTo(f), e.video && f.addClass(zb).append(Fe.clone()), X(i, function() {
                            setTimeout(function() {
                                Q(re)
                            }, 0), pd({
                                index: h.eq,
                                user: !0
                            })
                        }), te = te.add(f)) : "navDot" === b ? (ec(i), Ae = Ae.add(f)) : "navThumb" === b && (ec(i), h.$wrap = f.children(":first"), Be = Be.add(f), e.video && h.$wrap.append(Fe.clone()))
                    }
                })
            }

            function sc(a, b, c, d) {
                return a && a.length && I(a, b, c, d)
            }

            function tc(a) {
                cb(a, "stage", function(a, b, c, f, g, h) {
                    if (f) {
                        var i = x(b),
                            j = c.fit || e.fit,
                            k = c.position || e.position;
                        h.eq = i, Re[Xc][i] = f.css(d.extend({
                            left: Sd ? 0 : r(b, Le.w, e.margin, Fd)
                        }, Sd && l(0))), F(f[0]) && (f.appendTo(se), md(c.$video)), sc(h.$img, Le, j, k), sc(h.$full, Le, j, k)
                    }
                })
            }

            function uc(a, b) {
                if ("thumbs" === Nd && !isNaN(a)) {
                    var c = -a,
                        f = -a + Le.nw;
                    Be.each(function() {
                        var a = d(this),
                            g = a.data(),
                            h = g.eq,
                            i = function() {
                                return {
                                    h: Ud,
                                    w: g.w
                                }
                            },
                            j = i(),
                            k = yd[h] || {},
                            l = k.thumbfit || e.thumbfit,
                            m = k.thumbposition || e.thumbposition;
                        j.w = g.w, g.l + g.w < c || g.l > f || sc(g.$img, j, l, m) || b && Pb([h], "navThumb", i, l, m)
                    })
                }
            }

            function wc(a, b, c) {
                if (!wc[c]) {
                    var f = "nav" === c && Od,
                        g = 0;
                    b.append(a.filter(function() {
                        for (var a, b = d(this), c = b.data(), e = 0, f = yd.length; f > e; e++)
                            if (c.data === yd[e]) {
                                a = !0, c.eq = e;
                                break
                            }
                        return a || b.remove() && !1
                    }).sort(function(a, b) {
                        return d(a).data().eq - d(b).data().eq
                    }).each(function() {
                        if (f) {
                            var a = d(this),
                                b = a.data(),
                                c = Math.round(Ud * b.data.thumbratio) || Td;
                            b.l = g, b.w = c, a.css({
                                width: c
                            }), g += c + e.thumbmargin
                        }
                    })), wc[c] = !0
                }
            }

            function xc(a) {
                return a - Se > Le.w / 3
            }

            function yc(a) {
                return !(Md || Je + a && Je - zd + a || Cd)
            }

            function Gc() {
                var a = yc(0),
                    b = yc(1);
                ue.toggleClass(Eb, a).attr(V(a)), ve.toggleClass(Eb, b).attr(V(b))
            }

            function Hc() {
                Ne.ok && (Ne.prevent = {
                    "<": yc(0),
                    ">": yc(1)
                })
            }

            function Lc(a) {
                var b, c, d = a.data();
                return Od ? (b = d.l, c = d.w) : (b = a.position().left, c = a.width()), {
                    c: b + c / 2,
                    min: -b + 10 * e.thumbmargin,
                    max: -b + Le.w - c - 10 * e.thumbmargin
                }
            }

            function Oc(a) {
                var b = Dd[he].data();
                _(Ce, {
                    time: 1.2 * a,
                    pos: b.l,
                    width: b.w - 2 * e.thumbborderwidth
                })
            }

            function Rc(a) {
                var b = yd[a.guessIndex][he];
                if (b) {
                    var c = Oe.min !== Oe.max,
                        d = a.minMax || c && Lc(Dd[he]),
                        e = c && (a.keep && Rc.l ? Rc.l : h((a.coo || Le.nw / 2) - Lc(b).c, d.min, d.max)),
                        f = c && h(e, Oe.min, Oe.max),
                        g = 1.1 * a.time;
                    _(ze, {
                        time: g,
                        pos: f || 0,
                        onEnd: function() {
                            uc(f, !0)
                        }
                    }), ld(ye, K(f, Oe.min, Oe.max)), Rc.l = e
                }
            }

            function Tc() {
                _c(he), Qe[he].push(Dd[he].addClass(Wb))
            }

            function _c(a) {
                for (var b = Qe[a]; b.length;) b.shift().removeClass(Wb)
            }

            function bd(a) {
                var b = Re[a];
                d.each(Ed, function(a, c) {
                    delete b[x(c)]
                }), d.each(b, function(a, c) {
                    delete b[a], c.detach()
                })
            }

            function cd(a) {
                Fd = Gd = Je;
                var b = Dd[Xc];
                b && (_c(Xc), Qe[Xc].push(b.addClass(Wb)), a || ie.show.onEnd(!0), v(se, 0, !0), bd(Xc), tc(Ed), $(), bb())
            }

            function ed(a, b) {
                a && d.each(b, function(b, c) {
                    c && d.extend(c, {
                        width: a.width || c.width,
                        height: a.height,
                        minwidth: a.minwidth,
                        maxwidth: a.maxwidth,
                        minheight: a.minheight,
                        maxheight: a.maxheight,
                        ratio: S(a.ratio)
                    })
                })
            }

            function fd(b, c) {
                a.trigger(ib + ":" + b, [ie, c])
            }

            function gd() {
                clearTimeout(hd.t), fe = 1, e.stopautoplayontouch ? ie.stopAutoplay() : ce = !0
            }

            function hd() {
                fe && (e.stopautoplayontouch || (id(), jd()), hd.t = setTimeout(function() {
                    fe = 0
                }, Qc + Pc))
            }

            function id() {
                ce = !(!Cd && !de)
            }

            function jd() {
                if (clearTimeout(jd.t), G.stop(jd.w), !e.autoplay || ce) return void(ie.autoplay && (ie.autoplay = !1, fd("stopautoplay")));
                ie.autoplay || (ie.autoplay = !0, fd("startautoplay"));
                var a = Je,
                    b = Dd[Xc].data();
                jd.w = G(function() {
                    return b.state || a !== Je
                }, function() {
                    jd.t = setTimeout(function() {
                        if (!ce && a === Je) {
                            var b = Kd,
                                c = yd[b][Xc].data();
                            jd.w = G(function() {
                                return c.state || b !== Kd
                            }, function() {
                                ce || b !== Kd || ie.show(Md ? Z(!Yd) : Kd)
                            })
                        }
                    }, e.autoplay)
                })
            }

            function kd() {
                ie.fullScreen && (ie.fullScreen = !1, Kc && vc.cancel(le), Dc.removeClass(jb), Cc.removeClass(jb), a.removeClass(Zb).insertAfter(pe), Le = d.extend({}, ee), md(Cd, !0, !0), rd("x", !1), ie.resize(), Pb(Ed, "stage"), Q(Ec, ae, _d), fd("fullscreenexit"))
            }

            function ld(a, b) {
                Xd && (a.removeClass(Ub + " " + Vb), b && !Cd && a.addClass(b.replace(/^|\s/g, " " + Tb + "--")))
            }

            function md(a, b, c) {
                b && (qe.removeClass(nb), Cd = !1, o()), a && a !== Cd && (a.remove(), fd("unloadvideo")), c && (id(), jd())
            }

            function nd(a) {
                qe.toggleClass(qb, a)
            }

            function od(a) {
                if (!Me.flow) {
                    var b = a ? a.pageX : od.x,
                        c = b && !yc(xc(b)) && e.click;
                    od.p !== c && re.toggleClass(Cb, c) && (od.p = c, od.x = b)
                }
            }

            function pd(a) {
                clearTimeout(pd.t), e.clicktransition && e.clicktransition !== e.transition ? setTimeout(function() {
                    var b = e.transition;
                    ie.setOptions({
                        transition: e.clicktransition
                    }), Wd = b, pd.t = setTimeout(function() {
                        ie.show(a)
                    }, 10)
                }, 0) : ie.show(a)
            }

            function qd(a, b) {
                var c = a.target,
                    f = d(c);
                f.hasClass(mc) ? ie.playVideo() : c === Ee ? ie.toggleFullScreen() : Cd ? c === He && md(Cd, !0, !0) : b ? nd() : e.click && pd({
                    index: a.shiftKey || Z(xc(a._x)),
                    slow: a.altKey,
                    user: !0
                })
            }

            function rd(a, b) {
                Me[a] = Oe[a] = b
            }

            function sd(a) {
                var b = d(this).data().eq;
                pd({
                    index: b,
                    slow: a.altKey,
                    user: !0,
                    coo: a._x - ye.offset().left
                })
            }

            function td(a) {
                pd({
                    index: we.index(this) ? ">" : "<",
                    slow: a.altKey,
                    user: !0
                })
            }

            function ud(a) {
                X(a, function() {
                    setTimeout(function() {
                        Q(re)
                    }, 0), nd(!1)
                })
            }

            function vd() {
                if (m(), u(), !vd.i) {
                    vd.i = !0;
                    var a = e.startindex;
                    (a || e.hash && c.hash) && (Ld = L(a || c.hash.replace(/^#/, ""), yd, 0 === ie.index || a, a)), Je = Fd = Gd = Hd = Ld = z(Ld) || 0
                }
                if (zd) {
                    if (wd()) return;
                    Cd && md(Cd, !0), Ed = [], bd(Xc), vd.ok = !0, ie.show({
                        index: Je,
                        time: 0
                    }), ie.resize()
                } else ie.destroy()
            }

            function wd() {
                return !wd.f === Yd ? (wd.f = Yd, Je = zd - 1 - Je, ie.reverse(), !0) : void 0
            }

            function xd() {
                xd.ok || (xd.ok = !0, fd("ready"))
            }
            Cc = d("html"), Dc = d("body");
            var yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, _d, ae, be, ce, de, ee, fe, ge, he, ie = this,
                je = d.now(),
                ke = ib + je,
                le = a[0],
                me = 1,
                ne = a.data(),
                oe = d("<style></style>"),
                pe = d(N(Yb)),
                qe = d(N(kb)),
                re = d(N(xb)).appendTo(qe),
                se = (re[0], d(N(Ab)).appendTo(re)),
                te = d(),
                ue = d(N(Db + " " + Fb + rc)),
                ve = d(N(Db + " " + Gb + rc)),
                we = ue.add(ve).appendTo(re),
                xe = d(N(Ib)),
                ye = d(N(Hb)).appendTo(xe),
                ze = d(N(Jb)).appendTo(ye),
                Ae = d(),
                Be = d(),
                Ce = (se.data(), ze.data(), d(N(jc)).appendTo(ze)),
                De = d(N($b + rc)),
                Ee = De[0],
                Fe = d(N(mc)),
                Ge = d(N(nc)).appendTo(re),
                He = Ge[0],
                Ie = d(N(qc)),
                Je = !1,
                Ke = {},
                Le = {},
                Me = {},
                Ne = {},
                Oe = {},
                Pe = {},
                Qe = {},
                Re = {},
                Se = 0,
                Te = [];
            qe[Xc] = d(N(yb)), qe[Zc] = d(N(Mb + " " + Ob + rc, N(ic))), qe[Yc] = d(N(Mb + " " + Nb + rc, N(hc))), Qe[Xc] = [], Qe[Zc] = [], Qe[Yc] = [], Re[Xc] = {}, qe.addClass(Ic ? mb : lb).toggleClass(qb, !e.controlsonstart), ne.fotorama = this, ie.startAutoplay = function(a) {
                return ie.autoplay ? this : (ce = de = !1, t(a || e.autoplay), jd(), this)
            }, ie.stopAutoplay = function() {
                return ie.autoplay && (ce = de = !0, jd()), this
            }, ie.show = function(a) {
                var b;
                "object" != typeof a ? (b = a, a = {}) : b = a.index, b = ">" === b ? Gd + 1 : "<" === b ? Gd - 1 : "<<" === b ? 0 : ">>" === b ? zd - 1 : b, b = isNaN(b) ? L(b, yd, !0) : b, b = "undefined" == typeof b ? Je || 0 : b, ie.activeIndex = Je = z(b), Id = E(Je), Jd = U(Je), Kd = x(Je + (Yd ? -1 : 1)), Ed = [Je, Id, Jd], Gd = Md ? b : Je;
                var c = Math.abs(Hd - Gd),
                    d = w(a.time, function() {
                        return Math.min(Vd * (1 + (c - 1) / 12), 2 * Vd)
                    }),
                    f = a.overPos;
                a.slow && (d *= 10);
                var g = Dd;
                ie.activeFrame = Dd = yd[Je];
                var i = g === Dd && !a.user;
                md(Cd, Dd.i !== yd[x(Fd)].i), lc(Ed, "stage"), tc(Mc ? [Gd] : [Gd, E(Gd), U(Gd)]), rd("go", !0), i || fd("show", {
                    user: a.user,
                    time: d
                }), ce = !0;
                var j = ie.show.onEnd = function(b) {
                    if (!j.ok) {
                        if (j.ok = !0, b || cd(!0), i || fd("showend", {
                                user: a.user
                            }), !b && Wd && Wd !== e.transition) return ie.setOptions({
                            transition: Wd
                        }), void(Wd = !1);
                        Sb(), Pb(Ed, "stage"), rd("go", !1), Hc(), od(), id(), jd()
                    }
                };
                if (Sd) {
                    var k = Dd[Xc],
                        l = Je !== Hd ? yd[Hd][Xc] : null;
                    ab(k, l, te, {
                        time: d,
                        method: e.transition,
                        onEnd: j
                    }, Te)
                } else _(se, {
                    pos: -r(Gd, Le.w, e.margin, Fd),
                    overPos: f,
                    time: d,
                    onEnd: j
                });
                if (Gc(), Nd) {
                    Tc();
                    var m = y(Je + h(Gd - Hd, -1, 1));
                    Rc({
                        time: d,
                        coo: m !== Je && a.coo,
                        guessIndex: "undefined" != typeof a.coo ? m : Je,
                        keep: i
                    }), Od && Oc(d)
                }
                return be = "undefined" != typeof Hd && Hd !== Je, Hd = Je, e.hash && be && !ie.eq && H(Dd.id || Je + 1), this
            }, ie.requestFullScreen = function() {
                return Qd && !ie.fullScreen && (_d = Ec.scrollTop(), ae = Ec.scrollLeft(), Q(Ec), rd("x", !0), ee = d.extend({}, Le), a.addClass(Zb).appendTo(Dc.addClass(jb)), Cc.addClass(jb), md(Cd, !0, !0), ie.fullScreen = !0, Rd && vc.request(le), ie.resize(), Pb(Ed, "stage"), Sb(), fd("fullscreenenter")), this
            }, ie.cancelFullScreen = function() {
                return Rd && vc.is() ? vc.cancel(b) : kd(), this
            }, ie.toggleFullScreen = function() {
                return ie[(ie.fullScreen ? "cancel" : "request") + "FullScreen"]()
            }, T(b, vc.event, function() {
                !yd || vc.is() || Cd || kd()
            }), ie.resize = function(a) {
                if (!yd) return this;
                var b = arguments[1] || 0,
                    c = arguments[2];
                ed(ie.fullScreen ? {
                    width: "100%",
                    maxwidth: null,
                    minwidth: null,
                    height: "100%",
                    maxheight: null,
                    minheight: null
                } : R(a), [Le, c || ie.fullScreen || e]);
                var d = Le.width,
                    f = Le.height,
                    g = Le.ratio,
                    i = Ec.height() - (Nd ? ye.height() : 0);
                return q(d) && (qe.addClass(ub).css({
                    width: d,
                    minWidth: Le.minwidth || 0,
                    maxWidth: Le.maxwidth || ad
                }), d = Le.W = Le.w = qe.width(), Le.nw = Nd && p(e.navwidth, d) || d, e.glimpse && (Le.w -= Math.round(2 * (p(e.glimpse, d) || 0))), se.css({
                    width: Le.w,
                    marginLeft: (Le.W - Le.w) / 2
                }), f = p(f, i), f = f || g && d / g, f && (d = Math.round(d), f = Le.h = Math.round(h(f, p(Le.minheight, i), p(Le.maxheight, i))), re.stop().animate({
                    width: d,
                    height: f
                }, b, function() {
                    qe.removeClass(ub)
                }), cd(), Nd && (ye.stop().animate({
                    width: Le.nw
                }, b), Rc({
                    guessIndex: Je,
                    time: b,
                    keep: !0
                }), Od && wc.nav && Oc(b)), $d = c || !0, xd())), Se = re.offset().left, this
            }, ie.setOptions = function(a) {
                return d.extend(e, a), vd(), this
            }, ie.shuffle = function() {
                return yd && O(yd) && vd(), this
            }, ie.destroy = function() {
                return ie.cancelFullScreen(), ie.stopAutoplay(), yd = ie.data = null, j(), Ed = [], bd(Xc), vd.ok = !1, this
            }, ie.playVideo = function() {
                var a = Dd,
                    b = a.video,
                    c = Je;
                return "object" == typeof b && a.videoReady && (Rd && ie.fullScreen && ie.cancelFullScreen(), G(function() {
                    return !vc.is() || c !== Je
                }, function() {
                    c === Je && (a.$video = a.$video || d(d.Fotorama.jst.video(b)), a.$video.appendTo(a[Xc]), qe.addClass(nb), Cd = a.$video, o(), we.blur(), De.blur(), fd("loadvideo"))
                })), this
            }, ie.stopVideo = function() {
                return md(Cd, !0, !0), this
            }, re.on("mousemove", od), Me = db(se, {
                onStart: gd,
                onMove: function(a, b) {
                    ld(re, b.edge)
                },
                onTouchEnd: hd,
                onEnd: function(a) {
                    ld(re);
                    var b = (Nc && !ge || a.touch) && e.arrows && "always" !== e.arrows;
                    if (a.moved || b && a.pos !== a.newPos && !a.control) {
                        var c = s(a.newPos, Le.w, e.margin, Fd);
                        ie.show({
                            index: c,
                            time: Sd ? Vd : a.time,
                            overPos: a.overPos,
                            user: !0
                        })
                    } else a.aborted || a.control || qd(a.startEvent, b)
                },
                timeLow: 1,
                timeHigh: 1,
                friction: 2,
                select: "." + Xb + ", ." + Xb + " *",
                $wrap: re
            }), Oe = db(ze, {
                onStart: gd,
                onMove: function(a, b) {
                    ld(ye, b.edge)
                },
                onTouchEnd: hd,
                onEnd: function(a) {
                    function b() {
                        Rc.l = a.newPos, id(), jd(), uc(a.newPos, !0)
                    }
                    if (a.moved) a.pos !== a.newPos ? (ce = !0, _(ze, {
                        time: a.time,
                        pos: a.newPos,
                        overPos: a.overPos,
                        onEnd: b
                    }), uc(a.newPos), Xd && ld(ye, K(a.newPos, Oe.min, Oe.max))) : b();
                    else {
                        var c = a.$target.closest("." + Mb, ze)[0];
                        c && sd.call(c, a.startEvent)
                    }
                },
                timeLow: .5,
                timeHigh: 2,
                friction: 5,
                $wrap: ye
            }), Ne = eb(re, {
                shift: !0,
                onEnd: function(a, b) {
                    gd(), hd(), ie.show({
                        index: b,
                        slow: a.altKey
                    })
                }
            }), Pe = eb(ye, {
                onEnd: function(a, b) {
                    gd(), hd();
                    var c = v(ze) + .25 * b;
                    ze.css(k(h(c, Oe.min, Oe.max))), Xd && ld(ye, K(c, Oe.min, Oe.max)), Pe.prevent = {
                        "<": c >= Oe.max,
                        ">": c <= Oe.min
                    }, clearTimeout(Pe.t), Pe.t = setTimeout(function() {
                        Rc.l = c, uc(c, !0)
                    }, Pc), uc(c)
                }
            }), qe.hover(function() {
                setTimeout(function() {
                    fe || nd(!(ge = !0))
                }, 0)
            }, function() {
                ge && nd(!(ge = !1))
            }), M(we, function(a) {
                Y(a), td.call(this, a)
            }, {
                onStart: function() {
                    gd(), Me.control = !0
                },
                onTouchEnd: hd
            }), we.each(function() {
                W(this, function(a) {
                    td.call(this, a)
                }), ud(this)
            }), W(Ee, ie.toggleFullScreen), ud(Ee), d.each("load push pop shift unshift reverse sort splice".split(" "), function(a, b) {
                ie[b] = function() {
                    return yd = yd || [], "load" !== b ? Array.prototype[b].apply(yd, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (yd = P(arguments[0])), vd(), ie
                }
            }), vd()
        }, d.fn.fotorama = function(b) {
            return this.each(function() {
                var c = this,
                    e = d(this),
                    f = e.data(),
                    g = f.fotorama;
                g ? g.setOptions(b, !0) : G(function() {
                    return !E(c)
                }, function() {
                    f.urtext = e.html(), new d.Fotorama(e, d.extend({}, cd, a.fotoramaDefaults, b, f))
                })
            })
        }, d.Fotorama.instances = [], d.Fotorama.cache = {}, d.Fotorama.measures = {}, d = d || {}, d.Fotorama = d.Fotorama || {}, d.Fotorama.jst = d.Fotorama.jst || {}, d.Fotorama.jst.style = function(a) {
            {
                var b, c = "";
                tc.escape
            }
            return c += ".fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (b = a.m) ? "" : b) + "px;\nheight:" + (null == (b = a.h) ? "" : b) + "px}\n.fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__thumb-border{\nheight:" + (null == (b = a.h - a.b * (a.q ? 0 : 2)) ? "" : b) + "px;\nborder-width:" + (null == (b = a.b) ? "" : b) + "px;\nmargin-top:" + (null == (b = a.m) ? "" : b) + "px}"
        }, d.Fotorama.jst.video = function(a) {
            function b() {
                c += d.call(arguments, "")
            }
            var c = "",
                d = (tc.escape, Array.prototype.join);
            return c += '<div class="fotorama__video"><iframe src="', b(("youtube" == a.type ? a.p + "youtube.com/embed/" + a.id + "?autoplay=1" : "vimeo" == a.type ? a.p + "player.vimeo.com/video/" + a.id + "?autoplay=1&badge=0" : a.id) + (a.s && "custom" != a.type ? "&" + a.s : "")), c += '" frameborder="0" allowfullscreen></iframe></div>\n'
        }, d(function() {
            d("." + ib + ':not([data-auto="false"])').fotorama()
        })
    }(window, document, location, "undefined" != typeof jQuery && jQuery);


/*! device.js 0.2.7 */
(function() {
    var a, b, c, d, e, f, g, h, i, j;
    b = window.device, a = {}, window.device = a, d = window.document.documentElement, j = window.navigator.userAgent.toLowerCase(), a.ios = function() {
        return a.iphone() || a.ipod() || a.ipad()
    }, a.iphone = function() {
        return !a.windows() && e("iphone")
    }, a.ipod = function() {
        return e("ipod")
    }, a.ipad = function() {
        return e("ipad")
    }, a.android = function() {
        return !a.windows() && e("android")
    }, a.androidPhone = function() {
        return a.android() && e("mobile")
    }, a.androidTablet = function() {
        return a.android() && !e("mobile")
    }, a.blackberry = function() {
        return e("blackberry") || e("bb10") || e("rim")
    }, a.blackberryPhone = function() {
        return a.blackberry() && !e("tablet")
    }, a.blackberryTablet = function() {
        return a.blackberry() && e("tablet")
    }, a.windows = function() {
        return e("windows")
    }, a.windowsPhone = function() {
        return a.windows() && e("phone")
    }, a.windowsTablet = function() {
        return a.windows() && e("touch") && !a.windowsPhone()
    }, a.fxos = function() {
        return (e("(mobile;") || e("(tablet;")) && e("; rv:")
    }, a.fxosPhone = function() {
        return a.fxos() && e("mobile")
    }, a.fxosTablet = function() {
        return a.fxos() && e("tablet")
    }, a.meego = function() {
        return e("meego")
    }, a.cordova = function() {
        return window.cordova && "file:" === location.protocol
    }, a.nodeWebkit = function() {
        return "object" == typeof window.process
    }, a.mobile = function() {
        return a.androidPhone() || a.iphone() || a.ipod() || a.windowsPhone() || a.blackberryPhone() || a.fxosPhone() || a.meego()
    }, a.tablet = function() {
        return a.ipad() || a.androidTablet() || a.blackberryTablet() || a.windowsTablet() || a.fxosTablet()
    }, a.desktop = function() {
        return !a.tablet() && !a.mobile()
    }, a.television = function() {
        var a;
        for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], a = 0; a < television.length;) {
            if (e(television[a])) return !0;
            a++
        }
        return !1
    }, a.portrait = function() {
        return window.innerHeight / window.innerWidth > 1
    }, a.landscape = function() {
        return window.innerHeight / window.innerWidth < 1
    }, a.noConflict = function() {
        return window.device = b, this
    }, e = function(a) {
        return -1 !== j.indexOf(a)
    }, g = function(a) {
        var b;
        return b = new RegExp(a, "i"), d.className.match(b)
    }, c = function(a) {
        var b = null;
        g(a) || (b = d.className.replace(/^\s+|\s+$/g, ""), d.className = b + " " + a)
    }, i = function(a) {
        g(a) && (d.className = d.className.replace(" " + a, ""))
    }, a.ios() ? a.ipad() ? c("ios ipad tablet") : a.iphone() ? c("ios iphone mobile") : a.ipod() && c("ios ipod mobile") : a.android() ? c(a.androidTablet() ? "android tablet" : "android mobile") : a.blackberry() ? c(a.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : a.windows() ? c(a.windowsTablet() ? "windows tablet" : a.windowsPhone() ? "windows mobile" : "desktop") : a.fxos() ? c(a.fxosTablet() ? "fxos tablet" : "fxos mobile") : a.meego() ? c("meego mobile") : a.nodeWebkit() ? c("node-webkit") : a.television() ? c("television") : a.desktop() && c("desktop"), a.cordova() && c("cordova"), f = function() {
        a.landscape() ? (i("portrait"), c("landscape")) : (i("landscape"), c("portrait"))
    }, h = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(h, f, !1) : window.attachEvent ? window.attachEvent(h, f) : window[h] = f, f(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return a
    }) : "undefined" != typeof module && module.exports ? module.exports = a : window.device = a
}).call(this);


/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.7", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, c.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? {
                top: 0,
                left: 0
            } : f ? null : b.offset(),
            h = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            i = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);