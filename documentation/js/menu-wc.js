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
                                            'data-bs-target="#controllers-links-module-AppModule-9a9adde07f58289ce700e7c7cfda8dd0914854a4d28367aa7c8a8266e7f1fd5e738df5370e47465c16eea65e70e7903f4ba04667467cea7f32efc51ac4e9b8a2"' : 'data-bs-target="#xs-controllers-links-module-AppModule-9a9adde07f58289ce700e7c7cfda8dd0914854a4d28367aa7c8a8266e7f1fd5e738df5370e47465c16eea65e70e7903f4ba04667467cea7f32efc51ac4e9b8a2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9a9adde07f58289ce700e7c7cfda8dd0914854a4d28367aa7c8a8266e7f1fd5e738df5370e47465c16eea65e70e7903f4ba04667467cea7f32efc51ac4e9b8a2"' :
                                            'id="xs-controllers-links-module-AppModule-9a9adde07f58289ce700e7c7cfda8dd0914854a4d28367aa7c8a8266e7f1fd5e738df5370e47465c16eea65e70e7903f4ba04667467cea7f32efc51ac4e9b8a2"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-9a9adde07f58289ce700e7c7cfda8dd0914854a4d28367aa7c8a8266e7f1fd5e738df5370e47465c16eea65e70e7903f4ba04667467cea7f32efc51ac4e9b8a2"' : 'data-bs-target="#xs-injectables-links-module-AppModule-9a9adde07f58289ce700e7c7cfda8dd0914854a4d28367aa7c8a8266e7f1fd5e738df5370e47465c16eea65e70e7903f4ba04667467cea7f32efc51ac4e9b8a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9a9adde07f58289ce700e7c7cfda8dd0914854a4d28367aa7c8a8266e7f1fd5e738df5370e47465c16eea65e70e7903f4ba04667467cea7f32efc51ac4e9b8a2"' :
                                        'id="xs-injectables-links-module-AppModule-9a9adde07f58289ce700e7c7cfda8dd0914854a4d28367aa7c8a8266e7f1fd5e738df5370e47465c16eea65e70e7903f4ba04667467cea7f32efc51ac4e9b8a2"' }>
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
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-574b2ceef788f17086d082c37e87666426eda1a762648efc843e6c1770413a3110f7458ac30fd7145c5717fbd5f8517d09cd7440b8e368f9c9b82ef48d8e734f"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-574b2ceef788f17086d082c37e87666426eda1a762648efc843e6c1770413a3110f7458ac30fd7145c5717fbd5f8517d09cd7440b8e368f9c9b82ef48d8e734f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-574b2ceef788f17086d082c37e87666426eda1a762648efc843e6c1770413a3110f7458ac30fd7145c5717fbd5f8517d09cd7440b8e368f9c9b82ef48d8e734f"' :
                                            'id="xs-controllers-links-module-PostsModule-574b2ceef788f17086d082c37e87666426eda1a762648efc843e6c1770413a3110f7458ac30fd7145c5717fbd5f8517d09cd7440b8e368f9c9b82ef48d8e734f"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-574b2ceef788f17086d082c37e87666426eda1a762648efc843e6c1770413a3110f7458ac30fd7145c5717fbd5f8517d09cd7440b8e368f9c9b82ef48d8e734f"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-574b2ceef788f17086d082c37e87666426eda1a762648efc843e6c1770413a3110f7458ac30fd7145c5717fbd5f8517d09cd7440b8e368f9c9b82ef48d8e734f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-574b2ceef788f17086d082c37e87666426eda1a762648efc843e6c1770413a3110f7458ac30fd7145c5717fbd5f8517d09cd7440b8e368f9c9b82ef48d8e734f"' :
                                        'id="xs-injectables-links-module-PostsModule-574b2ceef788f17086d082c37e87666426eda1a762648efc843e6c1770413a3110f7458ac30fd7145c5717fbd5f8517d09cd7440b8e368f9c9b82ef48d8e734f"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-be231828de2f8e1ba35b5e1826b992fc536ad4edae3d6d26fdee5ac05921db5ef31bf858bbe4f808b5a4e92ba0507a63928812fda75ffbdf7b6831b4584e36e9"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-be231828de2f8e1ba35b5e1826b992fc536ad4edae3d6d26fdee5ac05921db5ef31bf858bbe4f808b5a4e92ba0507a63928812fda75ffbdf7b6831b4584e36e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-be231828de2f8e1ba35b5e1826b992fc536ad4edae3d6d26fdee5ac05921db5ef31bf858bbe4f808b5a4e92ba0507a63928812fda75ffbdf7b6831b4584e36e9"' :
                                            'id="xs-controllers-links-module-UsersModule-be231828de2f8e1ba35b5e1826b992fc536ad4edae3d6d26fdee5ac05921db5ef31bf858bbe4f808b5a4e92ba0507a63928812fda75ffbdf7b6831b4584e36e9"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-be231828de2f8e1ba35b5e1826b992fc536ad4edae3d6d26fdee5ac05921db5ef31bf858bbe4f808b5a4e92ba0507a63928812fda75ffbdf7b6831b4584e36e9"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-be231828de2f8e1ba35b5e1826b992fc536ad4edae3d6d26fdee5ac05921db5ef31bf858bbe4f808b5a4e92ba0507a63928812fda75ffbdf7b6831b4584e36e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-be231828de2f8e1ba35b5e1826b992fc536ad4edae3d6d26fdee5ac05921db5ef31bf858bbe4f808b5a4e92ba0507a63928812fda75ffbdf7b6831b4584e36e9"' :
                                        'id="xs-injectables-links-module-UsersModule-be231828de2f8e1ba35b5e1826b992fc536ad4edae3d6d26fdee5ac05921db5ef31bf858bbe4f808b5a4e92ba0507a63928812fda75ffbdf7b6831b4584e36e9"' }>
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
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
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
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
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
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
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