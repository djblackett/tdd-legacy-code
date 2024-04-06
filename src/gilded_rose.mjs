export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  // backstage passes increase in value as concert day approaches, except for really high value concerts
  checkTimeToConcert(item) {
    if (item.sellIn < 11) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
    if (item.sellIn < 6) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }


  checkPastSellDate(item) {
    if (item.sellIn < 0) {
      if (item.name !== "Aged Brie")
        if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            if (item.name !== "Sulfuras, Hand of Ragnaros") {
              item.quality = item.quality - 1;
            }
          }
        }

        // concert tickets have no value after date of concert
          if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
            item.quality = item.quality - item.quality;
            return;
          }

      // Aged cheese increases in value
        if (item.name === "Aged Brie" && item.quality < 50) {
          item.quality = item.quality + 1;
          return;
        }

      if (item.name === "Sulfuras, Hand of Ragnaros") {
        return;
      }

      if (item.quality > 0) {
        // item.quality = item.quality - 1;
      }


    }
  }

  updateQuality() {
    for (let item of this.items) {
      if (item.name !== "Aged Brie" && item.name !== "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name !== "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
            this.checkTimeToConcert(item);
          }
        }
      }
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn = item.sellIn - 1;
      }
      this.checkPastSellDate(item);
    }
    return this.items;
  }
}
