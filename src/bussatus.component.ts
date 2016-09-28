import { Component, OnInit } from "@angular/core";
import { BusService } from "./bus.service";
import { Bus } from "./bus.model";
import { Inject } from "@angular/core";

@Component({
	selector: "bus-status",
	templateUrl: "./src/busstatus.component.html",
	providers: [BusService]
})
export class BusStatusComponent implements OnInit {
	buses: Bus[] = [];

	constructor(@Inject(BusService) private busService: BusService) {	}

	ngOnInit(){
		this.buses = this.busService.getBuses();
	}
}
