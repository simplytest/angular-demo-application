import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./card/card.component";
import { FriendBoxComponent } from "./friend-box/friend-box.component";
import { HeaderComponent } from "./header/header.component";
import { MatIconModule } from "@angular/material/icon";
import { NgModule } from "@angular/core";
import { ProfileRowComponent } from "./profile-row/profile-row.component";
import { ProposalsComponent } from "./proposals/proposals.component";

@NgModule({
	declarations: [
		AppComponent,
		CardComponent,
		FriendBoxComponent,
		HeaderComponent,
		ProfileRowComponent,
		ProposalsComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
