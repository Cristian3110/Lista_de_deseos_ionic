import { Component, OnInit } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista } from "../../models/lista.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"],
})
export class ListasComponent implements OnInit {
  constructor(public deseosService: DeseosService, private router: Router) {}

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    console.log(lista);
    this.router.navigateByUrl(`/tabs/agregar/${lista.id}`);
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
    this.deseosService.guardarStorage();
  }
}
