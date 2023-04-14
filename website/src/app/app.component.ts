import { Component, OnInit } from '@angular/core';
import {
  createPrimaryPalette,
  createComplementaryPalette,
  createAnalogousPalette,
  createTriadicPalette,
  toRgbColorOrNull,
} from '@yosulramp/material-color-palette-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userColorHex = 'F44336';

  complementaryUserColorHex?: string;
  analogousUserColorHex?: string[];
  triadicUserColorHex?: string[];

  primaryPaletteAsHex?: string[];
  complementaryPaletteAsHex?: string[];
  analogousPaletteAsHex?: string[][];
  triadicPaletteAsHex?: string[][];

  standardPrimaryColorHex?: string;

  colorWeight: number[] = [];

  ngOnInit() {
    this.colorWeight = Array.from({ length: 10 }, (_, index) =>
      index === 0 ? 50 : index * 100
    );

    this.setPalette(this.userColorHex);
  }

  onChangePrimaryColor = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    // Ignore prefix "#".
    this.userColorHex = value.startsWith('#') ? value.substring(1) : value;

    this.setPalette(this.userColorHex);
  };

  setPalette(colorHex: string) {
    const primaryPalette = createPrimaryPalette(colorHex);
    this.primaryPaletteAsHex = primaryPalette?.map(rgbColor => rgbColor.rgbHex);
    const deltaColorHex = this.primaryPaletteAsHex?.map(colorHex =>
      Math.abs(parseInt(this.userColorHex, 16) - parseInt(colorHex, 16))
    );
    // Handling exception like "F43111" case.
    if (deltaColorHex) {
      const minDelta = Math.min(...deltaColorHex);
      const indexOfMinDelta = deltaColorHex.indexOf(minDelta);
      if (this.primaryPaletteAsHex) {
        this.standardPrimaryColorHex =
          this.primaryPaletteAsHex[indexOfMinDelta];
      }
    }

    const complementaryPalette = createComplementaryPalette(colorHex);
    this.complementaryUserColorHex = toRgbColorOrNull(colorHex)
      ?.toHslColor()
      .complementaryColor.toRgbColor().rgbHex;
    this.complementaryPaletteAsHex = complementaryPalette?.map(
      rgbColor => rgbColor.rgbHex
    );

    const analogousPalette = createAnalogousPalette(colorHex);
    this.analogousUserColorHex = toRgbColorOrNull(colorHex)
      ?.toHslColor()
      .analogousColor.map(color => color.toRgbColor().rgbHex);
    this.analogousPaletteAsHex = analogousPalette?.map(rgbColors =>
      rgbColors.map(rgbColor => rgbColor.rgbHex)
    );

    const triadicPalette = createTriadicPalette(colorHex);
    this.triadicUserColorHex = toRgbColorOrNull(colorHex)
      ?.toHslColor()
      .triadicColor.map(color => color.toRgbColor().rgbHex);
    this.triadicPaletteAsHex = triadicPalette?.map(rgbColors =>
      rgbColors.map(rgbColor => rgbColor.rgbHex)
    );
  }
}
