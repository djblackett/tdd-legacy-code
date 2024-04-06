import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  test("should raise item quality by 2 for Aged Brie when sellIn is <= 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(7);
  })

  test("should raise item quality by 1 for Aged Brie when sellIn is > 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
  })

  test("should reduce sellIn by 1 for Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
  })

  test("should not change quality of Aged Brie when quality is > 50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(51);
  })

  test("should not change quality of Aged Brie when quality is > 50 and sellIn > 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(51);
  })

  test("should reduce Moose quality by 1", () => {
    const gildedRose = new Shop([new Item("Moose", 5, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(4);
  })

  test("should reduce Moose sellIn by 1", () => {
    const gildedRose = new Shop([new Item("Moose", 5, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4)
  })
});
