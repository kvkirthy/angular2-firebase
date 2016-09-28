import { Routes, RouterModule } from "@angular/router";
import { BusStatusComponent } from "./bussatus.component";
import { BusEditComponent } from "./busedit.component";

export var routes: Routes = [
	{ path: '', component: BusStatusComponent },
	{ path: 'busedit/:id', component: BusEditComponent }
];

export const App_Routing = RouterModule.forRoot(routes);
