import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './components/Widget/Widget.component';
import { NgIconsModule } from "@ng-icons/core";
import { PictureWidgetComponent } from './components/picture-Widget/picture-Widget.component';
import { HomeViewComponent } from './views/home-View/home-View.component';
import { TechnologyViewComponent } from './views/technology-View/technology-View.component';
import { ConfiguratorViewComponent } from './views/configurator-View/configurator-View.component';

import { simpleGithub, simpleLinkedin, simpleDotnet } from '@ng-icons/simple-icons';
import { EproViewComponent } from './views/epro-View/epro-View.component';
import { GatewayViewComponent } from './views/gateway-view/gateway-View.component';
import { PolyengineViewComponent } from './views/polyengine-view/polyengine-view.component';
import { EproconfiguratorViewComponent } from './views/eproconfigurator-view/eproconfigurator-view.component';
import { MindofspaceViewComponent } from './views/mindofspace-view/mindofspace-view.component';
import { ProjectyViewComponent } from './views/projecty-view/projecty-view.component';
import { NgOptimizedImage } from "@angular/common";
import { ProjectyWebViewComponent } from './views/projecty-web-view/projecty-web-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    PictureWidgetComponent,
    HomeViewComponent,
    TechnologyViewComponent,
    ConfiguratorViewComponent,
    EproViewComponent,
    GatewayViewComponent,
    PolyengineViewComponent,
    EproconfiguratorViewComponent,
    MindofspaceViewComponent,
    ProjectyViewComponent,
    ProjectyWebViewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgIconsModule.withIcons({simpleGithub, simpleLinkedin, simpleDotnet}),
        NgOptimizedImage,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
