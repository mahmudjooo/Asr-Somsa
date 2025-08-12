export const navLinks = [
  {
    name: "Asosiy Oyna",
    route: "/asosiy-oyna",
  },
  {
    name: "Biz Haqimizda",
    route: "/biz-haqimizda",
  },
  {
    name: "Filialar",
    route: "/filialar",
  },
  {
    name: "Bog'lanish",
    route: "/boglanish",
  },
];

export const MENU_ITEMS = {
  taomlar: Array.from({ length: 10 }, (_, i) => ({
    id: `taom-${i + 1}`,
    name: `Taom ${i + 1}`,
    description: `Mazali taom ${i + 1}`,
  })),
  ichimliklar: Array.from({ length: 10 }, (_, i) => ({
    id: `ichimlik-${i + 1}`,
    name: `Ichimlik ${i + 1}`,
    description: `Salqin ichimlik ${i + 1}`,
  })),
  shirinliklar: Array.from({ length: 10 }, (_, i) => ({
    id: `shirin-${i + 1}`,
    name: `Shirinlik ${i + 1}`,
    description: `Shirinlik ${i + 1}`,
  })),
};
