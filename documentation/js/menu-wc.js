'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-21974de8bafcb87481cde142b00f0a505f691800723b6fd66c45b97f6e8c30ef71ecc4124a8b79700e9fe947b1d5eb85a6c85a7f4df2c06dc2cce10b94b5bfbf"' : 'data-bs-target="#xs-controllers-links-module-AppModule-21974de8bafcb87481cde142b00f0a505f691800723b6fd66c45b97f6e8c30ef71ecc4124a8b79700e9fe947b1d5eb85a6c85a7f4df2c06dc2cce10b94b5bfbf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-21974de8bafcb87481cde142b00f0a505f691800723b6fd66c45b97f6e8c30ef71ecc4124a8b79700e9fe947b1d5eb85a6c85a7f4df2c06dc2cce10b94b5bfbf"' :
                                            'id="xs-controllers-links-module-AppModule-21974de8bafcb87481cde142b00f0a505f691800723b6fd66c45b97f6e8c30ef71ecc4124a8b79700e9fe947b1d5eb85a6c85a7f4df2c06dc2cce10b94b5bfbf"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-21974de8bafcb87481cde142b00f0a505f691800723b6fd66c45b97f6e8c30ef71ecc4124a8b79700e9fe947b1d5eb85a6c85a7f4df2c06dc2cce10b94b5bfbf"' : 'data-bs-target="#xs-injectables-links-module-AppModule-21974de8bafcb87481cde142b00f0a505f691800723b6fd66c45b97f6e8c30ef71ecc4124a8b79700e9fe947b1d5eb85a6c85a7f4df2c06dc2cce10b94b5bfbf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-21974de8bafcb87481cde142b00f0a505f691800723b6fd66c45b97f6e8c30ef71ecc4124a8b79700e9fe947b1d5eb85a6c85a7f4df2c06dc2cce10b94b5bfbf"' :
                                        'id="xs-injectables-links-module-AppModule-21974de8bafcb87481cde142b00f0a505f691800723b6fd66c45b97f6e8c30ef71ecc4124a8b79700e9fe947b1d5eb85a6c85a7f4df2c06dc2cce10b94b5bfbf"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-63a3a3f0f6172f9863384789147112a1becced1164f84ac04f2a66958e378810db82fad1e3d1a1e8c5fe5c58628ab2253c26f09d5795f740dccfd5b13e85e5e1"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-63a3a3f0f6172f9863384789147112a1becced1164f84ac04f2a66958e378810db82fad1e3d1a1e8c5fe5c58628ab2253c26f09d5795f740dccfd5b13e85e5e1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-63a3a3f0f6172f9863384789147112a1becced1164f84ac04f2a66958e378810db82fad1e3d1a1e8c5fe5c58628ab2253c26f09d5795f740dccfd5b13e85e5e1"' :
                                            'id="xs-controllers-links-module-AuthModule-63a3a3f0f6172f9863384789147112a1becced1164f84ac04f2a66958e378810db82fad1e3d1a1e8c5fe5c58628ab2253c26f09d5795f740dccfd5b13e85e5e1"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-63a3a3f0f6172f9863384789147112a1becced1164f84ac04f2a66958e378810db82fad1e3d1a1e8c5fe5c58628ab2253c26f09d5795f740dccfd5b13e85e5e1"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-63a3a3f0f6172f9863384789147112a1becced1164f84ac04f2a66958e378810db82fad1e3d1a1e8c5fe5c58628ab2253c26f09d5795f740dccfd5b13e85e5e1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-63a3a3f0f6172f9863384789147112a1becced1164f84ac04f2a66958e378810db82fad1e3d1a1e8c5fe5c58628ab2253c26f09d5795f740dccfd5b13e85e5e1"' :
                                        'id="xs-injectables-links-module-AuthModule-63a3a3f0f6172f9863384789147112a1becced1164f84ac04f2a66958e378810db82fad1e3d1a1e8c5fe5c58628ab2253c26f09d5795f740dccfd5b13e85e5e1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-13b3fa75ab3572032350a4ce6629823837aa1dea3d5a2d8b699c9da7ef8449fa40b930448a5612747a1db415d39918e54614baf3669fc38ad1d51e431072645a"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-13b3fa75ab3572032350a4ce6629823837aa1dea3d5a2d8b699c9da7ef8449fa40b930448a5612747a1db415d39918e54614baf3669fc38ad1d51e431072645a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-13b3fa75ab3572032350a4ce6629823837aa1dea3d5a2d8b699c9da7ef8449fa40b930448a5612747a1db415d39918e54614baf3669fc38ad1d51e431072645a"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-13b3fa75ab3572032350a4ce6629823837aa1dea3d5a2d8b699c9da7ef8449fa40b930448a5612747a1db415d39918e54614baf3669fc38ad1d51e431072645a"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-13b3fa75ab3572032350a4ce6629823837aa1dea3d5a2d8b699c9da7ef8449fa40b930448a5612747a1db415d39918e54614baf3669fc38ad1d51e431072645a"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-13b3fa75ab3572032350a4ce6629823837aa1dea3d5a2d8b699c9da7ef8449fa40b930448a5612747a1db415d39918e54614baf3669fc38ad1d51e431072645a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-13b3fa75ab3572032350a4ce6629823837aa1dea3d5a2d8b699c9da7ef8449fa40b930448a5612747a1db415d39918e54614baf3669fc38ad1d51e431072645a"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-13b3fa75ab3572032350a4ce6629823837aa1dea3d5a2d8b699c9da7ef8449fa40b930448a5612747a1db415d39918e54614baf3669fc38ad1d51e431072645a"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-04845d9d8a4a09f5e35ba8592766fe3dd5a9f95aef4954eabed995372feebea9b4592b5184c7a0edcaa5bea1cfb7a27711d33c0d5b0d590a5e03eb2fc591df9f"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-04845d9d8a4a09f5e35ba8592766fe3dd5a9f95aef4954eabed995372feebea9b4592b5184c7a0edcaa5bea1cfb7a27711d33c0d5b0d590a5e03eb2fc591df9f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-04845d9d8a4a09f5e35ba8592766fe3dd5a9f95aef4954eabed995372feebea9b4592b5184c7a0edcaa5bea1cfb7a27711d33c0d5b0d590a5e03eb2fc591df9f"' :
                                            'id="xs-controllers-links-module-PostsModule-04845d9d8a4a09f5e35ba8592766fe3dd5a9f95aef4954eabed995372feebea9b4592b5184c7a0edcaa5bea1cfb7a27711d33c0d5b0d590a5e03eb2fc591df9f"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-04845d9d8a4a09f5e35ba8592766fe3dd5a9f95aef4954eabed995372feebea9b4592b5184c7a0edcaa5bea1cfb7a27711d33c0d5b0d590a5e03eb2fc591df9f"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-04845d9d8a4a09f5e35ba8592766fe3dd5a9f95aef4954eabed995372feebea9b4592b5184c7a0edcaa5bea1cfb7a27711d33c0d5b0d590a5e03eb2fc591df9f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-04845d9d8a4a09f5e35ba8592766fe3dd5a9f95aef4954eabed995372feebea9b4592b5184c7a0edcaa5bea1cfb7a27711d33c0d5b0d590a5e03eb2fc591df9f"' :
                                        'id="xs-injectables-links-module-PostsModule-04845d9d8a4a09f5e35ba8592766fe3dd5a9f95aef4954eabed995372feebea9b4592b5184c7a0edcaa5bea1cfb7a27711d33c0d5b0d590a5e03eb2fc591df9f"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-eb020339fe6aea3bc696a24e3445ffe3b30889b716c5280d32b7c87d156d4967622cfe36f3d408f518ddbd6836a0914d871574dfa3b736d19e153604e270a8b0"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-eb020339fe6aea3bc696a24e3445ffe3b30889b716c5280d32b7c87d156d4967622cfe36f3d408f518ddbd6836a0914d871574dfa3b736d19e153604e270a8b0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-eb020339fe6aea3bc696a24e3445ffe3b30889b716c5280d32b7c87d156d4967622cfe36f3d408f518ddbd6836a0914d871574dfa3b736d19e153604e270a8b0"' :
                                            'id="xs-controllers-links-module-TagsModule-eb020339fe6aea3bc696a24e3445ffe3b30889b716c5280d32b7c87d156d4967622cfe36f3d408f518ddbd6836a0914d871574dfa3b736d19e153604e270a8b0"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-eb020339fe6aea3bc696a24e3445ffe3b30889b716c5280d32b7c87d156d4967622cfe36f3d408f518ddbd6836a0914d871574dfa3b736d19e153604e270a8b0"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-eb020339fe6aea3bc696a24e3445ffe3b30889b716c5280d32b7c87d156d4967622cfe36f3d408f518ddbd6836a0914d871574dfa3b736d19e153604e270a8b0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-eb020339fe6aea3bc696a24e3445ffe3b30889b716c5280d32b7c87d156d4967622cfe36f3d408f518ddbd6836a0914d871574dfa3b736d19e153604e270a8b0"' :
                                        'id="xs-injectables-links-module-TagsModule-eb020339fe6aea3bc696a24e3445ffe3b30889b716c5280d32b7c87d156d4967622cfe36f3d408f518ddbd6836a0914d871574dfa3b736d19e153604e270a8b0"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-6a5d607b87ef522e2e1edd6e8dff752c0c309a9b26ad7e73dbd5c649c65c239a5bd8372aff35e6400abb3ccbb85ba88f9fda3fc05a14c5c0e7e870582d97c698"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-6a5d607b87ef522e2e1edd6e8dff752c0c309a9b26ad7e73dbd5c649c65c239a5bd8372aff35e6400abb3ccbb85ba88f9fda3fc05a14c5c0e7e870582d97c698"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-6a5d607b87ef522e2e1edd6e8dff752c0c309a9b26ad7e73dbd5c649c65c239a5bd8372aff35e6400abb3ccbb85ba88f9fda3fc05a14c5c0e7e870582d97c698"' :
                                            'id="xs-controllers-links-module-UsersModule-6a5d607b87ef522e2e1edd6e8dff752c0c309a9b26ad7e73dbd5c649c65c239a5bd8372aff35e6400abb3ccbb85ba88f9fda3fc05a14c5c0e7e870582d97c698"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-6a5d607b87ef522e2e1edd6e8dff752c0c309a9b26ad7e73dbd5c649c65c239a5bd8372aff35e6400abb3ccbb85ba88f9fda3fc05a14c5c0e7e870582d97c698"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-6a5d607b87ef522e2e1edd6e8dff752c0c309a9b26ad7e73dbd5c649c65c239a5bd8372aff35e6400abb3ccbb85ba88f9fda3fc05a14c5c0e7e870582d97c698"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-6a5d607b87ef522e2e1edd6e8dff752c0c309a9b26ad7e73dbd5c649c65c239a5bd8372aff35e6400abb3ccbb85ba88f9fda3fc05a14c5c0e7e870582d97c698"' :
                                        'id="xs-injectables-links-module-UsersModule-6a5d607b87ef522e2e1edd6e8dff752c0c309a9b26ad7e73dbd5c649c65c239a5bd8372aff35e6400abb3ccbb85ba88f9fda3fc05a14c5c0e7e870582d97c698"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});