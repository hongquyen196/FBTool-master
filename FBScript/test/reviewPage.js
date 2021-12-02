//Review Page
//
// Work on URL: 
//     - https://www.facebook.com/sinhvienHueIT/reviews
post_fbid\\ ":(\d+)/
    //Get c_user
var C_USER = /(?<=c_user=)(\d+)/.exec(document.cookie)[0];
console.log("c_user", C_USER);
//Get fb_dtsg
var FB_DTSG = /(?<=fb_dtsg","value":")(.*?)(?=\")/gm.exec(document.body.innerHTML)[0];
console.log("fb_dtsg", FB_DTSG);
//Get page_id
var PAGE_ID = /(?<=pageID":")(.*?)(?=\")/gm.exec(document.body.innerHTML)[0];
console.log("page_id", PAGE_ID);

var TEXT = "OK Cần tuyển lập trình viên PHP, làm việc trên nền tảng Wordpress để thiết kế các sản phẩm website cho các đối tác tại nhật. Không cần kinh nghiệm 😃"

var variables = {
        "input": {
            "composer_entry_point": "inline_composer",
            "composer_source_surface": "page_recommendation_tab",
            "idempotence_token": "b7837757-0079-4698-acf0-ffab7a7bb9fc_FEED",
            "source": "WWW",
            "audience": {
                "privacy": {
                    "allow": [],
                    "base_state": "EVERYONE",
                    "deny": [],
                    "tag_expansion_state": "UNSPECIFIED"
                }
            },
            "message": {
                "ranges": [],
                "text": TEXT
            },
            "with_tags_ids": [],
            "text_format_preset_id": "0",
            "page_recommendation": {
                "page_id": PAGE_ID,
                "rec_type": "POSITIVE"
            },
            "logging": {
                "composer_session_id": "b7837757-0079-4698-acf0-ffab7a7bb9fc"
            },
            "tracking": [
                null
            ],
            "actor_id": C_USER,
            "client_mutation_id": "3"
        },
        "displayCommentsFeedbackContext": null,
        "displayCommentsContextEnableComment": null,
        "displayCommentsContextIsAdPreview": null,
        "displayCommentsContextIsAggregatedShare": null,
        "displayCommentsContextIsStorySet": null,
        "feedLocation": "PAGE",
        "feedbackSource": 0,
        "focusCommentID": null,
        "gridMediaWidth": null,
        "gridImageHeight": 420,
        "gridImageWidth": 420,
        "scale": 2,
        "privacySelectorRenderLocation": "COMET_STREAM",
        "renderLocation": "permalink",
        "useDefaultActor": false,
        "inviteShortLinkKey": null,
        "isFeed": false,
        "isFundraiser": false,
        "isFunFactPost": false,
        "isGroup": false,
        "isTimeline": false,
        "isSocialLearning": false,
        "isPageNewsFeed": false,
        "isProfileReviews": false,
        "isWorkSharedDraft": false,
        "UFI2CommentsProvider_commentsKey": "ProfileCometReviewsTabRoute",
        "useCometPhotoViewerPlaceholderFrag": true,
        "hashtag": null,
        "canUserManageOffers": false
    }
    // curl 'https://www.facebook.com/api/graphql/' \
    //   -H 'authority: www.facebook.com' \
    //   -H 'x-fb-lsd: RrCwSmM_3T-qsKA55xvF6-' \
    //   -H 'content-type: application/x-www-form-urlencoded' \
    //   -H 'sec-ch-ua-mobile: ?0' \
    //   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36' \
    //   -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"' \
    //   -H 'sec-ch-ua-platform: "macOS"' \
    //   -H 'x-fb-friendly-name: ComposerStoryCreateMutation' \
    //   -H 'accept: */*' \
    //   -H 'origin: https://www.facebook.com' \
    //   -H 'sec-fetch-site: same-origin' \
    //   -H 'sec-fetch-mode: cors' \
    //   -H 'sec-fetch-dest: empty' \
    //   -H 'referer: https://www.facebook.com/sinhvienHueIT/reviews/?ref=page_internal&mt_nav=0' \
    //   -H 'accept-language: vi,en;q=0.9,mt;q=0.8,pl;q=0.7,fr;q=0.6,und;q=0.5' \
    //   -H 'cookie: sb=gXrgYMiNZ66rsTJvkWT8jjRk; datr=gnrgYJSwGVaPC-XlvWClyfTP; m_pixel_ratio=2; dpr=2; usida=eyJ2ZXIiOjEsImlkIjoiQXIzNHV6YjQ2enh4YyIsInRpbWUiOjE2Mzc4NTIzNzV9; locale=vi_VN; c_user=100005682072873; spin=r.1004771643_b.trunk_t.1637852460_s.1_v.2_; xs=4%3AsAkw5Rf6pFLd1w%3A2%3A1637852454%3A-1%3A7358%3A%3AAcUvtKZ0stLWLG-gxv56XKDcKU3cgu7oVV3JkBG7Hw; fr=0R5TmvdGXzkksUBwZ.AWUM__jlEc13lgV78KFsvG_cvvk.Bhn6uO.2m.AAA.0.0.Bhn6uO.AWWQOtLytT4; x-referer=eyJyIjoiL3Npbmh2aWVuSHVlSVQvcmV2aWV3cy8%2FcmVmPXBhZ2VfaW50ZXJuYWwmbXRfbmF2PTAiLCJoIjoiL3Npbmh2aWVuSHVlSVQvcmV2aWV3cy8%2FcmVmPXBhZ2VfaW50ZXJuYWwmbXRfbmF2PTAiLCJzIjoibSJ9; wd=1665x914' \
    //   --data-raw 'av=100005682072873&__user=100005682072873&__a=1&__dyn=7AzHxqU5a5Q1ryaxG4VuC0BVU98nwgU76byQdwSwAyU8EW0CEboG4E762S1DwUx609vCxS320om78-221Rwwwg8a8465o-cwfG12wOKdwGwQw9m8wsU9kbxS1Fwc61axe3e9xy3O1mzXxG1Pxi4UaEW1-xS6Fobrxu5Elxm3y11xfxmu3W3y1MBx_y88E6a1PwyBwJwSyES0Io88cA&__csr=gT0yiT10zYZPN5Nnbkj8YAQrv8SjTiFh5dnGAykLSRLRlaiiHjAAilqGFfBKFCXWWhARml5QiL_gGnLDD_FbjmhKFpr_Giinz8goGFEhyBUCq8BHGi8BCBAGUCuEngKmHxm8yahoGESdxymmdyrG4EFy8hzA2q4Qcxerxm2yawOG3G-iq7VVpGzVUlDwExaESUpxa2qFrBG7ohwhoux65obE4-iEbVF8uwwzUO5U98G8xC1bgap5-iEdQt2oeU5yEvxKbwXKm58C68b986u5Xwyx67V8bo5mfy8hzo4a0Hof8a9US2e6UeVaxWeCy8px202KWm6876cwOw6uwh835hay82yw2b4dwdC04kE0c6o09pi02i83xwww3882ny925ylBtP02e41RxxPrw9yi7E1r82lQ05OpC09Gwh829xS0dRe09Nw1w3g1TCq8gK1nw1Jy0EUfE&__req=1h&__hs=18956.HYP%3Acomet_pkg.2.1.0.2.&dpr=2&__ccg=GOOD&__rev=1004771643&__s=5dj97a%3Ajaqo4l%3A7zz0n4&__hsi=7034531479489909122-0&__comet_req=1&fb_dtsg=AQEEgLgqYKkvoD0%3A4%3A1637852454&jazoest=21988&lsd=RrCwSmM_3T-qsKA55xvF6-&__spin_r=1004771643&__spin_b=trunk&__spin_t=1637854492&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ComposerStoryCreateMutation&variables=%7B%22input%22%3A%7B%22composer_entry_point%22%3A%22inline_composer%22%2C%22composer_source_surface%22%3A%22page_recommendation_tab%22%2C%22idempotence_token%22%3A%22b7837757-0079-4698-acf0-ffab7a7bb9fc_FEED%22%2C%22source%22%3A%22WWW%22%2C%22audience%22%3A%7B%22privacy%22%3A%7B%22allow%22%3A%5B%5D%2C%22base_state%22%3A%22EVERYONE%22%2C%22deny%22%3A%5B%5D%2C%22tag_expansion_state%22%3A%22UNSPECIFIED%22%7D%7D%2C%22message%22%3A%7B%22ranges%22%3A%5B%5D%2C%22text%22%3A%22OK%20C%E1%BA%A7n%20tuy%E1%BB%83n%20l%E1%BA%ADp%20tr%C3%ACnh%20vi%C3%AAn%20PHP%2C%20l%C3%A0m%20vi%E1%BB%87c%20tr%C3%AAn%20n%E1%BB%81n%20t%E1%BA%A3ng%20Wordpress%20%C4%91%E1%BB%83%20thi%E1%BA%BFt%20k%E1%BA%BF%20c%C3%A1c%20s%E1%BA%A3n%20ph%E1%BA%A9m%20website%20cho%20c%C3%A1c%20%C4%91%E1%BB%91i%20t%C3%A1c%20t%E1%BA%A1i%20nh%E1%BA%ADt.%20Kh%C3%B4ng%20c%E1%BA%A7n%20kinh%20nghi%E1%BB%87m%20%F0%9F%98%83%22%7D%2C%22with_tags_ids%22%3A%5B%5D%2C%22text_format_preset_id%22%3A%220%22%2C%22page_recommendation%22%3A%7B%22page_id%22%3A%221736995843255478%22%2C%22rec_type%22%3A%22POSITIVE%22%7D%2C%22logging%22%3A%7B%22composer_session_id%22%3A%22b7837757-0079-4698-acf0-ffab7a7bb9fc%22%7D%2C%22tracking%22%3A%5Bnull%5D%2C%22actor_id%22%3A%22100005682072873%22%2C%22client_mutation_id%22%3A%223%22%7D%2C%22displayCommentsFeedbackContext%22%3Anull%2C%22displayCommentsContextEnableComment%22%3Anull%2C%22displayCommentsContextIsAdPreview%22%3Anull%2C%22displayCommentsContextIsAggregatedShare%22%3Anull%2C%22displayCommentsContextIsStorySet%22%3Anull%2C%22feedLocation%22%3A%22PAGE%22%2C%22feedbackSource%22%3A0%2C%22focusCommentID%22%3Anull%2C%22gridMediaWidth%22%3Anull%2C%22gridImageHeight%22%3A420%2C%22gridImageWidth%22%3A420%2C%22scale%22%3A2%2C%22privacySelectorRenderLocation%22%3A%22COMET_STREAM%22%2C%22renderLocation%22%3A%22permalink%22%2C%22useDefaultActor%22%3Afalse%2C%22inviteShortLinkKey%22%3Anull%2C%22isFeed%22%3Afalse%2C%22isFundraiser%22%3Afalse%2C%22isFunFactPost%22%3Afalse%2C%22isGroup%22%3Afalse%2C%22isTimeline%22%3Afalse%2C%22isSocialLearning%22%3Afalse%2C%22isPageNewsFeed%22%3Afalse%2C%22isProfileReviews%22%3Afalse%2C%22isWorkSharedDraft%22%3Afalse%2C%22UFI2CommentsProvider_commentsKey%22%3A%22ProfileCometReviewsTabRoute%22%2C%22useCometPhotoViewerPlaceholderFrag%22%3Atrue%2C%22hashtag%22%3Anull%2C%22canUserManageOffers%22%3Afalse%7D&server_timestamps=true&doc_id=4369847706457679&fb_api_analytics_tags=%5B%22qpl_active_flow_ids%3D30605361%22%5D' \
    //   --compressed