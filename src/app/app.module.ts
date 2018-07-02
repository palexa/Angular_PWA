import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./child.component";
import { HeaderComponent } from "./components/header.component/header.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent,ChildComponent,HeaderComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}