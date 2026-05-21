import * as L from "leaflet";

declare module "leaflet" {
  interface HeatLayerOptions {
    minOpacity?: number;
    maxZoom?: number;
    max?: number;
    radius?: number;
    blur?: number;
    gradient?: { [key: number]: string };
  }

  interface HeatLayer extends L.Layer {
    setOptions(options: HeatLayerOptions): this;
    addLatLng(latlng: L.LatLngExpression): this;
    setLatLngs(latlngs: Array<L.LatLngExpression | [number, number, number]>): this;
    redraw(): this;
  }

  function heatLayer(
    latlngs: Array<L.LatLngExpression | [number, number, number]>,
    options?: HeatLayerOptions
  ): HeatLayer;
}

declare module "leaflet.heat" {
  import * as L from "leaflet";
  export = L;
}
