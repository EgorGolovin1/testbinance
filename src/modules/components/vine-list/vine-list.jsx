import React from "react";
// import PropTypes from "prop-types";
import VineCard from "../vine-card/vine-card";
import classes from "./vine-list.module.sass";
// const vinesWithNavar = [{sort: 'isabella', navar: 10}]
// const vinesWithCost = [{sort: 'isabella', costPerBottle: 100, costPerGlass: 30}]

// 1. Вернуть общую стоимость винной карты: число
// 2. Вернуть обьект в формате:
// {
//     isabella: 10,
//     pinogridgio: 20,
//     sort: navar
//     ...
// }
// Результат: Сделать станичку, где будет список вин 9 штук, плитка, название - цена за бутылку - цена за бокал - navar.
//     кнопка расчитать - посчитат сумму за всех бутылок, посчитат сумму за все бокалы. Бутылка 750, 150.
const VineList = () => {
  // const vinesWithNavar = [
  //   { sort: "Isabella", navar: 10 },
  //   { sort: "PinoGridgio", navar: 15 },
  //   { sort: "Sangiovese", navar: 25 },
  //   { sort: "Riesling", navar: 20 },
  //   { sort: "Sauvignon", navar: 10 },
  //   { sort: "Shiraz", navar: 30 },
  //   { sort: "Saperavi", navar: 35 },
  //   { sort: "Merlot", navar: 25 },
  //   { sort: "Malbec", navar: 20 },
  //   { sort: "Chardonnay", navar: 15 },
  // ];

  const vinesWithCost = [
    { sort: "Isabella", costPerBottle: 1000, costPerGlass: 220 },
    { sort: "PinoGridgio", costPerBottle: 1500, costPerGlass: 330 },
    { sort: "Sangiovese", costPerBottle: 2400, costPerGlass: 528 },
    { sort: "Riesling", costPerBottle: 2600, costPerGlass: 572 },
    { sort: "Sauvignon", costPerBottle: 2400, costPerGlass: 528 },
    { sort: "Shiraz", costPerBottle: 5000, costPerGlass: 1100 },
    { sort: "Saperavi", costPerBottle: 2000, costPerGlass: 440 },
    { sort: "Merlot", costPerBottle: 8000, costPerGlass: 1760 },
    { sort: "Malbec", costPerBottle: 6000, costPerGlass: 1320 },
    { sort: "Chardonnay", costPerBottle: 2200, costPerGlass: 462 },
  ];
  const costOfBottls = vinesWithCost.reduce((acum, next) => {
    return { ...acum, [next.sort]: next.costPerBottle };
  }, {});
  console.log(costOfBottls);

  return (
    <div className={classes.wrapper}>
      {vinesWithCost.reduce((acum, next) => {
        <VineCard array={acum} />;
        acum.push(next.sort, next.costPerBottle, next.costPerGlass);
        return acum;
      }, [])}
      ;
      {/* {vinesWithCost.map((item) => (
        <VineCard
          key={item.sort}
          name={item.sort}
          costBottle={item.costPerBottle}
          costGlass={item.costPerGlass}
        />
      ))} */}
    </div>
  );
};

export default VineList;
