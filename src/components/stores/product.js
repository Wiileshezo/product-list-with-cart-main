import { ref } from "vue";
import { defineStore } from "pinia";

//images
import WaffleMob from "@/assets/images/image-waffle-mobile.jpg";
import WaffleDesk from "@/assets/images/image-waffle-desktop.jpg";
import WaffleTab from "@/assets/images/image-waffle-tablet.jpg";
import WaffleThum from "@/assets/images/image-waffle-thumbnail.jpg";

import CrèmeMob from "@/assets/images/image-creme-brulee-mobile.jpg";
import CrèmeDesk from "@/assets/images/image-creme-brulee-desktop.jpg";
import CrèmeTab from "@/assets/images/image-creme-brulee-tablet.jpg";
import CrèmeThum from "@/assets/images/image-creme-brulee-thumbnail.jpg";

import MacaronMob from "@/assets/images/image-macaron-mobile.jpg";
import MacaronDesk from "@/assets/images/image-macaron-desktop.jpg";
import MacaronTab from "@/assets/images/image-macaron-tablet.jpg";
import MacaronThum from "@/assets/images/image-macaron-thumbnail.jpg";

import TiramisuMob from "@/assets/images/image-tiramisu-mobile.jpg";
import TiramisuDesk from "@/assets/images/image-tiramisu-desktop.jpg";
import TiramisuTab from "@/assets/images/image-tiramisu-tablet.jpg";
import TiramisuThum from "@/assets/images/image-tiramisu-thumbnail.jpg";

import BaklavaMob from "@/assets/images/image-baklava-mobile.jpg";
import BaklavaDesk from "@/assets/images/image-baklava-desktop.jpg";
import BaklavaTab from "@/assets/images/image-baklava-tablet.jpg";
import BaklavaThum from "@/assets/images/image-baklava-thumbnail.jpg";

import PieMob from "@/assets/images/image-meringue-mobile.jpg";
import PieDesk from "@/assets/images/image-meringue-desktop.jpg";
import PieTab from "@/assets/images/image-meringue-tablet.jpg";
import PieThum from "@/assets/images/image-meringue-thumbnail.jpg";

import CakeMob from "@/assets/images/image-cake-mobile.jpg";
import CakeDesk from "@/assets/images/image-cake-desktop.jpg";
import CakeTab from "@/assets/images/image-cake-tablet.jpg";
import CakeThum from "@/assets/images/image-cake-thumbnail.jpg";

import BrownieMob from "@/assets/images/image-brownie-mobile.jpg";
import BrownieDesk from "@/assets/images/image-brownie-desktop.jpg";
import BrownieTab from "@/assets/images/image-brownie-tablet.jpg";
import BrownieThum from "@/assets/images/image-brownie-thumbnail.jpg";

import PannaMob from "@/assets/images/image-panna-cotta-mobile.jpg";
import PannaDesk from "@/assets/images/image-panna-cotta-desktop.jpg";
import PannaTab from "@/assets/images/image-panna-cotta-tablet.jpg";
import PannaThum from "@/assets/images/image-panna-cotta-thumbnail.jpg";

export const useProductsStore = defineStore("storedProducts", () => {
  /*
   state
   */

  // product data
  const products = ref([
    {
      id: "Waffle",
      title: "Waffle",
      details: "Waffle with Berries",
      price: 6.5,
      mob: WaffleMob,
      desk: WaffleDesk,
      tab: WaffleTab,
      thum: WaffleThum,
      isActive: false,
      qty: 0,
    },
    {
      id: "Crème",
      title: "Crème Brûlée",
      details: "Vanilla Bean Crème Brûlée",
      price: 7.0,
      mob: CrèmeMob,
      desk: CrèmeDesk,
      tab: CrèmeTab,
      thum: CrèmeThum,
      isActive: false,
      qty: 0,
    },
    {
      id: "Macaron",
      title: "Macaron",
      details: "Macaron Mix of Five",
      price: 8.0,
      mob: MacaronMob,
      desk: MacaronDesk,
      tab: MacaronTab,
      thum: MacaronThum,
      isActive: false,
      qty: 0,
    },
    {
      id: "Tiramisu",
      title: "Tiramisu",
      details: "Classic Tiramisu",
      price: 5.5,
      mob: TiramisuMob,
      desk: TiramisuDesk,
      tab: TiramisuTab,
      thum: TiramisuThum,
      isActive: false,
      qty: 0,
    },
    {
      id: "Baklava",
      title: "Baklava",
      details: "Pistachio Baklava",
      price: 4.0,
      mob: BaklavaMob,
      desk: BaklavaDesk,
      tab: BaklavaTab,
      thum: BaklavaThum,
      isActive: false,
      qty: 0,
    },
    {
      id: "Pie",
      title: "Pie",
      details: "Lemon Meringue Pie",
      price: 5.0,
      mob: PieMob,
      desk: PieDesk,
      tab: PieTab,
      thum: PieThum,
      isActive: false,
      qty: 0,
    },
    {
      id: "Cake",
      title: "Cake",
      details: "Red Velvet Cake",
      price: 4.5,
      mob: CakeMob,
      desk: CakeDesk,
      tab: CakeTab,
      thum: CakeThum,
      isActive: false,
      qty: 0,
    },
    {
      id: "Brownie",
      title: "Brownie",
      details: "Salted Caramel Brownie",
      price: 4.5,
      mob: BrownieMob,
      desk: BrownieDesk,
      tab: BrownieTab,
      thum: BrownieThum,
      isActive: false,
      qty: 0,
    },
    {
      id: "Panna",
      title: "Panna Cotta",
      details: "Vanilla Panna Cotta",
      price: 6.5,
      mob: PannaMob,
      desk: PannaDesk,
      tab: PannaTab,
      thum: PannaThum,
      isActive: false,
      qty: 0,
    },
  ]);

  const setProductToInactive = (id) => {
    const OriginalProduct = products.value.find((p) => p.id === id);
    OriginalProduct.isActive = false;
  };

  return {
    // state
    products,

    // actions
    setProductToInactive,
    // getters
  };
});
