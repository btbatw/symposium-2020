import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MdButtonModule,
	// MdCheckboxModule,
	// MdToolbarModule,
	// MdListModule,
	// MdChipsModule,
	MdTabsModule,
	// MdCardModule,
	MdDialogModule,
	// MdSlideToggleModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

@NgModule({
	imports: [CommonModule],
	declarations: [],
	exports: [
		CommonModule,
		MdButtonModule,
		// MdCheckboxModule,
		// MdToolbarModule,
		// MdListModule,
		// MdChipsModule,
		MdTabsModule,
		// MdCardModule,
		MdDialogModule,
		// MdSlideToggleModule,
		FlexLayoutModule,
		AngularFontAwesomeModule
	]
})
export class SharedModule {
	constructor() {
	  }
}
