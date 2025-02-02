import angularJson from '../../../../angular.json';

//Base Angular Modules
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { ActivityMonitorComponent } from './common/elements/activity-monitor/activity-monitor.component';
import { ButtonComponent } from './common/elements/button/button.component';
import { ErrorHandlerComponent } from './common/elements/error-handler/error-handler.component';
import { ErrorIndicatorComponent } from './common/elements/error-indicator/error-indicator.component';
import { FooterComponent } from './common/elements/footer/footer.component';
import { HeaderComponent } from './common/elements/header/header.component';
import { InputComponent } from './common/elements/input/input.component';
import { LoadingIndicatorComponent } from './common/elements/loading-indicator/loading-indicator.component';
import { PanoramaComponent } from './common/elements/panorama/panorama.component';
import { SelectionComponent } from './common/elements/selection/selection.component';
import { SubSectionComponent } from './common/elements/sub-section/sub-section.component';
import { TooltipComponent } from './common/elements/tooltip/tooltip.component';
import { VersionSelectorViewComponent } from './common/views/version-selector/version-selector.component';
import { WindowComponent } from './common/views/window/window.component';
import { ChangelogComponent } from './common/views/windows/changelog/changelog.component';
import { CreditsComponent } from './common/views/windows/credits/credits.component';
import { SettingsComponent } from './common/views/windows/settings/settings.component';
import { CraftingRecipeRandomizerViewComponent } from './crafting-recipe-randomizer/views/crafting-recipe-randomizer-view/crafting-recipe-randomizer-view.component';
import { CraftingRecipeRandomizerFAQComponent } from './crafting-recipe-randomizer/views/frequently-asked-questions/frequently-asked-questions.component';
import { CraftingRecipeRandomizerInstructionsComponent } from './crafting-recipe-randomizer/views/instructions/instructions.component';
import { SplashComponent } from './info-tab/elements/splash/splash.component';
import { InfoTabViewComponent } from './info-tab/views/info-tab-view/info-tab-view.component';
import { LootTableRandomizerFAQComponent } from './loot-table-randomizer/views/frequently-asked-questions/frequently-asked-questions.component';
import { LootTableRandomizerInstructionsComponent } from './loot-table-randomizer/views/instructions/instructions.component';
import { LootTableRandomizerViewComponent } from './loot-table-randomizer/views/loot-table-randomizer-view/loot-table-randomizer-view.component';

//Services
import { PanoramaService } from './common/services/panorama-service/panorama.service';
import { TitleService } from './common/services/title-service/title.service';
import { ToolboxSettingsService } from './common/services/toolbox-settings/toolbox-settings.service';

//Interceptors
import { CacheInterceptor } from './common/interceptors/cache/cache.interceptor';
import { LocalInterceptor } from './common/interceptors/local/local.interceptor';

//Pipes
import { FilterPipe } from './common/pipes/filter/filter.pipe';
import { ReversePipe } from './common/pipes/reverse/reverse.pipe';

@NgModule({
	declarations: [
		AppComponent,
		InfoTabViewComponent,
		LootTableRandomizerViewComponent,
		PanoramaComponent,
		SelectionComponent,
		HeaderComponent,
		FilterPipe,
		VersionSelectorViewComponent,
		FooterComponent,
		ActivityMonitorComponent,
		ErrorHandlerComponent,
		WindowComponent,
		CreditsComponent,
		SettingsComponent,
		ChangelogComponent,
		ReversePipe,
		SplashComponent,
		ButtonComponent,
		InputComponent,
		SubSectionComponent,
		TooltipComponent,
		LoadingIndicatorComponent,
		ErrorIndicatorComponent,
		CraftingRecipeRandomizerViewComponent,
		LootTableRandomizerInstructionsComponent,
		LootTableRandomizerFAQComponent,
		CraftingRecipeRandomizerInstructionsComponent,
		CraftingRecipeRandomizerFAQComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [
		TitleService,
		PanoramaService,
		ToolboxSettingsService,
		{
			provide: APP_BASE_HREF,
			useValue: angularJson.projects['toolbox-main'].architect.build.options.baseHref
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LocalInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CacheInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }