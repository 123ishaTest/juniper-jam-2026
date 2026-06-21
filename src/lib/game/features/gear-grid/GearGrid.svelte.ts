import { LudiekFeature } from '@123ishatest/ludiek';
import type { GearContent, GearDetail, GearId } from '$lib/game/features/gear-grid/Gear.content';

export interface GearState {
  x: number;
  y: number;
  gear: GearId | null;
}

export interface GearGridState {
  grid: GearState[][];
}

type Dependencies = {
  content: [GearContent];
};

export class GearGrid extends LudiekFeature<Dependencies> {
  public readonly type = 'gearGrid';

  public readonly HEIGHT = 10;
  public readonly WIDTH = 10;

  protected _state: GearGridState = $state({
    grid: [],
  });

  initialize() {
    this._state.grid = [];
    for (let y = 0; y < this.HEIGHT; y++) {
      const row: GearState[] = [];
      for (let x = 0; x < this.WIDTH; x++) {
        row.push({
          x,
          y,
          gear: null,
        });
      }
      this._state.grid.push(row);
    }
    console.log('initalized', this._state.grid.length);
  }

  public placeGear(x: number, y: number, gearId: GearId): void {
    this._state.grid[y][x].gear = gearId;
  }

  public removeById(gearId: GearId): void {
    return this.grid.forEach((row) => {
      row.forEach((tile) => {
        if (tile.gear === gearId) {
          tile.gear = null;
        }
      });
    });
  }

  public removeGear(x: number, y: number): void {
    this._state.grid[y][x].gear = null;
  }

  public moveGear(fromX: number, fromY: number, toX: number, toY: number) {
    const fromGear = this.getGear(fromX, fromY);
    if (!fromGear) {
      console.warn(`Cannot move gear as there was no gear at (${fromX}, ${fromY})`);
      return;
    }
    const toGear = this.getGear(toX, toY);
    if (toGear) {
      this.swapGears(fromX, fromY, toX, toY);
      return;
    }

    this.removeGear(fromX, fromY);
    this.placeGear(toX, toY, fromGear);
  }

  public swapGears(fromX: number, fromY: number, toX: number, toY: number) {
    const fromGear = this.getGear(fromX, fromY);
    const toGear = this.getGear(toX, toY);

    if (!(fromGear && toGear)) {
      console.warn(`Cannot swap gear '${fromGear}' with '${toGear}`);
      return;
    }

    this.placeGear(toX, toY, fromGear);
    this.placeGear(fromX, fromY, toGear);
  }

  public getGear(x: number, y: number): GearId | null {
    return this._state.grid[y][x].gear;
  }

  public isPlaced(gearId: GearId): boolean {
    return this.grid.some((row) => row.some((tile) => tile.gear === gearId));
  }

  public get gears(): GearDetail[] {
    return this.engine.contentManager.getList('gear');
  }

  public get grid(): GearState[][] {
    return this._state.grid;
  }
}
