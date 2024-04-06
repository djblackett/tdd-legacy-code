import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("item constructor", () => {
    const item = new Item("foo", 0, 0);
    expect(item.name).to.equal("foo");
    expect(item.quality).to.equal(0)
    expect(item.sellIn).to.equal(0)
  });

  test("Shop constructor", () => {
    const shop = new Shop([new Item("foo", 0, 0)])
    expect(shop.items).toBeInstanceOf(Array);
  })

  test("Shop constructor", () => {
    const shop = new Shop([new Item("foo", 0, 0)])
    expect(shop.items[0]).toBeInstanceOf(Item);
  })



  describe("Aged Brie", () => {
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
      const gildedRose = new Shop([new Item("Aged Brie", 1, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    })

    test("should raise quality by 2 when quality is 47 and sellIn == 0", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 47)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(49);
    })

    test("should raise quality by 2 when quality is 47 and sellIn == 0", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    })


  })

describe("any string other than hard coded example", () => {

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

  test("should reduce quality of Moose by 2", () => {
    const gildedRose = new Shop([new Item("Moose", -10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(48)
  })

  test("should reduce quality by 2", () => {
    const gildedRose = new Shop([new Item("Moose", 0, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(49)
  })

  test("should not change quality of Moose when sellIn > 0", () => {
    const gildedRose = new Shop([new Item("Moose", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  })

  test("should not change quality of Moose when sellIn == 0", () => {
    const gildedRose = new Shop([new Item("Moose", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  })

})


  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    test("should raise quality by 3 for Backstage passes to a TAFKAL80ETC concert", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(8)
    })

    test("should lower quality to 0 for Backstage passes to a TAFKAL80ETC concert when sellIn <= 0", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0)
    })

    test("should not change quality for Backstage passes to a TAFKAL80ETC concert when sellIn > 0 and quality > 50", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 51)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(51)
    })

    test("should not change quality for Backstage passes to a TAFKAL80ETC concert when sellIn > 11 and quality > 50", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 51)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(51)
    })

    test("should +1 quality when sellIn = 12 and quality = 49", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50)
    })

    test("should +1 quality when sellIn = 12 and quality = 49", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 48)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0)
    })

    test("should +1 quality when sellIn = 11 and quality = 49", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50)
    })

    test("should not change quality for Backstage passes to a TAFKAL80ETC concert when sellIn > 11 and quality == 50", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50)
    })


    test("should reduce sellIn by 1 for Backstage passes to a TAFKAL80ETC concert", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4)
    })

    test("should not change quality for Backstage passes to a TAFKAL80ETC concert when sellIn == 11 and quality == 50", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50)
    })

    test("should reduce sellIn by 1 for Backstage passes to a TAFKAL80ETC concert", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9)
    })

  test("should raise quality by 2 when 6 < sellIn < 11", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(7)
  })
})

  describe("Sulfuras, Hand of Ragnaros", () => {
    test("should not change quality for Sulfuras, Hand of Ragnaros", () => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(5)
    })

    test("should not change sellIn for Sulfuras, Hand of Ragnaros", () => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5)
    })

    test("should not change sellIn for Sulfuras, Hand of Ragnaros", () => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5)
    })

    test("should not change sellIn for Sulfuras, Hand of Ragnaros", () => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(1)
    })
  })



});
