import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { DatosService } from "../../services/datos.service";

@Injectable({
  providedIn: "root"
})
export class DemoResolverService implements Resolve<any> {
  constructor(private _postsService: DatosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._postsService.obtenerAplicaciones();
  }
}